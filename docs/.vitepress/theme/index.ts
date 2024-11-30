import OnionlUI from 'onionl-ui'
// // 如果你使用默认主题
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'uno.css'

export default { extends: DefaultTheme, enhanceApp({ app }) {
  app.use(OnionlUI)
} }
