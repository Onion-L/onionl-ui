import type { Shortcut } from 'unocss'

export const dialogShortcuts: Shortcut[] = [
  ['ol-dialog__mask', 'fixed inset-0 w-full h-full bg-black/30'],
  ['ol-dialog__container', 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-screen max-w-screen opacity-100 transition-all duration-300 flex flex-col items-center justify-center rounded-square overflow-hidden origin-top-left'],
  ['ol-dialog__header', 'flex justify-between w-full px-3 py-1.5 bg-white gap-3 -m-px'],
  ['ol-dialog__footer', 'flex justify-end w-full px-3 py-1.5 bg-white gap-3 -m-px [&:empty]:hidden'],
  ['ol-dialog__header--close', 'cursor-pointer text-[20px] text-[#909399] hover:text-[#303133]'],
]
