import type { Shortcut } from 'unocss'

export const buttonShortcuts: Shortcut[] = [
  ['ol-button', 'inline-flex justify-center items-center rounded-button-square border-0 cursor-pointer transition-colors border-solid'],
  ['ol-button__disabled', 'is-disabled !hover:bg-primary'],
  [/^ol-button__size--(xs|sm|md|lg|xl|2xl|3xl)$/, ([, size]) => {
    const textSize = size === 'md' ? 'base' : size
    return `px-btn-x-${size} py-btn-y-${size} text-${textSize}`
  }],
  [/^ol-button__type--(primary|secondary|outline|link)$/, ([, type]) => {
    let base = `text-${type}-text bg-${type}  border-${type}-border border-1`
    switch (type) {
      case 'outline':
        return base += ` hover:color-${type}-hover`
      case 'link':
        return 'no-underline hover:underline color-primary cursor-pointer !border-0 !bg-transparent !p-0'
      default:
        return base += ` hover:bg-${type}-hover`
    }
  }],
]
