# Typing Text 打字效果

`ol-typing-text` 组件提供了一个打字机效果的文本动画展示。

## 基础用法

通过设置 `text` 属性来指定要显示的文本内容，使用 `duration` 属性来控制打字速度（单位：秒）。

<demo vue="../../demo/typing/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/typing" />

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|--------|------|
| text | 要显示的文本内容 | `string` | `-` |
| duration | 打字效果的总持续时间（秒） | `number` | `5` |
