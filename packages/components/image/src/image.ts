import type { HTMLAttributes } from 'vue'

export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
export interface ImageProps {
  src?: string
  alt?: string
  fit?: ImageFit
  class?: HTMLAttributes['class']
  loading?: 'eager' | 'lazy'
  width?: string
  height?: string
}
