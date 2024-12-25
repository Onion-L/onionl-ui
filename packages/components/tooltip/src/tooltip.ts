import type { Placement } from '@floating-ui/vue'
import type { TriggerType } from '@onionl-ui/components/type'

export interface TooltipProps {
  content?: string
  contentClass?: string
  placement?: Placement
  trigger?: TriggerType
  arrow?: boolean
  offset?: number
}
