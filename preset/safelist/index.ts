import { getBtnSafelist } from './button'
import { contextmenuSafelist } from './contextmenu'
import { defaultCls } from './default'
import { IconSafeList } from './icon'
import { imageSafelist } from './image'
import { scrollbarSafelist } from './scrollbar'

export function getSafelist(range: number = 20) {
  return [defaultCls, IconSafeList, imageSafelist, contextmenuSafelist, scrollbarSafelist, ...getBtnSafelist(range)]
}
