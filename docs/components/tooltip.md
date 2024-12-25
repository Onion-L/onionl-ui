# Tooltip 文字提示

当鼠标悬停或点击在元素上时，显示提示信息（如果你觉得这个组件长得很像 Popover，恭喜你答对了，Tooltip 是 Popover 封装出来的😁）。

## 基础用法

最基础的文字提示。

<demo vue="../demo/tooltip/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/feat/popper/packages/components/tooltip" />

## 触发方式

通过 `trigger` 属性可以设置不同的触发方式。

<demo vue="../demo/tooltip/trigger.vue" github="https://github.com/Onion-L/onionl-ui/tree/feat/popper/packages/components/tooltip" />

## 提示框样式

通过 `content-class` 属性可以设置提示框的样式。

<demo vue="../demo/tooltip/content.vue" github="https://github.com/Onion-L/onionl-ui/tree/feat/popper/packages/components/tooltip" />

## 箭头

通过 `arrow` 属性可以设置是否显示箭头。

<demo vue="../demo/tooltip/arrow.vue" github="https://github.com/Onion-L/onionl-ui/tree/feat/popper/packages/components/tooltip" />

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content-class | 内容类名 | `string` | `-` |
| content | 显示的内容 | `string` | `-` |
| placement | 提示框出现的位置 | `top \| bottom \| left \| right \| top` | `top` |
| trigger | 触发方式 | `hover \| click \| hover` | `hover` |
| arrow | 是否显示箭头 | `boolean` | `true` |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 触发 Tooltip 显示的元素 |
