import type { Shortcut } from 'unocss'
import { buttonShortcuts } from './button'
import { inputShortcuts } from './input'

const shortcutModules = [
  inputShortcuts,
  buttonShortcuts,
] as const

const shortcuts: Shortcut[] = shortcutModules.flat()

export { shortcuts }
