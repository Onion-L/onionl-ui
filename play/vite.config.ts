import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      'onionl-ui': resolve(__dirname, '../packages/components'),
      '@onionl-ui/utils': resolve(__dirname, '../packages/utils'),
    },
  },
})
