import type { Shortcut } from 'unocss'

export const avatarShortcuts: Shortcut[] = [
  ['ol-avatar', 'inline-flex items-center justify-center overflow-hidden transition-all duration-200 ease aspect-square'],
  ['ol-avatar--circle', 'rounded-1/2'],
  ['ol-avatar--square', 'rounded-md'],
  ['ol-avatar--clickable', 'hover:scale-105 hover:shadow-sm transition-transform duration-200'],
  // Avatar sizes
  ['ol-avatar--xs', 'w-6 h-6 text-xs'],
  ['ol-avatar--sm', 'w-8 h-8 text-sm'],
  ['ol-avatar--md', 'w-10 h-10 text-base'],
  ['ol-avatar--lg', 'w-12 h-12 text-lg'],
  ['ol-avatar--xl', 'w-14 h-14 text-xl'],
  ['ol-avatar--2xl', 'w-16 h-16 text-2xl'],
  ['ol-avatar--3xl', 'w-18 h-18 text-3xl'],
]
