import type { Shortcut } from 'unocss'

export const switchShortcuts: Shortcut[] = [
  ['ol-switch', 'transition-color transition-duration-300 shadow-md cursor-pointer bg-gray-300 dark:bg-gray-600 rounded-full inline-flex items-center px-2px'],
  ['ol-switch--small', 'w-7 h-4'],
  ['ol-switch--default', 'w-9 h-5'],
  ['ol-switch--large', 'w-12 h-7'],
  ['ol-switch__checked', '!bg-primary'],
  ['ol-switch__core', 'transition-transform transition-duration-300 rounded-full bg-white dark:bg-gray-900 translate-x-0 pointer-events-none'],
  ['ol-switch__core--small', 'h-3 w-3'],
  ['ol-switch__core--default', 'h-4 w-4'],
  ['ol-switch__core--large', 'h-6 w-6'],
  ['ol-switch__core--small-checked', 'translate-x-4'],
  ['ol-switch__core--default-checked', 'translate-x-5'],
  ['ol-switch__core--large-checked', 'translate-x-6'],

]
