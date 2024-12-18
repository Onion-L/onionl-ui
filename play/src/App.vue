<script setup lang="ts">
import { OlFlipCard } from 'onionl-ui'
import { ref } from 'vue'
import Back from './back.vue'
import Front from './front.vue'

const isFlipped = ref(false)

function handleClick() {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <ol-flip-card
    class="w-70 h-70"
    :flipped="isFlipped"
    :front="Front"
    :back="Back"
    @click="handleClick"
  />
</template>

<style scoped>

</style>
