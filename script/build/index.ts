// import { resolve } from 'node:path'
// import fs from 'fs-extra'
// import config from '../vite.config'

// const rootPath = resolve(__dirname, '..')
// const pkgPath = resolve(rootPath, 'packages')
// const componentPath = resolve(pkgPath, 'components')
// const onionlPath = resolve(pkgPath, 'onionl-ui')

// fs.readdirSync(componentPath).forEach((dir) => {
//   const customConfig = {
//     build: {
//       lib: {
//         entry: resolve(onionlPath, 'index.ts'),
//         name: 'Onionl-UI',
//         fileName: `${dir}.mjs`,
//         formats: ['es'],
//       },
//       outDir: `dist/es/${dir}`,
//     },
//   }
// })

async function buildAll() {
  // build(config)

  // await Promise.all([
  //   fs.copy('README.md', 'dist/README.md'),
  //   fs.copy('LICENSE', 'dist/LICENSE'),
  // ])
}

buildAll()
