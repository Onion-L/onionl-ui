import { addPrefix } from './util'

const elementKeys = [
  'button',
  'card',
  'context-menu',
  'icon',
  'input',
  'image',
  'pixel-image',
  'scrollbar',
  'flip-control',
  'progress',
  'marquee',
  'popover',
  'slider',
  'switch',
  'typing',
]

export const defaultCls: string[] = ['is-disabled', ...addPrefix(elementKeys)]
