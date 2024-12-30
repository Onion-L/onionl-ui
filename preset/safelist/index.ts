import { getBtnSafelist } from './button'
import { contextmenuSafelist } from './contextmenu'
import { defaultCls } from './default'
import { flipSafelist } from './flip'
import { IconSafeList } from './icon'
import { imageSafelist } from './image'
import { marqueeSafelist } from './marquee'
import { popoverSafelist } from './popover'
import { progressSafelist } from './progress'
import { scrollbarSafelist } from './scrollbar'
import { sliderSafelist } from './slider'

export function getSafelist(range: number = 20) {
  return [
    defaultCls,
    IconSafeList,
    imageSafelist,
    contextmenuSafelist,
    scrollbarSafelist,
    flipSafelist,
    progressSafelist,
    marqueeSafelist,
    popoverSafelist,
    sliderSafelist,
    ...getBtnSafelist(range),
  ]
}
