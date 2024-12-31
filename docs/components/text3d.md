# Text3D 文字立体效果

用于创建具有 3D 立体感的文字效果。

## 基础用法

设置 `text` 属性来指定显示的文字内容。

<demo vue="../demo/text3d/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## 自定义层级

通过 `layer` 属性设置阴影的层数，数值越大立体感越强。

<demo vue="../demo/text3d/layer.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## 方向控制

使用 `direction` 属性控制立体效果的方向，支持 `top-left`、`top-right`、`bottom-left`、`bottom-right` 四个方向。

<demo vue="../demo/text3d/direction.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## 模糊效果

添加 `blur` 属性来启用阴影的模糊效果。

<demo vue="../demo/text3d/blur.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## 自定义样式

可以通过 `color`、`shadowColor` 和 `letterSpacing` 属性来自定义文字样式。

<demo vue="../demo/text3d/style.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## 属性

| 属性名 | 说明 | 类型 | 默认值                |
|--------|------|------|---------------------------|
| text | 显示的文字内容 | `string` | `—`                   |
| color | 文字颜色 | `string` | `var(--onl-primary)` |
| shadowColor | 阴影颜色 | `string` | `var(--onl-purple-900)` |
| layer | 立体效果的层数 | `number` | `5`                  |
| letterSpacing | 字间距 | `string` | `'0'`                |
| direction | 立体效果的方向 | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `—`                   |
| blur | 是否启用模糊效果 | `boolean` | `false`              |
