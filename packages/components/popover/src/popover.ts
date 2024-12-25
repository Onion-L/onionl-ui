import type { Placement } from '@floating-ui/vue'
import type { TriggerType } from '@onionl-ui/components/type'

export interface PopoverProps {
  show?: boolean
  placement?: Placement
  offset?: number
  arrow?: boolean
  duration?: number
  contentClass?: string
  trigger?: TriggerType
}
