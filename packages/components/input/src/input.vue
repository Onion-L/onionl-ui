<script setup lang="ts">
import type { InputProps } from './input'
import { OlIcon } from '@onionl-ui/components/icon'
import { computed, ref, useAttrs } from 'vue'

defineOptions({
  name: 'OlInput',
  inheritAttrs: false,
})

defineProps<InputProps>()

const attrs = useAttrs()

const filteredAttrs = computed(() => {
  const { style, ...rest } = attrs
  return rest
})

const isFocused = ref(false)
</script>

<template>
  <div class="relative inline-block">
    <template v-if="prefix">
      <ol-icon
        :icon="prefix"
        class="ol-input__icon-prefix" :class="{ 'ol-input__icon-focus': isFocused }"
      />
    </template>
    <template v-else-if="suffix">
      <ol-icon
        :icon="suffix"
        class="ol-input__icon-suffix" :class="{ 'ol-input__icon-focus': isFocused }"
      />
    </template>
    <input
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="filteredAttrs"
      class="ol-input"
      :class="{ ' pl-10': prefix }"
      @blur="isFocused = false" @focus="isFocused = true"
    >
  </div>
</template>
