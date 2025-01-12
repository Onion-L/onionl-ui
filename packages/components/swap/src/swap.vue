<script lang="ts" setup>
import { ref } from 'vue'

const dragRef = ref<HTMLElement | null>(null)
const draggingElement = ref<HTMLElement | null>(null)

function handleDragStart(e: DragEvent) {
  draggingElement.value = e.target as HTMLElement
  setTimeout(() => {
    draggingElement.value!.classList.add('dragging')
  }, 0)
}

function handleDragEnd(e: DragEvent) {
  ;(e.target as HTMLElement).classList.remove('dragging')
}

function handleDragEnter(e: DragEvent) {
  const children = Array.from(dragRef.value!.children)
  const sourceIndex = children.indexOf(draggingElement.value!)
  const targetElement = e.target as HTMLElement
  const targetIndex = children.indexOf(targetElement)
  if (targetElement === dragRef.value || draggingElement.value === targetElement)
    return

  if (sourceIndex > targetIndex) {
    dragRef.value!.insertBefore(draggingElement.value!, targetElement)
  }
  else {
    dragRef.value!.insertBefore(draggingElement.value!, targetElement.nextElementSibling)
  }
}
</script>

<template>
  <div
    ref="dragRef"
    class="flex flex-col gap-1"
    @dragenter.prevent="handleDragEnter"
    @dragend="handleDragEnd"
    @dragstart="handleDragStart"
    @dragover.prevent
  >
    <slot />
  </div>
</template>

<style scoped>
.dragging {
  opacity: 0.3;
}
</style>
