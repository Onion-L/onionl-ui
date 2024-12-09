import { getBtnSafelist } from './button'
import { defaultCls } from './default'
import { IconSafeList } from './icon'
import { imageSafelist } from './image'

export function getSafelist(range: number = 20) {
  return [defaultCls, IconSafeList, imageSafelist, ...getBtnSafelist(range)]
}
