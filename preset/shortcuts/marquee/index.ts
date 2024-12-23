import type { Shortcut } from 'unocss'

export const marqueeShortcuts: Shortcut[] = [
  ['ol-marquee', 'group flex [gap:var(--onl-marquee-gap)] overflow-hidden'],
  ['ol-marquee__inner', 'group-hover:animate-play-state-paused flex [gap:var(--onl-marquee-gap)]'],
]
