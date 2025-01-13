<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed } from 'vue'

defineOptions({
  name: 'OlDraggableItem',
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const ns = useNamespace('draggable-item')

const draggableItemCls = computed(() => {
  return clsx(ns.namespace, props.class)
})
</script>

<template>
  <div
    draggable="true"
    :class="draggableItemCls"
  >
    <slot />
  </div>
</template>
