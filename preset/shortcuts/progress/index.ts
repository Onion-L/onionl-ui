import type { Shortcut } from 'unocss'

export const progressShortcuts: Shortcut[] = [
  ['ol-progress', 'inline-flex justify-center items-center gap-2'],
  ['ol-progress__inner', 'bg-gray-5 rounded-square overflow-hidden'],
  ['ol-progress-bar', 'h-full w-100% bg-primary rounded-square transition-all duration-300 ease-linear'],
  ['ol-progress-label', 'dark:text-white'],
]
