import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'

const NavLink: DefaultTheme.NavItemWithLink[] = [
  { text: 'Get Started', link: '/guide/getting-started' },
]

// Sort components alphabetically
const BasicComponents = [
  { text: 'Avatar', link: '/components/avatar' },
  { text: 'Button', link: '/components/button' },
  { text: 'Image', link: '/components/image' },
  { text: 'Input', link: '/components/input' },
  { text: 'Slider', link: '/components/slider' },
  { text: 'Switch', link: '/components/switch' },
]

const InteractionComponents = [
  { text: 'Card', link: '/components/card' },
  { text: 'Contextmenu', link: '/components/contextmenu' },
  { text: 'Popover', link: '/components/popover' },
  { text: 'Progress', link: '/components/progress' },
  { text: 'Scrollbar', link: '/components/scrollbar' },
  { text: 'Tooltip', link: '/components/tooltip' },
]

const AdvancedComponents = [
  { text: 'DraggableList', link: '/components/draggable' },
  { text: 'FlipCard', link: '/components/flipCard' },
  { text: 'Halo', link: '/components/halo' },
  { text: 'Marquee', link: '/components/marquee' },
  { text: 'PixelImage', link: '/components/pixelImage' },
  { text: 'Text3D', link: '/components/text3d' },
  { text: 'TypingText', link: '/components/typingText' },
]

const Components = [
  {
    text: 'Basic',
    collapsed: false,
    items: BasicComponents,
  },
  {
    text: 'Interaction',
    collapsed: false,
    items: InteractionComponents,
  },
  {
    text: 'Advanced',
    collapsed: false,
    items: AdvancedComponents,
  },
]

// 中文导航
const NavLinkZh: DefaultTheme.NavItemWithLink[] = [
  { text: '快速开始', link: '/zh/guide/getting-started' },
]

// Sort components alphabetically for Chinese version
const BasicComponentsZh = [
  { text: 'Avatar', link: '/zh/components/avatar' },
  { text: 'Button', link: '/zh/components/button' },
  { text: 'Image', link: '/zh/components/image' },
  { text: 'Input', link: '/zh/components/input' },
  { text: 'Slider', link: '/zh/components/slider' },
  { text: 'Switch', link: '/zh/components/switch' },
]

const InteractionComponentsZh = [
  { text: 'Card', link: '/zh/components/card' },
  { text: 'Contextmenu', link: '/zh/components/contextmenu' },
  { text: 'Popover', link: '/zh/components/popover' },
  { text: 'Progress', link: '/zh/components/progress' },
  { text: 'Scrollbar', link: '/zh/components/scrollbar' },
  { text: 'Tooltip', link: '/zh/components/tooltip' },
]

const AdvancedComponentsZh = [
  { text: 'DraggableList', link: '/zh/components/draggable' },
  { text: 'FlipCard', link: '/zh/components/flipCard' },
  { text: 'Halo', link: '/zh/components/halo' },
  { text: 'Marquee', link: '/zh/components/marquee' },
  { text: 'PixelImage', link: '/zh/components/pixelImage' },
  { text: 'Text3D', link: '/zh/components/text3d' },
  { text: 'TypingText', link: '/zh/components/typingText' },
]

const ComponentsZh = [
  {
    text: 'Basic 基础',
    collapsed: false,
    items: BasicComponentsZh,
  },
  {
    text: 'Interaction 交互',
    collapsed: false,
    items: InteractionComponentsZh,
  },
  {
    text: 'Advanced 高级',
    collapsed: false,
    items: AdvancedComponentsZh,
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'OnionlUI',
  description: 'A component library',
  head: [
    ['meta', { name: 'author', content: 'Onion-L' }],
    ['meta', { name: 'keywords', content: 'Vue3, Component Library, UI Framework, TypeScript, OnionlUI' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'OnionlUI - Modern Vue 3 Component Library' }],
    ['meta', { property: 'og:description', content: 'A Vue 3 component library with modern design and smooth interactions' }],
    ['meta', { property: 'og:image', content: 'https://onionl-ui.netlify.app/logo2x.png' }],
    ['meta', { property: 'og:url', content: 'https://onionl-ui.netlify.app' }],
    ['link', { rel: 'alternate', hreflang: 'en', href: 'https://onionl-ui.netlify.app' }],
    ['link', { rel: 'alternate', hreflang: 'zh-CN', href: 'https://onionl-ui.netlify.app/zh/' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'A Vue 3 component library with modern design and smooth interactions',
      themeConfig: {
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
          '/guide/': [{ text: 'Getting Started', link: '/guide/getting-started' }],
          '/components/': Components,
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      description: '一个现代化设计的 Vue 3 组件库，提供流畅的交互体验',
      themeConfig: {
        logo: '/logo2x.png',
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', items: NavLinkZh },
          {
            text: '组件',
            items: ComponentsZh,
          },
        ],
        sidebar: {
          '/zh/guide/': [{ text: '快速开始', link: '/zh/guide/getting-started' }],
          '/zh/components/': ComponentsZh,
        },
      },
    },
  },

  themeConfig: {
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
