import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import vue from '@vitejs/plugin-vue'

// rollup.config.mjs
export default {
  input: ['packages/onionl-ui/index.ts', 'packages/onionl-ui/installer.ts', 'packages/onionl-ui/components.ts'],
  plugins: [vue(), nodeResolve({
    extensions: ['.mjs', '.js', '.json', '.ts'],
  }), typescript()],
  output: {
    dir: 'dist/lib',
    file: '[name].cjs',
    format: 'cjs',
  },
}
