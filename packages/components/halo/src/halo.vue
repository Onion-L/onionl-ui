<script lang="ts" setup>
import type { HaloProps } from './halo'
import { computed, onMounted, ref } from 'vue'
import { clone } from '../util'

defineOptions({
  name: 'OlHalo',
})

const props = withDefaults(defineProps<Partial<HaloProps>>(), {
  is: 'div',
  haloRadius: 6,
  duration: 5000,
  offsetX: 0,
  offsetY: 0,
})

const glowRef = ref<HTMLDivElement | null>(null)

const keyframes = computed<Keyframe[]>(() => {
  const haloColor = clone(props.haloColor)
  const reversedHaloColor = Array.isArray(haloColor)
    ? haloColor.reverse()
    : haloColor

  const duplicatedColors = [props.haloColor, reversedHaloColor].flat()
  return duplicatedColors.map((color, index) => {
    return { filter: `drop-shadow(${props.offsetX} ${props.offsetY} ${index % 2 === 0 ? props.haloRadius : Number(props.haloRadius) + 1}em ${color})` }
  })
})

onMounted(() => {
  if (!glowRef.value || !keyframes.value.length)
    return

  glowRef.value?.animate(keyframes.value, {
    duration: props.duration,
    iterations: Infinity,
  })
})
</script>

<template>
  <component :is="is" ref="glowRef">
    <slot />
  </component>
</template>
