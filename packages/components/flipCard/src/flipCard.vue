<script lang="ts" setup>
import type { Component, HTMLAttributes } from 'vue'
import { OlFlipControl } from '@onionl-ui/components'

defineOptions({
  name: 'OlFlipCard',
})

const props = defineProps<{
  flipped: boolean
  class?: HTMLAttributes['class']
  front?: Component
  back?: Component
}>()
</script>

<template>
  <ol-flip-control :flipped="flipped" :class="props.class">
    <template v-for="side in ['front', 'back']" :key="side" #[side]>
      <component :is="props[side as keyof typeof props]" />
    </template>
  </ol-flip-control>
</template>

<style>

</style>
