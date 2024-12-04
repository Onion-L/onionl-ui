// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['dist', 'node_modules', '*.log', '.gitignore'],
  rules: {
    'vue/no-useless-v-bind': 'off',
    'vue/component-name-in-template-casing': 'off',
  },
})
