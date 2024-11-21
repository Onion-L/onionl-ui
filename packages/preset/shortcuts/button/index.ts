import type { Shortcut } from 'unocss'

export const buttonShortcuts: Shortcut[] = [
  ['ol-button', 'rounded-lg border-1 border-black cursor-pointer transition-colors text-white bg-black'],
  [/^ol-button__size-(.*)$/, ([, size]) => `p-${size} text-${size}`],
  [/^ol-button__type-(.*)$/, ([, type]) => `bg-${type}`],
]
