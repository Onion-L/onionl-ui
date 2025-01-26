import type { Shortcut } from 'unocss'

export const contextMenuShortcuts: Shortcut[] = [
  ['ol-context-menu', 'fixed min-w-100px min-h-2 color-contextmenu-text bg-contextmenu border-1 border-solid border-contextmenu-border rounded-square shadow-lg z-9999'],
  ['ol-context-menu__wrapper', 'list-none p-0 m-y-2'],
  ['ol-context-menu-item', 'cursor-pointer py-2 text-left flex items-center justify-center space-x-2 hover:bg-contextmenu-hover transition-colors duration-150'],
]
