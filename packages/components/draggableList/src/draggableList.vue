<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { useNamespace } from '@onionl-ui/utils'
import { useEventListener } from '@vueuse/core'
import clsx from 'clsx'
import { computed, ref } from 'vue'

defineOptions({
  name: 'OlDraggableList',
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const ns = useNamespace('draggable')

const draggableListCls = computed(() => {
  return clsx(ns.b('list'), props.class)
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

function cleanUpTransition(element: HTMLElement) {
  useEventListener(element, 'transitionend', () => {
    element.style.transition = ''
    element.style.transform = ''
  }, { once: true })
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

  const firstTragetEl = targetEl.getBoundingClientRect()

  if (sourceIndex > targetIndex) {
    DragListEl.value.insertBefore(DraggingEl.value, targetEl)
  }
  else {
    DragListEl.value.insertBefore(DraggingEl.value, targetEl.nextSibling)
  }

  const lastTragetEl = targetEl.getBoundingClientRect()
  targetEl.style.transform = `translateY(${firstTragetEl.top - lastTragetEl.top}px)`
  requestAnimationFrame(() => {
    targetEl.style.transition = 'transform 300ms'
    cleanUpTransition(targetEl)
    targetEl.style.transform = ''
  })
}
</script>

<template>
  <div
    ref="DragListEl"
    :class="draggableListCls"
    @dragenter.prevent="handleDragEnter"
    @dragend="handleDragEnd"
    @dragstart="handleDragStart"
    @dragover.prevent
  >
    <slot />
  </div>
</template>
