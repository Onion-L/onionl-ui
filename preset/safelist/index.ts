import { getBtnSafelist } from './button'
import { contextmenuSafelist } from './contextmenu'
import { defaultCls } from './default'
import { flipSafelist } from './flip'
import { IconSafeList } from './icon'
import { imageSafelist } from './image'
import { progressSafelist } from './progress'
import { scrollbarSafelist } from './scrollbar'

export function getSafelist(range: number = 20) {
  return [
    defaultCls,
    IconSafeList,
    imageSafelist,
    contextmenuSafelist,
    scrollbarSafelist,
    flipSafelist,
    progressSafelist,
    ...getBtnSafelist(range),
  ]
}
