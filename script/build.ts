import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import glob from 'fast-glob'
import UnoCSS from 'unocss/vite'
import { build } from 'vite'
import dts from 'vite-plugin-dts'
import { buildConfig, pkgPath, rollupOptions, rootPath } from './config-info'

export function excludeFiles(files: string[]) {
  const excludes = ['node_modules', 'test', 'dist', 'preset']
  return files.filter((path) => {
    const position = path.startsWith(rootPath) ? rootPath.length : 0
    return !excludes.some(exclude => path.includes(exclude, position))
  })
}

(async function buildAll() {
  const input = excludeFiles(await glob('**/*.{js,ts,vue}', {
    cwd: pkgPath,
    absolute: true,
    onlyFiles: true,
  }))

  buildConfig.forEach(async ({ outPath, format, extend, DTS }) => {
    await build({
      build: {
        rollupOptions,
        minify: false,
        cssCodeSplit: true,
        sourcemap: true,
        outDir: resolve(rootPath, outPath),
        lib: {
          entry: input,
          formats: [format],
          fileName: () => `[name].${extend}`,
        },
      },
      plugins: [vue(), vueJsx(), UnoCSS(), DTS
        ? dts({
          include: ['packages/components/**/*.{vue,ts,tsx}'],
          exclude: ['packages/**/test/**', 'packages/**/*.test.ts'],
          outDir: `${outPath}/types`,
          staticImport: true,
          insertTypesEntry: true,
        })
        : null],
    })
  })
})()
