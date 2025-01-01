# Marquee 跑马灯

跑马灯组件用于创建循环滚动的文本或内容展示效果。

## 基础用法

通过默认插槽传入需要滚动的内容。

<demo vue="../../demo/marquee/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/marquee" />

## 垂直滚动

设置 `vertical` 属性可以实现垂直方向的滚动。

<demo vue="../../demo/marquee/vertical.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/marquee" />

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|---------|
| duration | 滚动一次所需时间(秒) | `number` | `20` |
| reverse | 是否反向滚动 | `boolean` | `false` |
| gap | 滚动内容之间的间距 | `string` | `'8px'` |
| height | 组件高度 | `string` | `'100%'` |
| vertical | 是否垂直滚动 | `boolean` | `false` |
