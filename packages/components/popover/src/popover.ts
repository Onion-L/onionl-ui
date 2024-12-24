import type { Placement } from '@floating-ui/vue'

export interface PopoverProps {
  show?: boolean
  placement?: Placement
  offset?: number
  arrow?: boolean
  duration?: number
}
