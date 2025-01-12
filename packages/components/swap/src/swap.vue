<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed, ref } from 'vue'

defineOptions({
  name: 'OlSwap',
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const ns = useNamespace('swap')

const swapCls = computed(() => {
  return clsx(ns.namespace, props.class)
})

const DragListEl = ref<HTMLElement | null>(null)
const DraggingEl = ref<HTMLElement | null>(null)

function handleDragStart(e: DragEvent) {
  DraggingEl.value = e.target as HTMLElement

  setTimeout(() => {
    if (!DraggingEl.value)
      return
    DraggingEl.value.classList.add('dragging')
  }, 0)
}

function handleDragEnd(e: DragEvent) {
  ;(e.target as HTMLElement).classList.remove('dragging')
}

function handleDragEnter(e: DragEvent) {
  const targetEl = e.target as HTMLElement

  if (!DragListEl.value || !DraggingEl.value || targetEl === DragListEl.value || DraggingEl.value === targetEl)
    return

  const children = Array.from(DragListEl.value.children)
  const sourceIndex = children.indexOf(DraggingEl.value)
  const targetIndex = children.indexOf(targetEl)
  if (targetIndex === -1)
    return

  const referenceNode = sourceIndex > targetIndex
    ? targetEl
    : targetEl.nextElementSibling

  DragListEl.value.insertBefore(DraggingEl.value, referenceNode)
}
</script>

<template>
  <div
    ref="DragListEl"
    :class="swapCls"
    @dragenter.prevent="handleDragEnter"
    @dragend="handleDragEnd"
    @dragstart="handleDragStart"
    @dragover.prevent
  >
    <slot />
  </div>
</template>
