import type { Shortcut } from 'unocss'

export const imageShortcuts: Shortcut[] = [
  ['ol-image', 'relative'],
  [/^ol-image__fit-(fill|contain|cover|none|scale-down)$/, ([, fit]) => `object-${fit}`],
  ['ol-image__error', 'bg-gray-300 is-center'],
  ['ol-image__load', 'absolute bg-gray-300 is-center'],
]
