import { onionlUIPreset } from '@onionl-ui/preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    onionlUIPreset(),
  ],
  shortcuts: [
    ['ol-context-menu__wrapper', 'list-none p-0 m-y-2'],
  ],
})
