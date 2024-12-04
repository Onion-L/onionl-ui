import type { Shortcut } from 'unocss'
import { buttonShortcuts } from './button'
import { inputShortcuts } from './input'

const shortcuts: Shortcut[] = [
  ...inputShortcuts,
  ...buttonShortcuts,
]

export { shortcuts }
