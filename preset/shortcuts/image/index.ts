import type { Shortcut } from 'unocss'

export const imageShortcuts: Shortcut[] = [
  [/^ol-image__fit-(fill|contain|cover|none|scale-down)$/, ([, fit]) => `object-${fit}`],
]
