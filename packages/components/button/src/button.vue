<script lang="ts" setup>
import type { ButtonProps } from './button'
import { OlIcon } from '@onionl-ui/components/icon'
import clsx from 'clsx'
import { computed } from 'vue'

defineOptions({
  name: 'OlButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'sm',
})

const defaultBtn = clsx('ol-button')

const customeStyles = computed(() => {
  const sizeCls = props.size ? `ol-button__size-${props.size}` : ''
  if (props.to || props.link) {
    const linkCls = 'ol-button__type-link'
    return clsx(sizeCls, linkCls)
  }
  const typeCls = props.type ? `ol-button__type-${props.type}` : ''
  return clsx(defaultBtn, sizeCls, typeCls)
})
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    :class="[customeStyles]"
  >
    <ol-icon v-if="icon" :class="icon" />
    <span>
      <slot />
    </span>
  </component>
</template>
