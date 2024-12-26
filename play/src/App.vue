<script lang="ts" setup>
import {
  OlButton,
  OlCard,
  OlCardContent,
  OlCardFooter,
  OlCardHeader,
} from '@onionl-ui/components'

import { onMounted, onUnmounted, ref } from 'vue'

import { useMicrophone } from './microphone'

const microphone = useMicrophone()
const timer = ref<NodeJS.Timeout | null>(null)
const duration = ref(0)
const isRecording = ref(false)

async function recordStart() {
  const mediaStream = await microphone.getMicrophonePermission()
  if (!mediaStream)
    return

  microphone.startRecording(mediaStream).then((_) => {
    isRecording.value = true
    timer.value = setInterval(() => {
      duration.value++
    }, 1000)
  })
}

async function recordStop() {
  await microphone.stopRecording()
  if (timer.value)
    clearInterval(timer.value)
  isRecording.value = false
}

function formatDuration(duration: number) {
  const minutes = Math.floor(duration / 60)
  const seconds = duration % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

onMounted(() => {
  if (timer.value)
    clearInterval(timer.value)
})

onUnmounted(() => {
  if (timer.value)
    clearInterval(timer.value)
})
</script>

<template>
  <div class="w-screen h-screen flex gap-2 justify-center items-center">
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
            {{ isRecording ? 'Recording...' : 'Start Recording' }}
          </ol-button>
          <ol-button type="secondary" @click="recordStop">
            Stop Recording
          </ol-button>
        </div>
      </ol-card-footer>
    </ol-card>
  </div>
</template>
