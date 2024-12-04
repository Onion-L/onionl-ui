import { OlButton, OlInput } from '@onionl-ui/components'
// // 如果你使用默认主题
import theme from 'vitepress/theme'
import './custom.css'
import 'uno.css'

export default { ...theme, enhanceApp({ app }) {
  app.use(OlButton)
  app.use(OlInput)
} }
