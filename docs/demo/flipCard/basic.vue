<script setup>
import { ref } from 'vue'
import Back from './flipCard/back.vue'
import Front from './flipCard/front.vue'

const isFlipped = ref(false)
function handleClick() {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div class="flex justify-center">
    <ol-flip-card
      class="w-70 h-70"
      :flipped="isFlipped"
      :front="Front"
      :back="Back"
      @click="handleClick"
    />
  </div>
</template>
