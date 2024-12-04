import { getBtnSafelist } from './button'
import { defaultCls } from './default'
import { IconSafeList } from './icon'

export function getSafelist(range: number = 20) {
  return [defaultCls, IconSafeList, ...getBtnSafelist(range)]
}
