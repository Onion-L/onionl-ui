import type { Placement } from '@floating-ui/vue'
import type { PopoverProps } from '@onionl-ui/components/popover/src/popover'
import type { TriggerType } from '@onionl-ui/components/type'

export interface TooltipProps extends PopoverProps {
  content?: string
  contentClass?: string
  placement?: Placement
  trigger?: TriggerType
  arrow?: boolean
  offset?: number
}
