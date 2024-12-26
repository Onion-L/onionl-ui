export type ButtonType = 'primary' | 'secondary' | 'outline'
export type ButtonSize = 'lg' | 'sm' | 'xs' | 'lg' | 'xl' | '2xl'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize | number | string
  to?: string
  link?: boolean
  icon?: string
  disabled?: boolean
}
