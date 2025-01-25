import type { Shortcut } from 'unocss'

export const sliderShortcuts: Shortcut[] = [
  ['ol-slider', 'relative w-md h-2 bg-gray-200 dark:bg-gray-600 rounded-square'],
  ['ol-slider--vertical', 'relative w-2 h-md bg-gray-200 dark:bg-gray-600 rounded-square'],
  ['ol-slider__progress', 'absolute h-full bg-primary rounded-square'],
  ['ol-slider__progress--vertical', 'absolute w-full bg-primary rounded-square bottom-0'],
  ['ol-slider__progress--disabled', 'bg-gray-500'],
  ['ol-slider__thumb', 'hover:cursor-grab bg-white dark:bg-gray-700 ring-primary ring-2 rounded-full w-4 h-4 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2'],
  ['ol-slider__thumb--vertical', 'bg-white dark:bg-gray-700 ring-primary ring-2 rounded-full w-4 h-4 absolute top-0 -right-1/2 -translate-y-1/2 translate-x-0'],
  ['ol-slider__thumb--drag', 'cursor-grabbing'],
  ['ol-slider__thumb--disabled', '!hover:cursor-not-allowed ring-gray-400'],
]
