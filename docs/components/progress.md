# Progress 进度条

用于展示操作的当前进度。

## 基础用法

通过 `value` 属性设置进度条百分比。

<demo vue="../demo/progress/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/progress" />

## 显示标签

设置 `label` 属性可以在进度条右侧显示百分比标签。

  <ol-progress class="w-70 h-2" :value="50" label />

## 反向进度条

设置 `reverse` 属性可以使进度条从右向左展示。

<demo vue="../demo/progress/reverse.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/progress" />

## 自定义标签内容

通过 `label` 插槽可以自定义标签内容。

<demo vue="../demo/progress/slot.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/progress" />

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|---------|
| value | 进度百分比 | `number` | `0` |
| reverse | 是否反向 | `boolean` | `false` |
| label | 是否显示标签 | `boolean` | `false` |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| label | 自定义标签内容 |
