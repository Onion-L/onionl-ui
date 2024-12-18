<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import clsx from 'clsx'

defineOptions({
  name: 'OlCardContent',
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="clsx('ol-card-content', props.class)">
    <slot />
  </div>
</template>
