import type { Shortcut } from 'unocss'

export const popoverShortcuts: Shortcut[] = [
  ['ol-popover', 'relative inline-block'],
  ['ol-popover__content', 'text-popover-text bg-popover p-y-2 p-x-4 border border-solid border-1 border-popover-border rounded-square shadow-md whitespace-nowrap'],
  ['ol-popover__content--arrow', 'absolute border border-popover-border w-2 h-2 bg-popover border border-popover-border border-solid rotate-45'],
  ['ol-popover__arrow--top', 'border-l-transparent border-t-transparent'],
  ['ol-popover__arrow--bottom', 'border-r-transparent border-b-transparent'],
  ['ol-popover__arrow--left', 'border-l-transparent border-b-transparent'],
  ['ol-popover__arrow--right', 'border-r-transparent border-t-transparent'],
]
