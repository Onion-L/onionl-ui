/// <reference types="vite/client" />
import theme from 'vitepress/theme'
import './custom.css'
import 'uno.css'

const modules = [
  'OlButton',
  'OlIcon',
  'OlImage',
  'OlInput',
  'OlCard',
  'OlCardHeader',
  'OlCardContent',
  'OlCardFooter',
  'OlContextMenu',
  'OlContextMenuItem',
  'OlPixelImage',
  'OlScrollbar',
  'OlScrollSnap',
  'OlHalo',
  'OlFlipCard',
  'OlFlipControl',
  'OlProgress',
  'OlMarquee',
  'OlPopover',
  'OlTooltip',
  'OlSlider',
  'OlText3D',
  'OlSwitch',
  'OlAvatar',
  'OlTypingText',
  'OlDraggableList',
  'OlDraggableItem',
]

export default { ...theme, async enhanceApp({ app }) {
  if (!import.meta.env.SSR) {
    const components = await import('@onionl-ui/components')
    modules.forEach((module) => {
      app.use(components[module])
    })
  }
} }
