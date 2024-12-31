import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'

const NavLink: DefaultTheme.NavItemWithLink[] = [
  { text: 'Get Started', link: '/guide/getting-started' },
]

const VisualInteractionItems = [
  { text: 'FlipCard 翻转卡片', link: '/components/flipCard' },
  { text: 'Halo 光晕背景', link: '/components/halo' },
  { text: 'Image 图片', link: '/components/image' },
  { text: 'PixelImage 像素图片', link: '/components/pixelImage' },
]

const ContentDisplayItems = [
  { text: 'Card 卡片', link: '/components/card' },
  { text: 'Marquee 跑马灯', link: '/components/marquee' },
  { text: 'Popover 弹出框', link: '/components/popover' },
  { text: 'Progress 进度条', link: '/components/progress' },
  { text: 'Scrollbar 滚动条', link: '/components/scrollbar' },
  { text: 'Text3D 3D文字', link: '/components/text3d' },
  { text: 'Tooltip 文字提示', link: '/components/tooltip' },
]

const FormInteractionItems = [
  { text: 'Button 按钮', link: '/components/button' },
  { text: 'Contextmenu 右键菜单', link: '/components/contextmenu' },
  { text: 'Input 输入框', link: '/components/input' },
  { text: 'Slider 滑块', link: '/components/slider' },
]

const Components = [
  {
    text: 'Basic 基础',
    collapsed: false,
    items: FormInteractionItems,
  },
  {
    text: 'Content 内容展示',
    collapsed: false,
    items: ContentDisplayItems,
  },
  {
    text: 'Visual Interaction 视觉交互',
    collapsed: false,
    items: VisualInteractionItems,
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'OnionlUI',
  description: 'A component library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo2x.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', items: NavLink },
      {
        text: 'Components',
        items: Components,
      },
    ],
    sidebar: {
      '/guide/': [{ text: '快速开始', link: '/guide/getting-started' }],
      '/components/': Components,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Onion-L/onionl-ui' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/onion-l.bsky.social' },
    ],
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
    },
  },
})
