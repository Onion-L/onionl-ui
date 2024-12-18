import type { Shortcut } from 'unocss'

export const flipShortcuts: Shortcut[] = [
  ['ol-filp-control', 'relative [perspective:1000px]'],
  ['ol-flip-control__inner', 'relative w-full h-full [transform-style:preserve-3d] transition-transform-600'],
  ['ol-flip-control-front', 'absolute w-full h-full [backface-visibility:hidden]'],
  ['ol-flip-control-back', 'absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]'],
  ['is-flipped', 'rotate-y-180'],
]
