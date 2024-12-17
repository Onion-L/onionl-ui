<script lang="ts" setup>
defineOptions({
  name: 'OlScrollSnap',
})

withDefaults(defineProps<{
  align: 'start' | 'end' | 'center' | 'none'
}>(), {
  align: 'none',
})
</script>

<template>
  <div :class="[`ol-scroll-snap__align-${align}`]">
    <slot />
  </div>
</template>
