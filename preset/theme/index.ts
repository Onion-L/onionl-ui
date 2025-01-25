import type { Theme } from '@unocss/preset-mini'
import { colors } from './colors'

export const theme: Theme = {
  colors,
  borderRadius: {
    'circle': '50%',
    'button-square': '8px',
    'square': '4px',
  },
  width: {
    'avatar-3xl': '72px',
    'avatar-2xl': '64px',
    'avatar-xl': '56px',
    'avatar-lg': '48px',
    'avatar-md': '40px',
    'avatar-sm': '32px',
    'avatar-xs': '24px',
  },
  height: {
    'avatar-3xl': '72px',
    'avatar-2xl': '64px',
    'avatar-xl': '56px',
    'avatar-lg': '48px',
    'avatar-md': '40px',
    'avatar-sm': '32px',
    'avatar-xs': '24px',
  },
  fontSize: {
    'avatar-3xl': '24px',
    'avatar-2xl': '20px',
    'avatar-xl': '18px',
    'avatar-lg': '16px',
    'avatar-md': '14px',
    'avatar-sm': '12px',
    'avatar-xs': '10px',
  },
}
