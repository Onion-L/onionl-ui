import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const rootPath = resolve(__dirname, '..')
export const pkgPath = resolve(rootPath, 'packages')
export const componentPath = resolve(pkgPath, 'components')
export const onionlPath = resolve(pkgPath, 'onionl-ui')

export function excludeFiles(files: string[]) {
  const excludes = ['node_modules', 'test', 'dist']
  return files.filter((path) => {
    const position = path.startsWith(rootPath) ? rootPath.length : 0
    return !excludes.some(exclude => path.includes(exclude, position))
  })
}
