# 快速开始

## 安装

使用包管理器安装 OnionlUI

```bash
# NPM
npm install onionl-ui

# Yarn
yarn add onionl-ui

# PNPM
pnpm add onionl-ui
```

## 使用

### 完整引入

```ts
import OnionlUI from 'onionl-ui'
import { createApp } from 'vue'
import App from './App.vue'
import 'onionl-ui/dist/style.css'

const app = createApp(App)
app.use(OnionlUI)
app.mount('#app')
```

### 按需引入

```ts
import { Button, Card } from 'onionl-ui'
import { createApp } from 'vue'
import App from './App.vue'
import 'onionl-ui/dist/style.css'

const app = createApp(App)
app.use(Button)
app.use(Card)
app.mount('#app')
```

现在你可以开始使用 OnionlUI 了！请查看每个组件的文档了解更多使用细节。
