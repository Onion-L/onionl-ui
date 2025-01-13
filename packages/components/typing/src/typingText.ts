import type { HTMLAttributes } from 'vue'

export interface TypingTextProps {
  text: string
  duration?: number
  class?: HTMLAttributes['class']
}
