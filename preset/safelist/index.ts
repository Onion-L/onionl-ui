import { avatarSafelist } from './avatar'
import { btnSafelist } from './button'
import { contextmenuSafelist } from './contextmenu'
import { dialogSafelist } from './dialog'
import { draggableSafelist } from './draggable'
import { flipSafelist } from './flip'
import { globalSafelist } from './global'
import { iconSafelist } from './icon'
import { imageSafelist } from './image'
import { inputSafelist } from './input'
import { marqueeSafelist } from './marquee'
import { pixelImageSafelist } from './pixelImage'
import { popoverSafelist } from './popover'
import { progressSafelist } from './progress'
import { scrollbarSafelist } from './scrollbar'
import { sliderSafelist } from './slider'
import { switchSafelist } from './switch'
import { typingSaftlist } from './typing'

export const safelist: string[] = [
  ...inputSafelist,
  ...globalSafelist,
  ...iconSafelist,
  ...imageSafelist,
  ...contextmenuSafelist,
  ...scrollbarSafelist,
  ...flipSafelist,
  ...progressSafelist,
  ...marqueeSafelist,
  ...popoverSafelist,
  ...sliderSafelist,
  ...switchSafelist,
  ...typingSaftlist,
  ...draggableSafelist,
  ...pixelImageSafelist,
  ...avatarSafelist,
  ...dialogSafelist,
  ...btnSafelist,
]
