# Slider 滑块

滑块组件允许用户在固定区间内选择一个值。

## 基础用法

通过拖动滑块来选择一个值。

<demo vue="../demo/slider/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/slider" />

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| modelValue | 绑定值 | `number` | `0` |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长 | `number` | `1` |
| vertical | 是否垂直模式 | `boolean` | `false` |
| disabled | 是否禁用滑块 | `boolean` | `false` |

