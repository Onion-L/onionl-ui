<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import clsx from 'clsx'
import { computed } from 'vue'

defineOptions({
  name: 'OlProgress',
})

const props = withDefaults(defineProps<{
  value: number
  reverse?: boolean
  class?: HTMLAttributes['class']
  label?: boolean
}>(), {
  value: 0,
  reverse: false,
  label: false,
})

const translateX = computed(() => `translateX(${props.reverse ? props.value : -props.value}%)`)
</script>

<template>
  <div class="ol-progress">
    <div :class="clsx('ol-progress__inner', props.class)">
      <div :style="{ transform: translateX }" class="ol-progress-bar" />
    </div>
    <span v-show="label" class="ol-progress-label">
      <slot name="label">{{ value }}%</slot>
    </span>
  </div>
</template>
