<script setup lang="ts">
import type { InputProps } from './input'
import { OlIcon } from '@onionl-ui/components/icon'
import IMask from 'imask'
import { computed, onMounted, ref, useAttrs } from 'vue'

defineOptions({
  name: 'OlInput',
  inheritAttrs: false,
})

const props = defineProps<InputProps>()

const InputRef = ref<HTMLInputElement>()

onMounted(() => {
  if (props.mask) {
    const maskOptions = {
      mask: props.mask,
    }
    if (InputRef.value) {
      IMask(InputRef.value!, maskOptions)
    }
  }
})

const attrs = useAttrs()

const filteredAttrs = computed(() => {
  const { style, mask, ...rest } = attrs
  return rest
})

function handleFocus(e: Event) {
  if (props.disabled && e.target instanceof HTMLInputElement)
    e.target.blur()
}
</script>

<template>
  <div class="relative inline-block">
    <div>
      <template v-if="prefix">
        <ol-icon
          :icon="prefix"
          class="ol-input__icon-prefix"
        />
      </template>
      <template v-else-if="suffix">
        <ol-icon
          :icon="suffix"
          class="ol-input__icon-suffix"
        />
      </template>
      <input
        ref="InputRef"
        :value="modelValue"
        :placeholder="placeholder"
        v-bind="filteredAttrs"
        class="ol-input"
        :class="{ ' pl-10': prefix, 'is-disabled': disabled }"
        @focus="handleFocus"
      >
    </div>
  </div>
</template>
