export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
export interface ImageProps {
  src?: string
  alt?: string
  fit?: ImageFit
  className?: string
  loading?: 'eager' | 'lazy'
  width?: string
  height?: string
}
