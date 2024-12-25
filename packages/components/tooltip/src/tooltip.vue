<script lang="ts" setup>
import type { TooltipProps } from './tooltip'
import { OlPopover } from '@onionl-ui/components'
import { useNamespace } from '@onionl-ui/utils'

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
  show: false,
})

const ns = useNamespace('tooltip')
const { namespace } = ns
</script>

<template>
  <div
    :class="namespace"
  >
    <ol-popover
      :trigger="props.trigger"
      :offset="props.offset"
      :arrow="props.arrow"
      :content-class="props.contentClass"
      :placement="placement"
      :show="props.show"
    >
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
