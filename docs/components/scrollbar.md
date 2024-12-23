# Scrollbar 滚动条

自定义滚动条组件，提供更好的滚动体验。

## 基础用法

通过设置 `height` 属性来控制滚动区域的高度。

<demo vue="../demo/scrollbar/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/scrollbar" />

## 滚动捕捉

结合 `ol-scroll-snap` 组件，可以实现滚动捕捉效果。设置 `snap` 属性为 `both`、`x`、`y` 可以在水平和垂直方向都启用滚动捕捉。

<demo vue="../demo/scrollbar/snap.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/scrollbar" />

### Scrollbar 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 滚动区域的高度 | `string \| number` | - |
| snap | 滚动捕捉方向，可选值为 `x`、`y`、`both` | `string` | - |

### ScrollSnap 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 滚动捕捉的对齐方式，可选值为 `start`、`center`、`end` | `string` | `center` |
