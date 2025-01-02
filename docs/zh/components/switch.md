# Switch 开关

用于在两种状态间切换的开关组件。

## 基础用法

通过`v-model`绑定一个`boolean`类型的变量。

<demo vue="../../demo/switch/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/switch"/>

## 禁用状态

通过`disabled`属性指定是否禁用 Switch 组件。

<demo vue="../../demo/switch/disabled.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/switch"/>

## 尺寸

提供三种尺寸的开关：`large`、`default`和`small`。

<demo vue="../../demo/switch/size.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/switch"/>

## 切换前的钩子函数

通过`before-switch`属性可以在切换前执行特定的逻辑。该函数需要返回一个`Promise`。

<demo vue="../../demo/switch/before.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/switch"/>

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| v-model | 绑定值 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 开关大小 | `'large' \| 'default' \| 'small'` | `'default'` |
| checked | 是否选中 | `boolean` | `false` |
| before-switch | 切换前的钩子函数 | `() => Promise<boolean>` | `() => Promise.resolve(true)` |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 状态改变时触发 | `(value: boolean)` |
| click | 点击时触发 | `(value: boolean)` |
