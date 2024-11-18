import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    sourcemap: true,
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'packages/components/index.ts'),
      name: 'OnionlUI',
      fileName: 'onionl-ui',
      formats: ['es', 'cjs', 'umd'],
    },
  },

  plugins: [vue(), vueJsx(), UnoCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './packages'),
      'onionl-ui': resolve(__dirname, './packages/components'),
      '@onionl-ui/utils': resolve(__dirname, './packages/utils'),
    },
  },
})
