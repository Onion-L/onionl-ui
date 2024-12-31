<script setup lang="ts">
import type { Text3DProps } from './text3d'
import { useNamespace } from '@onionl-ui/utils'
import { computed } from 'vue'

defineOptions({
  name: 'OlText3D',
})

const props = withDefaults(defineProps<Text3DProps>(), {
  layer: 5,
})

const ns = useNamespace('text-3d')

const textShadow = computed(() => {
  const layerCount = Math.abs(props.layer!)
  const shadows = []

  for (let i = 1; i <= layerCount; i++) {
    const blur = props.blur ? `${i}px` : ''

    const offsetX = props.direction?.includes('left') ? `${-i}px` : `${i}px`
    const offsetY = props.direction?.includes('top') ? `${-i}px` : `${i}px`

    shadows.push(`${offsetX} ${offsetY} ${blur} var(--onl-text-shadow-color)`)
  }

  return shadows.join(',')
})
</script>

<template>
  <div :class="ns.namespace" :style="{ textShadow }">
    {{ text }}
  </div>
</template>

<style scoped>
.ol-text-3d {
  --onl-text-shadow-color: v-bind('shadowColor || "var(--onl-purple-900)"');
  --onl-text-color: v-bind('color || "var(--onl-primary)"');
}

.ol-text-3d {
  font-weight: bold;
  color: var(--onl-text-color);
  letter-spacing: v-bind('letterSpacing || 0');
}
</style>
