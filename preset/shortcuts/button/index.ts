import type { Shortcut } from 'unocss'

export const buttonShortcuts: Shortcut[] = [
  ['ol-button', 'inline-flex justify-center items-center rounded-button-square border-0 cursor-pointer transition-colors border-solid'],
  ['ol-button__size-xs', 'px-2 py-1 text-xs'],
  ['ol-button__size-sm', 'px-3 py-1.5 text-sm'],
  ['ol-button__size-md', 'px-4 py-2 text-base'],
  ['ol-button__size-lg', 'px-6 py-3 text-lg'],
  ['ol-button__size-xl', 'px-6 py-3 text-xl'],
  ['ol-button__size-2xl', 'px-8 py-4 text-2xl'],
  ['ol-button__size-3xl', 'px-10 py-5 text-3xl'],
  ['ol-button__type-link', 'no-underline hover:underline color-primary cursor-pointer !border-0 !bg-transparent !p-0'],
  [/^ol-button__size-(\d+)$/, ([, size]) => `px-${size} py-${Number(size) * 0.618} text-${size}`],
  [/^ol-button__type-(primary|secondary|outline)$/, ([, type]) => {
    let base = `text-${type}-text bg-${type}  border-${type}-border border-1`
    if (type === 'outline')
      return base += ` hover:color-${type}-hover`
    else return base += ` hover:bg-${type}-hover`
  }],
  ['ol-button__disabled', 'is-disabled !hover:bg-primary'],
]
