<script lang="ts" setup>
import type { TooltipProps } from './tooltip'
import { OlPopover } from '@onionl-ui/components'
import { useNamespace } from '@onionl-ui/utils'
import { ref } from 'vue'
import { handleTrigger } from './util'

defineOptions({
  name: 'OlTooltip',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TooltipProps>(), {
  content: '',
  contentClass: '',
  placement: 'top',
  trigger: 'hover',
  arrow: true,
  offset: 5,
})

const ns = useNamespace('tooltip')
const { namespace } = ns
const show = ref(false)

const handleClick = handleTrigger(props.trigger, 'click', () => {
  show.value = !show.value
})
const onMouseEnter = handleTrigger(props.trigger, 'hover', () => {
  show.value = true
})
const onMouseLeave = handleTrigger(props.trigger, 'hover', () => {
  show.value = false
})
</script>

<template>
  <div :class="namespace" @click="handleClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <ol-popover :offset="props.offset" :arrow="props.arrow" :content-class="props.contentClass" :placement="placement" :show="show">
      <template #trigger>
        <slot />
      </template>
      <div
        :class="ns.e('content')"
        @click.stop
      >
        <span>{{ content }}</span>
      </div>
    </ol-popover>
  </div>
</template>
