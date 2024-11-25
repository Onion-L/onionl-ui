import { getBtnSafelist } from './button'

export function getSafelist(range: number = 20) {
  return [...getBtnSafelist(range)]
}
