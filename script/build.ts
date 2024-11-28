import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import glob from 'fast-glob'
import fs from 'fs-extra'
import UnoCSS from 'unocss/vite'
import { build } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const rootPath = resolve(__dirname, '..')
const pkgPath = resolve(rootPath, 'packages')
const componentPath = resolve(pkgPath, 'components')
const onionlPath = resolve(pkgPath, 'onionl-ui')

export function excludeFiles(files: string[]) {
  const excludes = ['node_modules', 'test', 'dist']
  return files.filter((path) => {
    const position = path.startsWith(rootPath) ? rootPath.length : 0
    return !excludes.some(exclude => path.includes(exclude, position))
  })
}

async function buildAll() {
  const files = excludeFiles(await glob('**/*.{js,ts,vue}', {
    cwd: componentPath,
    absolute: true,
    onlyFiles: true,
  }))

  await Promise.all([await build({
    build: {
      rollupOptions: {
        external: ['vue', 'clsx'],
        output: {
          globals: {
            vue: 'Vue',
            clsx: 'clsx',
          },
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: pkgPath,
        },
      },
      minify: false,
      cssCodeSplit: true,
      sourcemap: true,
      outDir: 'dist/',
      lib: {
        entry: files,
        formats: ['es'],
        fileName: () => `[name].mjs`,
      },
    },
    plugins: [vue(), vueJsx(), UnoCSS()],
    resolve: {
      alias: {
        '@': pkgPath,
        '@onionl-ui/components': componentPath,
        '@onionl-ui/utils': resolve(pkgPath, 'utils'),
      },
    },
  })])

  await Promise.all([
    fs.copy('README.md', resolve(rootPath, 'dist/README.md')),
    fs.copy('LICENSE', resolve(rootPath, 'dist/LICENSE')),
    fs.copy(resolve(onionlPath, 'package.json'), resolve(rootPath, 'dist/package.json')),
  ])
}

buildAll()
