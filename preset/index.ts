import type { Theme } from '@unocss/preset-mini'
import type { Preset } from 'unocss'
import { presetIcons, presetUno } from 'unocss'
import { getCSSVariable } from './preflights/css'
import { getSafelist } from './safelist'
import { shortcuts } from './shortcuts'
import { theme } from './theme'

/**
 * @description onionl-ui preset
 * @param oprtions - The configuration options
 * @param oprtions.range - The numeric range value for generating safelist
 * @returns Preset
 */
export function onionlUIPreset(oprtions?: { range: number }) {
  const range = oprtions?.range
  const safelist = getSafelist(range)

  return {
    name: '@onionl-ui/preset',
    presets: [presetUno(), presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    })],
    shortcuts,
    safelist,
    theme,
    preflights: [
      { getCSS: () =>
        getCSSVariable(),
      },
    ],
  } as Preset<Theme>
}

export * from './safelist'
export * from './shortcuts'
export * from './theme'
