<script lang="ts" setup>
import { ref, watch } from 'vue'
import { MODEL_VALUE_UPDATE } from '../../constant'

defineOptions({
  name: 'OlSlider',
})

const { modelValue, min, max } = withDefaults(defineProps<{
  modelValue?: number
  min?: number
  max?: number
}>(), {
  modelValue: 0,
  min: 0,
  max: 100,
})

const emit = defineEmits([MODEL_VALUE_UPDATE])

const percentage = ref(modelValue)
const isDragging = ref(false)
const mouseX = ref(0)
const slider = ref<HTMLDivElement | null>(null)

function handleMouseDown() {
  isDragging.value = true
}

function handleMouseMove(event: MouseEvent) {
  if (!slider.value)
    return

  mouseX.value = event.clientX
  const sliderRect = slider.value.getBoundingClientRect()
  const { width } = sliderRect
  const sliderWidth = mouseX.value - sliderRect.left
  percentage.value = Math.max(min, Math.min(max, Math.round((sliderWidth / width) * 100)))
  emit(MODEL_VALUE_UPDATE, percentage.value)
}

function handleMouseUp() {
  isDragging.value = false
}

watch(isDragging, (dragging) => {
  if (dragging) {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }
  else {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }
}, { immediate: true })
</script>

<template>
  <div ref="slider" class="relative w-md h-2 bg-gray-200 rounded-md">
    <div :style="{ width: `${percentage}%` }" class="absolute h-full bg-primary rounded-md">
      <div class="bg-white dark:bg-gray-700 ring-primary ring-2 rounded-full w-4 h-4 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2" @mousedown="handleMouseDown" />
    </div>
  </div>
</template>

<style>

</style>
