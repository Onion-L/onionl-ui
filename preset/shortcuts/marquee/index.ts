import type { Shortcut } from 'unocss'

export const marqueeShortcuts: Shortcut[] = [
  ['ol-marquee', 'inline-flex [gap:var(--onl-marquee-gap)] overflow-hidden'],
  ['ol-marquee__vertical', 'flex-col'],
  ['ol-marquee__inner', 'inline-flex [gap:var(--onl-marquee-gap)] group-hover:animate-play-state-paused'],
  ['ol-marquee__inner--vertical', 'flex-col'],
]
