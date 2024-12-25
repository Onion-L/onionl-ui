# Popover 弹出框

弹出框组件用于在元素周围显示一些临时信息。当用户与触发元素交互时（点击或悬停），弹出框会在指定位置显示内容。

## 基础用法

最基础的弹出框用法。

<demo vue="../demo/popover/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## 触发方式

使用 `trigger` 插槽来定义触发元素，弹出框内容可以是任意自定义内容。

<demo vue="../demo/popover/trigger.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## 箭头和位置

使用 `placement` 属性来定义弹出框的位置，使用 `arrow` 属性来定义是否显示箭头。

<demo vue="../demo/popover/arrow.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## 动画时间

使用 `duration` 属性来定义弹出框的动画时间。

<demo vue="../demo/popover/duration.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## 偏移

使用 `offset` 属性来定义弹出框的偏移量。

<demo vue="../demo/popover/offset.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## 属性

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| trigger | 触发方式 | `'hover' \| 'click' \| 'focus'` | `'click'` |
| placement | 弹出位置 | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` |
| arrow | 是否显示箭头 | `boolean` | `false` |
| duration | 动画持续时间(ms) | `number` | `200` |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| trigger | 触发元素 |
| default | 弹出框内容 |
