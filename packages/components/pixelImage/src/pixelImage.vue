<script lang="ts" setup>
import type { Ref } from 'vue'
import type { PixelImageProps } from './pixelImage'
import { computed, onMounted, onUnmounted, ref, useAttrs } from 'vue'
import { defaultProps, PixelImage } from './pixelImage'

defineOptions({
  name: 'OlPixelImage',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PixelImageProps>(), defaultProps)
const attrs = useAttrs()
const imgRef = ref<HTMLImageElement>()
let pixelImageInstance: PixelImage | null = null

const filterAttrs = computed(() => {
  const { src, alt } = attrs
  return { src: src as string, alt: alt as string }
})

onMounted(() => {
  if (imgRef.value) {
    pixelImageInstance = new PixelImage(imgRef as Ref<HTMLImageElement>, props)
    pixelImageInstance.create()
  }
})

onUnmounted(() => {
  if (pixelImageInstance) {
    pixelImageInstance.destroy()
  }
})
</script>

<template>
  <div class="ol-pixel-image">
    <img
      ref="imgRef"
      v-bind="filterAttrs"
      :width="props.width"
      :height="props.height"
    >
  </div>
</template>
