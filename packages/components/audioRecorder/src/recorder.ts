export interface AudioSource {
  blob: Blob
  url: string
}

export interface AudioRecorderProps {
  audioType?: MediaRecorderOptions['mimeType']
}
