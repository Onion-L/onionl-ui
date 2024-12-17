import { addPrefix } from './util'

const elementKeys = [
  'button',
  'icon',
  'input',
  'image',
  'context-menu',
  'pixel-image',
  'scrollbar',
]

export const defaultCls: string[] = ['is-disabled', ...addPrefix(elementKeys)]
