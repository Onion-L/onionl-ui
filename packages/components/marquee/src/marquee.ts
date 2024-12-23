import type { HTMLAttributes } from 'vue'

export interface MarqueeProps {
  class?: HTMLAttributes['class']
  duration?: number
  reverse?: boolean
  gap?: string
  height?: string
  vertical?: boolean
}
