<script lang="ts" setup>
import {
  OlButton,
  OlCard,
  OlCardContent,
  OlCardFooter,
  OlCardHeader,
  OlIcon,
} from '@onionl-ui/components'
import { onMounted, onUnmounted, ref } from 'vue'
import { useMicrophone } from './microphone'

defineOptions({
  name: 'OlAudioRecorder',
})

const microphone = useMicrophone()
const timer = ref<NodeJS.Timeout | null>(null)
const duration = ref(0)
const isRecording = ref(false)
const audioBlob = ref<Blob | ArrayBuffer | null>(null)
const audioUrl = ref<string | undefined>(undefined)
const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

async function recordStart() {
  if (isRecording.value)
    return

  const mediaStream = await microphone.getMicrophonePermission()
  microphone.startRecording(mediaStream).then((_) => {
    if (audioBlob.value || duration.value !== 0 || audioUrl.value !== undefined) {
      audioBlob.value = null
      audioUrl.value = undefined
      duration.value = 0
    }

    isRecording.value = true
    timer.value = setInterval(() => {
      duration.value++
    }, 1000)
  })
}

async function recordStop() {
  audioBlob.value = await microphone.stopRecording()
  if (timer.value)
    clearInterval(timer.value)

  audioUrl.value = URL.createObjectURL(audioBlob.value as Blob)
  isRecording.value = false
}

function formatDuration(duration: number) {
  const minutes = Math.floor(duration / 60)
  const seconds = duration % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function playAudio() {
  if (!audioBlob.value && !audioUrl.value)
    return

  if (isPlaying.value) {
    audioRef.value?.pause()
    isPlaying.value = false
  }
  else {
    audioRef.value?.play()
    isPlaying.value = true
  }
}

onMounted(() => {
  if (timer.value)
    clearInterval(timer.value)
})

onUnmounted(() => {
  if (timer.value)
    clearInterval(timer.value)
})

defineExpose({
  recordStart,
  recordStop,
})
</script>

<template>
  <slot>
    <ol-card class="w-md">
      <ol-card-header>
        <div class="text-2xl font-bold mb-4 text-center">
          Audio Recorder
        </div>
      </ol-card-header>
      <ol-card-content>
        <div class="text-xl text-center">
          {{ formatDuration(duration) }}
        </div>
      </ol-card-content>

      <ol-card-footer>
        <div class="flex gap-2 justify-center items-center">
          <ol-button :disabled="isRecording" @click="recordStart">
            <ol-icon :icon="isRecording ? 'i-mi-stop' : ''" />
            {{ isRecording ? 'Recording...' : 'Start Recording' }}
          </ol-button>
          <template v-if="audioBlob">
            <ol-button type="secondary" @click="playAudio">
              <ol-icon :icon="isPlaying ? 'i-mi-pause' : 'i-mi-play'" />
              {{ isPlaying ? 'Pause' : 'Play' }}
            </ol-button>
            <audio ref="audioRef" :src="audioUrl" @ended="isPlaying = false" />
          </template>
          <ol-button v-else type="secondary" @click="recordStop">
            Stop Recording
          </ol-button>
        </div>
      </ol-card-footer>
    </ol-card>
  </slot>
</template>
