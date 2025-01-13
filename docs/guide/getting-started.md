# Introduction

Onionl UI is a modern component library built with Vue 3 and TypeScript. It provides a series of high-quality reusable components to help developers quickly build elegant user interfaces.

⚠️ This project is still in early development.

🌱 This is my first open source project. As a beginner, I hope to learn and grow through this project. Any feedback and contributions are welcome!

## Features

- 🚀 Based on Vue 3 Composition API
- 💪 Written in TypeScript with complete type definitions
- 📦 Support on-demand importing to optimize bundle size
- 🎨 Preset themes with customizable style variables
- 📱 Responsive design with mobile adaptation
- 📚 Comprehensive documentation and examples
- ⚡️ Ultimate development experience

## Installation

Install OnionlUI and its dependencies using your preferred package manager:

::: code-group
```bash [npm]
npm install onionl-ui @onionl-ui/preset
```

```bash [yarn]
yarn add onionl-ui @onionl-ui/preset
```

```bash [pnpm]
pnpm add onionl-ui @onionl-ui/preset
```
:::

## Icons

Onionl UI uses [Mono Icons](https://icones.js.org/collection/mi) as the default icon set. To use icons, you need to install the Mono Icons package:

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

## Usage

### UnoCSS Preset

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

### Full Import

```ts
import OnionlUI from 'onionl-ui'
import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'

const app = createApp(App)
app.use(OnionlUI)
app.mount('#app')
```

### On-demand Import

```ts
import { OlButton } from 'onionl-ui'
```
