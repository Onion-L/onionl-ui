<script lang="ts" setup>
import type { ButtonProps } from './button'
import { OlIcon } from '@onionl-ui/components/icon'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed } from 'vue'

defineOptions({
  name: 'OlButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'sm',
})

const emit = defineEmits(['click'])

const ns = useNamespace('button')

const defaultBtn = clsx(ns.namespace)

const customeStyles = computed(() => {
  const sizeCls = props.size ? ns.em('size', `${props.size}`) : ''
  if (props.to || props.link) {
    const linkCls = ns.em('type', 'link')
    return clsx(sizeCls, linkCls)
  }
  const typeCls = props.type ? ns.em('type', `${props.type}`) : ''
  return clsx(defaultBtn, sizeCls, typeCls)
})

function handleClick(e: MouseEvent) {
  if (props.disabled)
    return
  emit('click', e)
}
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    :class="[customeStyles, { [ns.e('disabled')]: disabled }]"
    @click="handleClick"
  >
    <ol-icon v-if="icon" :class="icon" />
    <span>
      <slot />
    </span>
  </component>
</template>
