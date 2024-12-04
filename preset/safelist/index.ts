import { getBtnSafelist } from './button'
import { IconSafeList } from './icon'

export function getSafelist(range: number = 20) {
  return [IconSafeList, ...getBtnSafelist(range)]
}
