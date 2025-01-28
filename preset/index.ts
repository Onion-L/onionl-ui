import type { Theme } from '@unocss/preset-mini'
import type { Preset } from 'unocss'
import { presetIcons, presetUno } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { getCSSVariable } from './preflights/css'
import { safelist } from './safelist'
import { shortcuts } from './shortcuts'
import { theme } from './theme'

/**
 * @description onionl-ui preset
 * @returns Preset
 */
export function onionlUIPreset() {
  return {
    name: '@onionl-ui/preset',
    presets: [presetUno(), presetScrollbar({ noCompatible: false }), presetIcons({
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
