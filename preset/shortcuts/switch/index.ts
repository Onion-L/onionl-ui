import type { Shortcut } from 'unocss'

export const switchShortcuts: Shortcut[] = [
  ['ol-switch', 'transition-color transition-duration-300 shadow-md cursor-pointer w-9 h-5 bg-gray-300 dark:bg-gray-600 rounded-full inline-flex items-center px-2px'],
  ['ol-switch__checked', '!bg-primary'],
  ['ol-switch__core', 'transition-transform transition-duration-300 h-4 w-4 rounded-full bg-white dark:bg-gray-900 translate-x-0 pointer-events-none'],
]
