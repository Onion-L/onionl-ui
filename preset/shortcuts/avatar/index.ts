import type { Shortcut } from 'unocss'

export const avatarShortcuts: Shortcut[] = [
  ['ol-avatar', 'inline-flex items-center justify-center overflow-hidden transition-all duration-200 ease aspect-square'],
  ['ol-avatar--clickable', 'hover:scale-105 hover:shadow-sm transition-transform duration-200'],
  [/^ol-avatar--(circle|square)$/, ([, shape]) => `rounded-${shape}`],
  [/^ol-avatar--(xs|sm|md|lg|xl|2xl|3xl)$/, ([, size]) => `w-avatar-${size} h-avatar-${size} text-avatar-${size}`],
]
