import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

const NavLink: DefaultTheme.NavItemWithLink[] = [
  { text: 'Get Started', link: '/guide/getting-started' },
]

const ComponentItems = [
  { text: 'Button 按钮', link: '/components/button' },
  { text: 'Input 输入框', link: '/components/input' },
  { text: 'Image 图片', link: '/components/image' },
  { text: 'Contextmenu 右键菜单', link: '/components/contextmenu' },
  { text: 'PixelImage 像素图片', link: '/components/pixelImage' },
  { text: 'Scrollbar 滚动条', link: '/components/scrollbar' },
]

const Components: DefaultTheme.SidebarItem[] = [{
  text: '基础',
  collapsed: false,
  items: ComponentItems,
}]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Onionl UI',
  description: 'A component library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', items: NavLink },
      { text: 'Components', items: ComponentItems },
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
