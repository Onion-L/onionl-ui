import type { Preset } from 'unocss'
// import type { Preset } from 'unocss/vite'
import { onionlUIPreset } from '@onionl-ui/preset'
import { presetUno } from 'unocss'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  presets: [
    presetUno(),
    onionlUIPreset({ range: 25 }) as Preset,
  ],
})
