# Getting Started

## Installation

Install OnionlUI using your preferred package manager

```bash
# NPM
npm install onionl-ui

# Yarn
yarn add onionl-ui

# PNPM
pnpm add onionl-ui
```

## Usage

### Full Import

```ts
import OnionlUI from 'onionl-ui'
import { createApp } from 'vue'
import App from './App.vue'
import 'onionl-ui/dist/style.css'

const app = createApp(App)
app.use(OnionlUI)
app.mount('#app')
```

### On-demand Import

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

Now you can start using OnionlUI! Please check each component's documentation for more usage details.
