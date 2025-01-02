import type { Shortcut } from 'unocss'

export const switchShortcuts: Shortcut[] = [
  ['ol-switch', 'transition-color transition-duration-300 shadow-md cursor-pointer bg-gray-300 dark:bg-gray-600 rounded-full inline-flex items-center px-2px'],
  ['ol-switch--small', 'w-28px h-16px'],
  ['ol-switch--default', 'w-36px h-20px'],
  ['ol-switch--large', 'w-48px h-28px'],
  ['ol-switch__checked', '!bg-primary'],
  ['ol-switch__core', 'transition-transform transition-duration-300 rounded-full bg-white dark:bg-gray-900 translate-x-0px pointer-events-none'],
  ['ol-switch__core--small', 'h-12px w-12px'],
  ['ol-switch__core--default', 'h-16px w-16px'],
  ['ol-switch__core--large', 'h-24px w-24px'],
  ['ol-switch__core--small-checked', 'translate-x-14px'],
  ['ol-switch__core--default-checked', 'translate-x-18px'],
  ['ol-switch__core--large-checked', 'translate-x-22px'],
]
