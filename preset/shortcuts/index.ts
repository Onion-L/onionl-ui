import type { Shortcut } from 'unocss'
import { buttonShortcuts } from './button'
import { contextMenuShortcuts } from './contextMenu'
import { generalShortcuts } from './general'
import { imageShortcuts } from './image'
import { inputShortcuts } from './input'
import { pixelImageShortcuts } from './pixelImage'

const shortcuts: Shortcut[] = [
  ...inputShortcuts,
  ...buttonShortcuts,
  ...generalShortcuts,
  ...imageShortcuts,
  ...contextMenuShortcuts,
  ...pixelImageShortcuts,
]

export { shortcuts }
