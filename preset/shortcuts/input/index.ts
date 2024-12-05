import type { Shortcut } from 'unocss'

export const inputShortcuts: Shortcut[] = [
  ['ol-input', 'w-60 h-4 px-2 py-3 border-2 text-base rounded-lg border-solid border-gray-400 bg-transparent transition-all duration-200 ease-in-out focus:outline-none focus:ring-1 focus:border-primary placeholder-gray-400 shadow-sm hover:shadow-md'],
  ['ol-input__error', 'border-red-500 focus:ring-red-400'],
  ['ol-input__icon', 'absolute top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200 cursor-pointer'],
  ['ol-input__icon-prefix', 'ol-input__icon left-3'],
  ['ol-input__icon-suffix', 'ol-input__icon right-3'],
  ['ol-input__icon-focus', 'text-primary'],
]
