# FlipCard 翻转卡片

FlipCard 组件提供了一个可以翻转的卡片界面，支持正反两面内容的展示。

## 基础用法

通过 `flipped` 属性控制卡片的翻转状态，使用 `front` 和 `back` 属性分别设置正反面的内容。

<script setup>
import { ref } from 'vue'
import Back from './flipCard/back.vue'
import Front from './flipCard/front.vue'
const isFlipped = ref(false)
function handleClick() {
isFlipped.value = !isFlipped.value
}
</script>

<div class="flex justify-center">
<ol-flip-card
class="w-70 h-70"
  :flipped="isFlipped"
  :front="Front"
  :back="Back"
  @click="handleClick"
/>
</div>

```vue
<script setup>
import { ref } from 'vue'
import Back from './flipCard/back.vue'
import Front from './flipCard/front.vue'

const isFlipped = ref(false)
function handleClick() {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div class="flex justify-center">
    <ol-flip-card
      class="w-70 h-70"
      :flipped="isFlipped"
      :front="Front"
      :back="Back"
      @click="handleClick"
    />
  </div>
</template>
```

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| flipped | `boolean` | `false` | 控制卡片是否翻转 |
| class | `string \| object \| array` | - | 自定义 class |
| front | `Component` | - | 卡片正面显示的组件 |
| back | `Component` | - | 卡片背面显示的组件 |
