import type { Rule } from 'unocss'

const buttonTypes = {
  primary: {
    'background-color': '#000',
    'border-color': '#000',
    'color': '#fff',
  },
  outline: {
    'background-color': 'transparent',
    'border-color': '#000',
    'color': '#000',
  },
  secondary: {
    'background-color': 'transparent',
    'border-color': 'transparent',
    'color': '#000',
  },
}

export const buttonRules: Rule[] = [
  [/^type-(.*)$/, ([, type]) => {
    if (type in buttonTypes) {
      return buttonTypes[type as keyof typeof buttonTypes]
    }
    return {}
  }],
]
