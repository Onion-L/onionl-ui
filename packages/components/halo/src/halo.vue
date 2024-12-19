<script lang="ts" setup>
import type { HaloProps } from './halo'
import { clone, isNumberString } from '@onionl-ui/utils'
import { computed, onMounted, ref } from 'vue'

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
    const offsetX = isNumberString(props.offsetX) ? `${props.offsetX}px` : props.offsetX
    const offsetY = isNumberString(props.offsetY) ? `${props.offsetY}px` : props.offsetY
    if (index === duplicatedColors.length - 1)
      return { filter: `drop-shadow(${offsetX} ${offsetY} ${props.haloRadius}em ${color})` }

    return { filter: `drop-shadow(${offsetX} ${offsetY} ${index % 2 === 0 ? props.haloRadius : Number(props.haloRadius) + 1}em ${color})` }
  })
})

onMounted(() => {
  if (!glowRef.value || !keyframes.value.length || !props.haloColor)
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
