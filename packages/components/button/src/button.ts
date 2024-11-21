export type ButtonType = 'primary' | 'secondary' | 'outline'
export const ButtonSize = ['lg', 'sm', 'xs', 'lg', 'xl', '2xl']

export interface ButtonProps {
  type?: ButtonType
  size: string | number
  to?: string
}
