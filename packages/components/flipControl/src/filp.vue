<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import clsx from 'clsx'

defineOptions({
  name: 'OlFlipControl',
})

const props = withDefaults(defineProps<{
  flipped: boolean
  class?: HTMLAttributes['class']
}>(), {
  flipped: false,
})
</script>

<template>
  <div :class="clsx('ol-filp-control', props.class)">
    <div
      :class="{ 'is-flipped': flipped }"
      class="ol-flip-control__inner"
    >
      <div class="ol-flip-control-front">
        <slot name="front" />
      </div>
      <div class="ol-flip-control-back">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>
