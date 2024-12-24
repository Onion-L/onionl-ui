<script lang="ts" setup>
import type { TooltipProps } from './tooltip'
import { OlPopover } from '@onionl-ui/components'
import { ref } from 'vue'
import { handleTrigger } from './util'

defineOptions({
  name: 'OlTooltip',
})

const props = withDefaults(defineProps<TooltipProps>(), {
  content: '',
  placement: 'top',
  trigger: 'hover',
})

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
  <div @click="handleClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <ol-popover :placement="placement" :show="show">
      <template #trigger>
        <slot />
      </template>
      {{ content }}
    </ol-popover>
  </div>
</template>
