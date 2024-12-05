import type { Shortcut } from 'unocss'
import { buttonShortcuts } from './button'
import { generalShortcuts } from './general'
import { inputShortcuts } from './input'

const shortcuts: Shortcut[] = [
  ...inputShortcuts,
  ...buttonShortcuts,
  ...generalShortcuts,
]

export { shortcuts }
