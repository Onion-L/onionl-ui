# Halo 发光效果

Halo 组件用于为其子元素添加动态发光效果，能够为用户界面添加视觉上的吸引力和深度感。该组件支持自定义发光颜色、半径和动画持续时间等属性，提供了高度的灵活性和定制性。

## 基础用法

通过将内容包裹在 `<ol-halo>` 标签中来使用发光效果。

<demo vue="../demo/halo/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

## 彩虹发光效果

可以传入颜色数组来创建渐变发光效果，并设置动画时间。这种效果能够为用户界面添加更多的视觉趣味和动态感。

<demo vue="../demo/halo/rainbow.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

## 动画时间

可以传入动画时间来设置发光效果的动画时间。动画时间的调整能够影响发光效果的速度和流畅度，提供了更多的定制可能性。

<demo vue="../demo/halo/duration.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

## 自定义发光半径

可以传入发光半径来设置发光效果的半径。发光半径的调整能够影响发光效果的范围和强度，提供了更多的定制可能性。

<demo vue="../demo/halo/radius.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

### 带偏移的发光效果

可以传入偏移值来设置发光效果的偏移位置。偏移值的调整能够影响发光效果的位置和方向，提供了更多的定制可能性。

<demo vue="../demo/halo/offset.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| is | 渲染的 HTML 标签 | `string` | `'div'` |
| halo-color | 发光颜色，可以是单个颜色或颜色数组 | `string \| string[]` | `-` |
| duration | 动画持续时间（毫秒） | `number` | `5000` |
| halo-radius | 发光半径（em） | `number` | `6` |
| offset-x | X 轴偏移量 | `number \| string` | `0` |
| offset-y | Y 轴偏移量 | `number \| string` | `0` |
