<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed } from 'vue'

defineOptions({
  name: 'OlSwapItem',
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const ns = useNamespace('swap-item')

const swapItemCls = computed(() => {
  return clsx(ns.namespace, props.class)
})
</script>

<template>
  <div
    draggable="true"
    :class="swapItemCls"
  >
    <slot />
  </div>
</template>
