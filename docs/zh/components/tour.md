# Tour 引导

Tour组件用于创建交互式的用户引导流程,通过突出显示页面的特定元素并提供相应说明。

## 基础用法

通过`OlTourProvider`和`OlTourStep`组件来创建引导流程。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/tour" vue="../../demo/tour/basic.vue" />

## 属性

### OlTourProvider 属性

| 属性 | 描述 | 类型 | 默认值 |
|------|------|------|--------|
| v-model:active | 双向绑定引导的显示状态 | `boolean` | `false` |

### OlTourStep 属性

| 属性 | 描述 | 类型 | 默认值 |
|------|------|------|--------|
| index | 步骤索引(必填) | `string \| number` | `-` |
| title | 步骤标题 | `string` | `''` |
| description | 步骤描述 | `string` | `''` |
