<script setup lang="ts">
import type { InputProps } from './input'
import { MODEL_VALUE_UPDATE } from '@onionl-ui/components/constant'
import { OlIcon } from '@onionl-ui/components/icon'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import IMask from 'imask'
import { computed, onMounted, ref, useAttrs } from 'vue'

defineOptions({
  name: 'OlInput',
  inheritAttrs: false,
})

const props = defineProps<InputProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
}>()

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
const ns = useNamespace('input')

const filteredAttrs = computed(() => {
  const { style, mask, ...rest } = attrs
  return rest
})

function handleFocus(e: FocusEvent) {
  if (props.disabled && e.target instanceof HTMLInputElement) {
    e.target.blur()
    return
  }

  emit('focus', e)
}

function handleBlur(e: FocusEvent) {
  emit('blur', e)
}

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit(MODEL_VALUE_UPDATE, target.value)
}
</script>

<template>
  <div :class="ns.e('wrap')">
    <template v-if="prefix">
      <ol-icon
        :icon="prefix"
        :class="clsx(ns.e('icon'), ns.e('icon-prefix'))"
      />
    </template>
    <template v-else-if="suffix">
      <ol-icon
        :icon="suffix"
        :class="clsx(ns.e('icon'), ns.e('icon-suffix'))"
      />
    </template>
    <input
      ref="InputRef"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="filteredAttrs"
      :class="[{ ' pl-10': prefix, 'pr-10': suffix, 'is-disabled': disabled }, ns.namespace]"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    >
  </div>
</template>
