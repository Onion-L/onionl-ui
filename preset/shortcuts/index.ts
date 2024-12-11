import type { Shortcut } from 'unocss'
import { buttonShortcuts } from './button'
import { contextMenuShortcuts } from './contextMenu'
import { generalShortcuts } from './general'
import { imageShortcuts } from './image'
import { inputShortcuts } from './input'

const shortcuts: Shortcut[] = [
  ...inputShortcuts,
  ...buttonShortcuts,
  ...generalShortcuts,
  ...imageShortcuts,
  ...contextMenuShortcuts,
]

export { shortcuts }
