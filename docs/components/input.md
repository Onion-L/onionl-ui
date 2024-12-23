# Input 输入框

基础的表单输入组件，支持前缀、后缀图标等功能。

## 基础用法

<demo vue="../demo/input/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## 图标输入框

通过 `prefix` 和 `suffix` 属性设置输入框前后缀图标。

<demo vue="../demo/input/icon.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## 密码输入框

通过设置 `type="password"` 可以创建密码输入框。

<demo vue="../demo/input/password.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## 禁用状态
通过设置 `disabled` 属性，可以将输入框设置为禁用状态。

<demo vue="../demo/input/disabled.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## 格式化输入

通过设置 `mask` 属性，可以对输入内容进行格式化。例如，可以用于格式化电话号码、日期等（使用`mask`属性必须设置`type='text'`）。

<demo vue="../demo/input/mask.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

### 正则表达式

通过正则表达式，你可以限制输入内容的格式。例如，下面的示例限制只能输入1-6开头的最多6位数字。

<demo vue="../demo/input/mask-regex.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## 属性

| 属性名      | 说明           | 类型                | 默认值  |
|------------|---------------|---------------------|--------|
| type       | 输入框类型     |`'text' \| 'password'`|`'text'`|
| placeholder| 输入框占位文本  | `string`            | `-`   |
| disabled   | 是否禁用       | `boolean`           | `false`|
| prefix     | 前缀图标       | `string`            | `-`   |
| suffix     | 后缀图标       | `string`            | `-`   |
| mask       | 输入格式化规则  | `string`            | `-`   |
| modelValue | 绑定值         | `string \| number`  | `-`   |
