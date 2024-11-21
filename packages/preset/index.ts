import type { Preset } from 'unocss'
import { shortcuts } from './shortcuts'

interface ConfigProps {
  sizeList: string[]
  numberRange: number
  utilities: string[]
}

const defaultConfig = {
  sizeList: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  numberRange: 20,
  utilities: ['p', 'text'],
}
// const color = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'gray']

// function presetDemo({ color, size, text }) {

// }

function generateNumberRange(prefix: string, length: number): string[] {
  return Array.from({ length }, (_, i) => `${prefix}-${i + 1}`)
}

function generateSizeVariants(prefix: string, sizes: string[]): string[] {
  return sizes.map(size => `${prefix}-${size}`)
}

export function onionlUIPreset(config: ConfigProps = defaultConfig): Preset {
  const safelist = config.utilities.map((utility) => {
    return [...generateNumberRange(utility, config.numberRange), ...generateSizeVariants(utility, config.sizeList), ...'bg-transparent border-2 border-black-600 text-black hover:bg-black-50 focus:ring-black-500'.split(' ')]
  }).flat()
  return {
    name: '@onionlui/preset',
    shortcuts,
    safelist,
  }
}

export * from './shortcuts'
