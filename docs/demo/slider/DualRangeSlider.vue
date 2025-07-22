<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'

interface Props {
  modelValue?: [number, number]
  min?: number
  max?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [20, 80],
  min: 0,
  max: 100,
})

const emit = defineEmits<{
  'update:modelValue': [value: [number, number]]
}>()

const range = ref<[number, number]>([...props.modelValue])

function updateMin() {
  if (range.value[0] > range.value[1]) {
    range.value[0] = range.value[1]
  }
  emit('update:modelValue', [...range.value])
}

function updateMax() {
  if (range.value[1] < range.value[0]) {
    range.value[1] = range.value[0]
  }
  emit('update:modelValue', [...range.value])
}
</script>

<template>
  <div class="dual-range-slider">
    <div class="text-lg font-bold m-4">
      {{ range[0] }} - {{ range[1] }}
    </div>

    <div class="m-4 relative">
      <div class="slider-container">
        <!-- Track -->
        <div class="slider-track" />

        <!-- Active range -->
        <div
          class="slider-range"
          :style="{
            left: `${(range[0] / max) * 100}%`,
            width: `${((range[1] - range[0]) / max) * 100}%`,
          }"
        />

        <!-- Min thumb -->
        <input
          v-model.number="range[0]"
          type="range"
          :min="min"
          :max="max"
          class="slider-thumb slider-thumb-min"
          @input="updateMin"
        >

        <!-- Max thumb -->
        <input
          v-model.number="range[1]"
          type="range"
          :min="min"
          :max="max"
          class="slider-thumb slider-thumb-max"
          @input="updateMax"
        >
      </div>
    </div>

    <!-- Optional: Input fields for precise control -->
    <div class="m-4 flex gap-4 items-center">
      <div class="flex items-center gap-2">
        <label class="text-sm font-medium">Min:</label>
        <input
          v-model.number="range[0]"
          type="number"
          :min="min"
          :max="range[1]"
          class="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
      </div>
      <div class="flex items-center gap-2">
        <label class="text-sm font-medium">Max:</label>
        <input
          v-model.number="range[1]"
          type="number"
          :min="range[0]"
          :max="max"
          class="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  @apply relative h-5 w-full;
}

.slider-track {
  @apply absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 rounded-sm;
}

.slider-range {
  @apply absolute top-1/2 -translate-y-1/2 h-1 bg-blue-500 rounded-sm z-10;
}

.slider-thumb {
  @apply absolute top-0 w-full h-5 bg-transparent pointer-events-none appearance-none outline-none;
}

.slider-thumb::-webkit-slider-thumb {
  @apply appearance-none w-5 h-5 bg-blue-500 border-2 border-white rounded-full cursor-pointer shadow-md;
  pointer-events: all;
}

.slider-thumb::-moz-range-thumb {
  @apply w-5 h-5 bg-blue-500 border-2 border-white rounded-full cursor-pointer shadow-md border-none;
  pointer-events: all;
}

.slider-thumb-min {
  @apply z-20;
}

.slider-thumb-max {
  @apply z-30;
}
</style>
