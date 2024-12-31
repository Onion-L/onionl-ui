export interface Text3DProps {
  text: string
  color?: string
  shadowColor?: string
  layer?: number
  letterSpacing?: string
  direction?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  blur?: boolean
}
