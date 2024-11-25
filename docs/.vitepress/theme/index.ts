import { OlButton } from 'onionl-ui'

import 'uno.css'
import './custom.css'
import './var.css'

// // 如果你使用默认主题
import DefaultTheme from 'vitepress/theme'

export default { extends: DefaultTheme, enhanceApp({ app }) {
  app.component('OlButton', OlButton)
} }
