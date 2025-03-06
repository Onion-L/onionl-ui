 # Avatar 头像

头像组件用于通过显示图像、首字母或图标来表示用户。

## 基本用法

头像样式可以通过 `size`、`shape`、`backgroundColor`、`borderRadius`、`fallbackText` 和 `icon` 属性来定义。

### 尺寸
头像有7种预设尺寸：`xs`、`sm`、`md`、`lg`、`xl`、`2xl`、`3xl`。默认尺寸为`md`。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../../demo/avatar/size.vue"  />

### 形状
头像有两种类型：`circle`和`square`。默认类型为`circle`。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../../demo/avatar/shape.vue"  />

### 背景颜色
`backgroundColor`属性允许您设置头像的背景颜色。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../../demo/avatar/backgroundColor.vue"  />

### 边框半径
`borderRadius`属性允许您设置头像的边框半径。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../../demo/avatar/borderRadius.vue"  />

### 回退文本
`fallbackText`属性允许您在图像加载失败时显示回退文本。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../../demo/avatar/fallback.vue"  />

### 图标
`icon`属性允许您显示图标而不是图像。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../../demo/avatar/icon.vue"  />

### 轮廓
`outlined`属性允许您显示轮廓头像。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../../demo/avatar/outline.vue"  />

### 头像组

Avatar Group用于在单个组件中显示一组头像。特别适合以紧凑和视觉上吸引人的方式展示一组人或实体。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../../demo/avatar/group.vue"  />

## 属性

### Avatar

| 属性 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |
| src | 图像URL | `string` | `-` |
| alt | 图像的替代文本 | `string` | `-` |
| initials | 没有图像时显示的首字母 | `string` | `-` |
| icon | 要显示的图标名称 | `string` | `-` |
| fallbackContent | 回退内容 | `string` | `-` |
| size | 头像尺寸 | `string \| number` | `md` |
| shape | 头像形状 | `string` | `circle` |
| backgroundColor | 背景颜色 | `string` | `#101` |
| borderRadius | 自定义边框半径 | `string / number` | `-` |
| outlined | 头像是否有轮廓 | `boolean` | `false` |
| outlineColor | 轮廓颜色 | `string` | `#ccc` |
| outlineWidth | 轮廓宽度 | `number` | `3` |
| outlineStyle | 轮廓样式 | `string` | `solid` |
| outlineGradient | 轮廓渐变 | `string` | `linear-gradient(45deg, #3b82f6, #8b5cf6)` |
| clickable | 头像是否可交互 | `boolean` | `false` |
| ariaLabel | 辅助功能的ARIA标签 | `string` | `-` |

### Avatar Group

| 属性 | 描述 | 类型 | 默认值 |
| ------------- | --------------- | -------- | ------- |
| overlap | 头像之间的覆盖大小 | `string` | `30`|

### 事件

| 名称 | 描述 | 参数 |
|------|-------------|------------|
| click | 点击时触发（仅当`clickable`为true时） | `(event: MouseEvent)` |
| error | 图像加载失败时触发 | `-` |
