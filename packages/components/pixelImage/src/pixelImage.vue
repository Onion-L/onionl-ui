<script lang="ts" setup>
import type { Ref } from 'vue'
import type { PixelImageProps } from './pixelImage'
import { computed, onMounted, ref, useAttrs } from 'vue'
import { defaultProps, pixelImageCreator } from './pixelImage'

defineOptions({
  name: 'OlPixelImage',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PixelImageProps>(), defaultProps)
const attrs = useAttrs()
const imgRef = ref<HTMLImageElement>()

const filterAttrs = computed(() => {
  const { src, alt } = attrs
  return { src: src as string, alt: alt as string }
})

onMounted(() => {
  if (imgRef.value) {
    pixelImageCreator(
      imgRef as Ref<HTMLImageElement>,
      props,
    )
  }
})
</script>

<template>
  <img
    ref="imgRef"
    v-bind="filterAttrs"
    :width="props.width"
    :height="props.height"
  >
</template>
