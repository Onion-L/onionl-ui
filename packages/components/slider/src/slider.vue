<script lang="ts" setup>
import type { SliderProps } from './slider'
import { useNamespace } from '@onionl-ui/utils'
import { computed, ref, watch } from 'vue'
import { MODEL_VALUE_UPDATE } from '../../constant'

defineOptions({
  name: 'OlSlider',
})

const {
  modelValue = 0,
  min = 0,
  max = 100,
  step = 1,
  vertical = false,
} = defineProps<SliderProps>()

const emit = defineEmits([MODEL_VALUE_UPDATE])

const ns = useNamespace('slider')
const percentage = ref(modelValue)
const isDragging = ref(false)
const isHovering = ref(false)
const newPosition = ref(0)

const slider = ref<HTMLDivElement | null>(null)

const sliderCls = computed(() => {
  return vertical ? ns.m('vertical') : ns.namespace
})

const sliderStyle = computed(() => {
  return vertical ? { height: `${percentage.value}%` } : { width: `${percentage.value}%` }
})

function handleMouseDown() {
  isHovering.value = false
  isDragging.value = true
}

function handleMouseMove(event: MouseEvent) {
  if (!slider.value)
    return

  newPosition.value = vertical ? event.clientY : event.clientX
  const sliderRect = slider.value.getBoundingClientRect()
  const { width, height, left, bottom } = sliderRect
  const sliderWidth = newPosition.value - left
  const sliderHeight = newPosition.value - bottom

  percentage.value = Math.max(
    min,
    Math.min(max, vertical
      ? -Math.round((sliderHeight / height) * 100 / step) * step
      : Math.round((sliderWidth / width) * 100 / step) * step),
  )
  emit(MODEL_VALUE_UPDATE, percentage.value)
}

function handleMouseUp() {
  isHovering.value = true
  isDragging.value = false
}

function handleMouseLeave() {
  isHovering.value = false
}

function handleMouseEnter() {
  isHovering.value = true
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
  <div ref="slider" :class="sliderCls">
    <div :style="sliderStyle" :class="vertical ? ns.em('progress', 'vertical') : ns.e('progress')">
      <div
        :class="[vertical ? ns.em('thumb', 'vertical') : ns.e('thumb'),
                 isHovering ? ns.em('thumb', 'hover') : '',
                 isDragging ? ns.em('thumb', 'drag') : '']"
        @mousedown="handleMouseDown"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      />
    </div>
  </div>
</template>

<style>

</style>
