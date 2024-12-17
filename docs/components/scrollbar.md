# Scrollbar 滚动条

自定义滚动条组件，提供更好的滚动体验。

## 基础用法

通过设置 `height` 属性来控制滚动区域的高度。

<ol-scrollbar height="400px">
<div v-for="i in 20" :key="i" class="text-lg h-50px bg-primary my-1 rounded-md text-center line-height-50px">
  {{ i }}
</div>
</ol-scrollbar>

## 滚动捕捉

结合 `ol-scroll-snap` 组件，可以实现滚动捕捉效果。设置 `snap` 属性为 `both`、`x`、`y` 可以在水平和垂直方向都启用滚动捕捉。

<ol-scrollbar height="400px" snap="both">
  <ol-scroll-snap
    v-for="i in 10"
    :key="i"
    align="start"
    class="text-3xl h-400px bg-primary my-1 rounded-md text-center line-height-400px"
  >
    {{ i }}
  </ol-scroll-snap>
</ol-scrollbar>

### Scrollbar 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 滚动区域的高度 | `string \| number` | - |
| snap | 滚动捕捉方向，可选值为 `x`、`y`、`both` | `string` | - |

### ScrollSnap 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 滚动捕捉的对齐方式，可选值为 `start`、`center`、`end` | `string` | `center` |
