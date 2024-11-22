import { type Preset, presetUno } from 'unocss'
import { getSafelist } from './safelist'
import { shortcuts } from './shortcuts'
import { theme } from './theme'

export function onionlUIPreset(oprtions: { range: number } = { range: 20 }): Preset {
  const { range } = oprtions
  const safelist = getSafelist(range)

  return {
    name: '@onionl-ui/preset',
    presets: [presetUno()],
    shortcuts,
    safelist,
    theme,
  }
}

export * from './safelist'
export * from './shortcuts'
export * from './theme'
