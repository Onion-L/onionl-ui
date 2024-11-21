import { onionlUIPreset } from '@onionl-ui/preset'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    onionlUIPreset(),
  ],
})
