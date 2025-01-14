export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  // Image props
  src?: string
  alt?: string

  // Outlined props
  outlined?: boolean
  outlineColor?: string
  outlineWidth?: number
  outlineStyle?: 'solid' | 'gradient'
  outlineGradient?: string // For custom gradient

  // Fallback props
  initials?: string
  icon?: string
  fallbackText?: string

  // Style props
  size?: AvatarSize
  shape?: AvatarShape
  backgroundColor?: string
  borderRadius?: number

  // Interactive props
  clickable?: boolean

  // Accessibility
  ariaLabel?: string
}

export interface AvatarEmits {
  (e: 'click', event: MouseEvent): void
  (e: 'error'): void
}
