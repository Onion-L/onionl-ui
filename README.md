# 🚀 Onionl-UI

A modern lightweight component library based on Vue 3.
<div align="center">
  <img src="./public/logo.svg" alt="onionl-ui logo" style="width: 240px;" />

[![NPM version](https://img.shields.io/npm/v/onionl-ui.svg)](https://npmjs.org/package/onionl-ui)
[![Coverage](https://img.shields.io/codecov/c/github/Onion-L/onionl-ui)](https://codecov.io/gh/Onion-L/onionl-ui)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

English | [中文](./README-zh.md)

</div>

⚠️ This project is still in its early stages of development.

🌱 This is my first open source project. As a beginner in open source, I'm learning and growing with this project. Any feedback and contributions are warmly welcomed!

## 📝 To-Do List

Check the [TODO](./TODO.md) file to view the development plan of Onionl-UI. Suggestions, ideas or code contributions are welcome!

## ✨ Features

- 🎯 Built with Vue 3 + TypeScript, providing complete type definitions
- 🎨 Supports theme customization with configurable design tokens
- 📦 Supports on-demand importing to reduce bundle size
- 🔧 Rich collection of components and Hooks
- 📚 Comprehensive documentation and examples

## 🚀 Installation

Using npm:

```bash
# Install all required dependencies
npm install onionl-ui @onionl-ui/preset
```

Using yarn:

```bash
# Install all required dependencies
yarn add onionl-ui @onionl-ui/preset
```

Using pnpm:

```bash
# Install all required dependencies
pnpm add onionl-ui @onionl-ui/preset
```

## 🔨 Quick Start

```ts
import OnionlUI from 'onionl-ui'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(OnionlUI)
app.mount('#app')
```

## 📦 Components

Basic usage:

```html
<template>
  <ol-button type="primary">
    Primary Button
  </ol-button>
  <ol-button type="secondary">
    Secondary Button
  </ol-button>
  <ol-button size="lg">
    Large Button
  </ol-button>
</template>
```

For more component usage, please check the [Component Documentation](https://onionl-ui.vercel.app/).

## 📄 License

[MIT](./LICENSE) License © 2024 XL
