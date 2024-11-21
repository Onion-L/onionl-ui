<script lang="ts" setup>
import type { ButtonProps } from './button'
import clsx from 'clsx'
import { computed } from 'vue'

defineOptions({
  name: 'OlButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'sm',
})

const customeStyles = computed(() => {
  const sizeCls = props.size ? `ol-button__size-${props.size}` : ''
  const typeCls = props.type ? `ol-button__type-${props.type}` : ''
  return clsx(sizeCls, typeCls)
})
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    :to="to"
    class="ol-button"
    :class="[`${customeStyles}`]"
  >
    <slot />
  </component>
</template>
