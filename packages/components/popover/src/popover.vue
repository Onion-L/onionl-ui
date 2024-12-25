<script lang="ts" setup>
import type { Placement } from '@floating-ui/vue'
import type { PopoverProps } from './popover'
import { arrow, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'
import { useNamespace } from '@onionl-ui/utils'
import { onClickOutside } from '@vueuse/core'
import clsx from 'clsx'
import { computed, ref } from 'vue'
import { handleTrigger } from './util'

defineOptions({
  name: 'OlPopover',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PopoverProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  offset: 5,
  arrow: true,
  duration: 300,
  contentClass: '',
})

const ns = useNamespace('popover')
const { namespace } = ns

const popover = ref<HTMLElement | null>(null)
const reference = ref<HTMLElement | null>(null)
const floating = ref<HTMLElement | null>(null)
const floatingArrow = ref<HTMLElement | null>(null)
const showContent = ref<boolean | undefined>(props.show)

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

onClickOutside(popover, () => {
  if (props.trigger === 'click') {
    showContent.value = false
  }
})

const handleClick = handleTrigger(props.trigger, 'click', () => {
  showContent.value = !showContent.value
})
const onMouseEnter = handleTrigger(props.trigger, 'hover', () => {
  showContent.value = true
})
const onMouseLeave = handleTrigger(props.trigger, 'hover', () => {
  showContent.value = false
})
</script>

<template>
  <div
    ref="popover"
    :class="namespace"
  >
    <div
      ref="reference"
      @click="handleClick"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <slot name="trigger" />
    </div>
    <transition name="fade">
      <div
        v-if="props.show || showContent"
        ref="floating"
        :style="floatingStyles"
        :class="clsx(ns.e('content'), props.contentClass)"
        @click.stop
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
