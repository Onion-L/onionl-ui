import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'

const NavLink: DefaultTheme.NavItemWithLink[] = [
  { text: 'Get Started', link: '/guide/getting-started' },
]

const VisualInteractionItems = [
  { text: 'Avatar', link: '/components/avatar' },
  { text: 'DraggableList', link: '/components/draggable' },
  { text: 'FlipCard', link: '/components/flipCard' },
  { text: 'Halo', link: '/components/halo' },
  { text: 'Image', link: '/components/image' },
  { text: 'PixelImage', link: '/components/pixelImage' },
  { text: 'TypingText', link: '/components/typingText' },
]

const ContentDisplayItems = [
  { text: 'Card', link: '/components/card' },
  { text: 'Marquee', link: '/components/marquee' },
  { text: 'Popover', link: '/components/popover' },
  { text: 'Progress', link: '/components/progress' },
  { text: 'Scrollbar', link: '/components/scrollbar' },
  { text: 'Text3D', link: '/components/text3d' },
  { text: 'Tooltip', link: '/components/tooltip' },
]

const FormInteractionItems = [
  { text: 'Button', link: '/components/button' },
  { text: 'Contextmenu', link: '/components/contextmenu' },
  { text: 'Input', link: '/components/input' },
  { text: 'Slider', link: '/components/slider' },
  { text: 'Switch', link: '/components/switch' },

]

const Components = [
  {
    text: 'Basic',
    collapsed: false,
    items: FormInteractionItems,
  },
  {
    text: 'Content Display',
    collapsed: false,
    items: ContentDisplayItems,
  },
  {
    text: 'Visual Interaction',
    collapsed: false,
    items: VisualInteractionItems,
  },
]

// 中文导航
const NavLinkZh: DefaultTheme.NavItemWithLink[] = [
  { text: '快速开始', link: '/zh/guide/getting-started' },
]

const VisualInteractionItemsZh = [
  { text: 'Avatar 头像', link: '/zh/components/avatar' },
  { text: 'DraggableList 可拖拽列表', link: '/zh/components/draggable' },
  { text: 'FlipCard 翻转卡片', link: '/zh/components/flipCard' },
  { text: 'Halo 光晕背景', link: '/zh/components/halo' },
  { text: 'Image 图片', link: '/zh/components/image' },
  { text: 'PixelImage 像素图片', link: '/zh/components/pixelImage' },
  { text: 'TypingText 打字机效果文本', link: '/zh/components/typingText' },
]

const ContentDisplayItemsZh = [
  { text: 'Card 卡片', link: '/zh/components/card' },
  { text: 'Marquee 跑马灯', link: '/zh/components/marquee' },
  { text: 'Popover 弹出框', link: '/zh/components/popover' },
  { text: 'Progress 进度条', link: '/zh/components/progress' },
  { text: 'Scrollbar 滚动条', link: '/zh/components/scrollbar' },
  { text: 'Text3D 3D文字', link: '/zh/components/text3d' },
  { text: 'Tooltip 文字提示', link: '/zh/components/tooltip' },
]

const FormInteractionItemsZh = [
  { text: 'Button 按钮', link: '/zh/components/button' },
  { text: 'Contextmenu 右键菜单', link: '/zh/components/contextmenu' },
  { text: 'Input 输入框', link: '/zh/components/input' },
  { text: 'Slider 滑块', link: '/zh/components/slider' },
  { text: 'Switch 开关', link: '/zh/components/switch' },
]

const ComponentsZh = [
  {
    text: 'Basic 基础',
    collapsed: false,
    items: FormInteractionItemsZh,
  },
  {
    text: 'Content 内容展示',
    collapsed: false,
    items: ContentDisplayItemsZh,
  },
  {
    text: 'Visual Interaction 视觉交互',
    collapsed: false,
    items: VisualInteractionItemsZh,
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
