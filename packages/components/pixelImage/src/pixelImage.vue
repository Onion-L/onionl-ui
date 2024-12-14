<script lang="ts" setup>
import type { Ref } from 'vue'
import { computed, onMounted, ref, useAttrs } from 'vue'
import { pixelImageCreator } from './pixelImage'

defineOptions({
  name: 'OlPixelImage',
  inheritAttrs: false,
})

const attrs = useAttrs()

const filterAttrs = computed(() => {
  const { src } = attrs
  return { src: src as string }
})

const imgRef = ref<HTMLImageElement>()

onMounted(() => {
  if (imgRef.value) {
    pixelImageCreator(imgRef as Ref<HTMLImageElement>)
  }
})
</script>

<template>
  <img ref="imgRef" v-bind="filterAttrs" class="pixel-image" width="300" height="auto">
</template>
