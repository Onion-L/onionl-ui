# 介绍

 Onionl UI 是一个基于 Vue 3 和 TypeScript 开发的现代化组件库。它提供了一系列高质量的可复用组件,帮助开发者快速构建优雅的用户界面。

⚠️ 该项目仍处于早期开发阶段。

🌱 这是我的第一个开源项目。作为初学者，我希望通过这个项目学习和成长，欢迎任何的反馈和贡献！

## 核心特性

- 🚀 基于 Vue 3 Composition API
- 💪 使用 TypeScript 开发,提供完整的类型定义
- 📦 支持按需引入,优化打包体积
- 🎨 预设主题,可自定义样式变量
- 📱 响应式设计,支持移动端适配
- 📚 详尽的文档和示例
- ⚡️ 极致的开发体验

## 安装

::: code-group

```bash [npm]
npm install onionl-ui @onionl-ui/preset unocss
```

```bash [yarn]
yarn add onionl-ui @onionl-ui/preset unocss
```

```bash [pnpm]
pnpm add onionl-ui @onionl-ui/preset unocss
```

:::

## 图标

Onionl UI 使用 [Mono Icons](https://icones.js.org/collection/mi) 作为默认图标集。要使用图标功能，需要安装 Mono Icons 图标集:

::: code-group

```bash [npm]
npm install -D @iconify-json/mi
```

```bash [yarn]
yarn add -D @iconify-json/mi
```

```bash [pnpm]
pnpm add -D @iconify-json/mi
```
:::

## 用法

### 全局引入

```ts
import OnionlUI from 'onionl-ui'
import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'

const app = createApp(App)
app.use(OnionlUI)
app.mount('#app')
```
```ts
// unocss.config.ts
import { onionlUIPreset } from '@onionl-ui/preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    onionlUIPreset(),
  ],
})
```

### 按需引入

```ts
import { OlButton } from 'onionl-ui'
```
