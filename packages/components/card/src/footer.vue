<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import clsx from 'clsx'

defineOptions({
  name: 'OlCardFooter',
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="clsx('ol-card-footer', props.class)">
    <slot />
  </div>
</template>

<style>

</style>
