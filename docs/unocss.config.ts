import type { Preset } from 'unocss'
import { onionlUIPreset } from '@onionl-ui/preset'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  presets: [
    onionlUIPreset() as Preset,

  ],
})
