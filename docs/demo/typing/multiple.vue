<script setup>
import { ref } from 'vue'

const messages = [
  'To infinity and beyond!',
  'The future is now.',
  'Vue + OL = 🔥',
  'Typing never looked this cool.',
]

const currentMessage = ref(messages[0])
let index = 0

function cycleMessages() {
  index = (index + 1) % messages.length
  currentMessage.value = messages[index]
}

setInterval(cycleMessages, 4000) // switch every 4s
</script>

<template>
  <div class="text-2xl font-bold text-center">
    <ol-typing-text :text="currentMessage" :duration="2" />
  </div>
</template>
