import type { Shortcut } from 'unocss'
import { avatarShortcuts } from './avatar'
import { buttonShortcuts } from './button'
import { cardShortcuts } from './card'
import { contextMenuShortcuts } from './contextMenu'
import { dialogShortcuts } from './dialog'
import { draggableShortcuts } from './draggable'
import { flipShortcuts } from './flip'
import { generalShortcuts } from './general'
import { imageShortcuts } from './image'
import { inputShortcuts } from './input'
import { marqueeShortcuts } from './marquee'
import { pixelImageShortcuts } from './pixelImage'
import { popoverShortcuts } from './popover'
import { progressShortcuts } from './progress'
import { scrollbarShortcuts } from './scrollbar'
import { sliderShortcuts } from './slider'
import { switchShortcuts } from './switch'
import { typingShortcuts } from './typing'

const shortcuts: Shortcut[] = [
  ...inputShortcuts,
  ...buttonShortcuts,
  ...cardShortcuts,
  ...generalShortcuts,
  ...imageShortcuts,
  ...contextMenuShortcuts,
  ...dialogShortcuts,
  ...pixelImageShortcuts,
  ...scrollbarShortcuts,
  ...flipShortcuts,
  ...progressShortcuts,
  ...marqueeShortcuts,
  ...popoverShortcuts,
  ...sliderShortcuts,
  ...switchShortcuts,
  ...typingShortcuts,
  ...draggableShortcuts,
  ...avatarShortcuts,
]

export { shortcuts }
