import OnionlUI from 'onionl-ui'
import 'uno.css'
// // 如果你使用默认主题
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default { extends: DefaultTheme, enhanceApp({ app }) {
  app.use(OnionlUI)
} }
