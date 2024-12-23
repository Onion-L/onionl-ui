# Image 组件

`Image` 组件用于显示图像，并支持多种适应方式。以下是如何使用 `Image` 组件的示例。

## 使用示例

<demo vue="../demo/image/fit.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/image" />

## 默认插槽

`OlImage` 组件支持默认插槽，可以自定义错误状态下的显示内容。

<demo vue="../demo/image/error.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/image" />

## 懒加载

`OlImage` 组件支持懒加载功能，通过设置 `loading` 属性为 `'lazy'`，可以在图像进入视口时才进行加载，从而提高页面的性能。

<demo vue="../demo/image/lazy.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/image" />

## 属性

| 属性名      | 说明           | 类型                | 默认值  |
|------------|---------------|---------------------|--------|
| src        | 图片源地址     | `string`            | `-`    |
| fit        | 图片填充模式   | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'fill'` |
| loading    | 图片加载模式   | `'eager' \| 'lazy'` | `'eager'` |
| alt        | 图片替代文本   | `string`            | `-`    |

## 插槽

| 插槽名      | 说明           |
|------------|---------------|
| error      | 图片加载失败时的显示内容 |
| placeholder| 图片加载中的显示内容 |
