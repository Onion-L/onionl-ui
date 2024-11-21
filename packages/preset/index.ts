import type { Preset } from 'unocss'
import { rules } from './rules'
import { getSafelist } from './safelist'
import { shortcuts } from './shortcuts'
import { theme } from './theme'

export function onionlUIPreset(oprtions: { range: number } = { range: 20 }): Preset {
  const { range } = oprtions
  const safelist = getSafelist(range)

  return {
    name: '@onionl-ui/preset',
    shortcuts,
    safelist,
    rules,
    theme,
  }
}

export * from './rules'
export * from './safelist'
export * from './shortcuts'
export * from './theme'
