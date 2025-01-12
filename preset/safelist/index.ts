import { getBtnSafelist } from './button'
import { contextmenuSafelist } from './contextmenu'
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
import { swapSafelist } from './swap'
import { switchSafelist } from './switch'
import { typingSaftlist } from './typing'

export function getSafelist(range: number = 20) {
  return [
    inputSafelist,
    globalSafelist,
    iconSafelist,
    imageSafelist,
    contextmenuSafelist,
    scrollbarSafelist,
    flipSafelist,
    progressSafelist,
    marqueeSafelist,
    popoverSafelist,
    sliderSafelist,
    switchSafelist,
    typingSaftlist,
    swapSafelist,
    pixelImageSafelist,
    ...getBtnSafelist(range),
  ]
}
