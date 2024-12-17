<script lang="ts" setup>
defineOptions({
  name: 'OlScrollbar',
})

defineProps<{
  height?: string
  snap?: 'both' | 'x' | 'y'
}>()
</script>

<template>
  <div class="ol-scrollbar" :class="[`ol-scrollbar__snap-${snap}`]" :style="{ height }">
    <slot />
  </div>
</template>
