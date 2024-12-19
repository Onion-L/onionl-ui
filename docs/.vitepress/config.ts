import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

const NavLink: DefaultTheme.NavItemWithLink[] = [
  { text: 'Get Started', link: '/guide/getting-started' },
]

const BasicComponentItems = [
  { text: 'Button 按钮', link: '/components/button' },
  { text: 'Card 卡片', link: '/components/card' },
  { text: 'Contextmenu 右键菜单', link: '/components/contextmenu' },
  { text: 'Image 图片', link: '/components/image' },
  { text: 'Input 输入框', link: '/components/input' },
  { text: 'Scrollbar 滚动条', link: '/components/scrollbar' },
]

const DataComponentItems = [
  { text: 'Progress 进度条', link: '/components/progress' },
]

const OtherComponentItems = [
  { text: 'FlipCard 翻转卡片', link: '/components/flipCard' },
  { text: 'Halo 光晕背景', link: '/components/halo' },
  { text: 'PixelImage 像素图片', link: '/components/pixelImage' },
]

const Components = [
  {
    text: 'Basic 基础',
    collapsed: false,
    items: BasicComponentItems,
  },
  {
    text: 'Data 数据',
    collapsed: false,
    items: DataComponentItems,
  },
  {
    text: 'Other 其他',
    collapsed: false,
    items: OtherComponentItems,
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
})
