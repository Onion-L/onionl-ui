import { useUserMedia } from '@vueuse/core'

/**
 * @description Audio Recorder
 * @function getMicrophonePermission 获取麦克风权限
 * @function startRecording 开始录音
 * @function stopRecording 停止录音
 * @function saveAudio 保存音频
 * @function createWavBuffer 创建WAV音频
 */
export function useMicrophone() {
  const { isSupported } = useUserMedia({
    constraints: {
      audio: true,
      video: false,
    },
  })
  let mediaRecorder: MediaRecorder
  let audioChunks: Blob[] = []
  let mediaStream: MediaStream | undefined

  async function getMicrophonePermission(): Promise<MediaStream | undefined> {
    try {
      if (!isSupported)
        throw new Error('Microphone is not supported')
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true })
      return mediaStream
    }
    catch (error) {
      if (error instanceof DOMException) {
        switch (error.name) {
          case 'NotAllowedError':
            throw new Error('Microphone permission denied')
          case 'NotFoundError':
            throw new Error('Microphone device not found')
          case 'NotReadableError':
            throw new Error('Microphone device is occupied or cannot be used')
          default:
            throw new Error(`Microphone access failed: ${error.message}`)
        }
      }
      throw new Error(`Get microphone failed: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async function startRecording(stream: MediaStream | undefined) {
    if (!stream)
      return
    mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data)
    }
    mediaRecorder.start()
  }

  function stopRecording(type: MediaRecorderOptions['mimeType'] = 'audio/wav'): Promise<Blob | ArrayBuffer> {
    return new Promise((resolve) => {
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type })
        audioChunks = []
        stopMicrophone()
        resolve(audioBlob)
      }

      mediaRecorder.stop()
    })
  }

  function stopMicrophone() {
    if (!mediaStream)
      return
    mediaStream.getTracks().forEach(track => track.stop())
    mediaStream = undefined
  }

  function saveAudio(audioBlob: Blob) {
    const audioUrl = URL.createObjectURL(audioBlob)
    const downloadLink = document.createElement('a')
    downloadLink.href = audioUrl
    downloadLink.download = 'recording.wav'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  function createWavBuffer(
    audioChunks: Float32Array[],
    bufferLength: number,
    sampleRate: number,
  ): ArrayBuffer {
    const buffer = new ArrayBuffer(44 + bufferLength * 2)
    const view = new DataView(buffer)

    writeString(view, 0, 'RIFF')
    view.setUint32(4, 36 + bufferLength * 2, true)
    writeString(view, 8, 'WAVE')
    writeString(view, 12, 'fmt ')
    view.setUint32(16, 16, true)
    view.setUint16(20, 1, true)
    view.setUint16(22, 1, true)
    view.setUint32(24, sampleRate, true)
    view.setUint32(28, sampleRate * 2, true)
    view.setUint16(32, 2, true)
    view.setUint16(34, 16, true)
    writeString(view, 36, 'data')
    view.setUint32(40, bufferLength * 2, true)

    let offset = 44
    for (const chunk of audioChunks) {
      for (let i = 0; i < chunk.length; i++) {
        view.setInt16(offset, chunk[i] * 32767, true)
        offset += 2
      }
    }

    return buffer
  }

  function writeString(view: DataView, offset: number, string: string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i))
    }
  }

  return {
    getMicrophonePermission,
    startRecording,
    stopRecording,
    saveAudio,
    createWavBuffer,
  }
}
