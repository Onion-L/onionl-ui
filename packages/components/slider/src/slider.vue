<script lang="ts" setup>
import { useNamespace } from '@onionl-ui/utils'
import { ref, watch } from 'vue'
import { MODEL_VALUE_UPDATE } from '../../constant'

defineOptions({
  name: 'OlSlider',
})

const { modelValue, min, max, step } = withDefaults(defineProps<{
  modelValue?: number
  min?: number
  max?: number
  step?: number
}>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
})

const emit = defineEmits([MODEL_VALUE_UPDATE])

const ns = useNamespace('slider')
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
  percentage.value = Math.max(min, Math.min(max, Math.round((sliderWidth / width) * 100 / step) * step))
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
  <div ref="slider" :class="ns.namespace">
    <div :style="{ width: `${percentage}%` }" :class="ns.e('progress')">
      <div :class="ns.e('thumb')" @mousedown="handleMouseDown" />
    </div>
  </div>
</template>

<style>

</style>
