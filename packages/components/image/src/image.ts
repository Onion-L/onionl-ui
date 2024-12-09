export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
export interface ImageProps {
  src?: string
  alt?: string
  fit?: ImageFit

}
