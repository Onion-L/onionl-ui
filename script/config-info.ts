import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const rootPath = resolve(__dirname, '..')
export const pkgPath = resolve(rootPath, 'packages')
export const componentPath = resolve(pkgPath, 'components')
export const onionlPath = resolve(pkgPath, 'onionl-ui')

export const rollupOptions = {
  external: ['vue', 'clsx', '@floating-ui/vue', 'vue-demi', 'imask', '@vueuse/core'],
  output: {
    globals: {
      vue: 'Vue',
      clsx: 'clsx',
    },
    exports: 'named' as const,
    preserveModules: true,
    preserveModulesRoot: pkgPath,
  },
  treeshake: false,
}

export const onionlAlias = {
  '@': pkgPath,
  '@onionl-ui/components': componentPath,
  '@onionl-ui/utils': resolve(pkgPath, 'utils'),
  'onionl-ui': pkgPath,
}

export const buildConfig = [{
  outPath: 'dist/lib',
  format: 'cjs' as const,
  extend: 'cjs',
}, {
  outPath: 'dist/es',
  format: 'es' as const,
  extend: 'mjs',
}]
