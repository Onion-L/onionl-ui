<script lang="ts" setup>
import type { Placement } from '@floating-ui/vue'
import type { PopoverProps } from './popover'
import { arrow, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed, ref } from 'vue'

defineOptions({
  name: 'OlPopover',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PopoverProps>(), {
  show: false,
  placement: 'bottom',
  trigger: 'click',
  offset: 5,
  arrow: true,
  duration: 300,
  contentClass: '',
})

const ns = useNamespace('popover')
const { namespace } = ns

const reference = ref<HTMLElement | null>(null)
const floating = ref<HTMLElement | null>(null)
const floatingArrow = ref<HTMLElement | null>(null)

const { floatingStyles, middlewareData, placement } = useFloating(reference, floating, {
  placement: props.placement,
  middleware: [
    offset(props.offset),
    shift(),
    flip(),
    arrow({ element: props.arrow ? floatingArrow : null }),
  ],
  whileElementsMounted: autoUpdate,
})

const duration = computed(() => `${props.duration}ms`)
const arrowPlacement = computed(() => placement.value.split('-')[0])

const arrowStyles = computed(() => {
  if (!middlewareData.value.arrow)
    return {}

  const { x, y } = middlewareData.value.arrow
  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  } as Record<Placement, Placement>

  return {
    left: x != null ? `${x}px` : '',
    top: y != null ? `${y}px` : '',
    [staticSide[arrowPlacement.value as Placement]]: '-0.25em',
  }
})
</script>

<template>
  <div :class="namespace">
    <div ref="reference">
      <slot name="trigger" />
    </div>
    <transition name="fade">
      <div
        v-if="show"
        ref="floating"
        :style="floatingStyles"
        :class="clsx(ns.e('content'), props.contentClass)"
      >
        <slot />
        <div
          v-if="props.arrow"
          ref="floatingArrow"
          :style="arrowStyles"
          :class="clsx(
            ns.em('content', 'arrow'),
            ns.em('arrow', arrowPlacement),
          )"
        />
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity v-bind(duration) ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
