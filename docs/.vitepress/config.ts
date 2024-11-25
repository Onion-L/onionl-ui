import type { DefaultTheme } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

const NavLink: DefaultTheme.NavItemWithLink[] = [
  { text: 'Getting Started', link: '/guide/getting-started' },
]

const ComponentItems = [{ text: 'Button', link: '/components/button' }]

const Components: DefaultTheme.SidebarItem[] = [{
  text: 'Basic',
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/onion-l.bsky.social' },
    ],
  },
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },

})
