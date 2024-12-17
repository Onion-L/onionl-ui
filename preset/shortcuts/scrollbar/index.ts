import type { Shortcut } from 'unocss'

export const scrollbarShortcuts: Shortcut[] = [
  ['ol-scrollbar', 'overflow-auto scrollbar scrollbar-track-color-transparent scrollbar-thumb-color-gray scrollbar-thin scrollbar-rounded pr-1'],
  [/^ol-scrollbar__snap-(both|x|y)$/, ([, snap]) => `snap-${snap} snap-mandatory scroll-smooth`],
  [/^ol-scroll-snap__align-(start|end|center|none)$/, ([, align]) => `snap-${align}`],
]
