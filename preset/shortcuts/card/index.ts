import type { Shortcut } from 'unocss'

export const cardShortcuts: Shortcut[] = [
  ['ol-card', 'rounded-square border border-card-border border-solid'],
  [/^ol-card-(header|content|footer)/, ([, type]) => {
    return type === 'header' ? `p-card-${type}` : `p-card-${type} pt-card-top`
  }],
]
