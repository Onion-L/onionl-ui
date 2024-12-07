# Input 输入框

基础的表单输入组件，支持前缀、后缀图标等功能。

## 基础用法

<OlInput class="w-64 h-10" placeholder="Default Placeholder" />

```html
<OlInput placeholder="Default Placeholder" />

```
## 图标输入框

通过 `prefix` 和 `suffix` 属性设置输入框前后缀图标。

<div class="space-x-2">
<OlInput  class="w-64 h-10" suffix="i-mi-eye" placeholder="Default Placeholder" />

<OlInput  class="w-64 h-10" prefix="i-mi-search" placeholder="Search" />
</div>

```html
<OlInput suffix="i-mi-eye" placeholder="Default Placeholder" />
<OlInput prefix="i-mi-search" placeholder="Search" />
```

## 密码输入框

通过设置 `type="password"` 可以创建密码输入框。

<OlInput  class="w-64 h-10" type="password" placeholder="Enter your password" />

```html
<OlInput type="password" placeholder="Enter your password" />
```

## 禁用状态
通过设置 `disabled` 属性，可以将输入框设置为禁用状态。

<OlInput  class="w-64 h-10" disabled placeholder="Disabled Input" />

```html
<OlInput disabled placeholder="Disabled Input" />
```

## 格式化输入

通过设置 `mask` 属性，可以对输入内容进行格式化。例如，可以用于格式化电话号码、日期等（使用`mask`属性必须设置`type='text'`）。

<OlInput class="w-64 h-10" mask="+86 000 0000 0000" placeholder="+86 123 1231 1231" />

```html
<OlInput mask="+86 000 0000 0000" placeholder="+86 123 1231 1231" />
```

### 正则表达式

通过正则表达式，你可以限制输入内容的格式。例如，下面的示例限制只能输入1-6开头的最多6位数字。

<OlInput class="w-64 h-10" :mask="/^[1-6]\d{0,5}$/" placeholder="+86 123 1231 1231" />

```html
<OlInput :mask="/^[1-6]\d{0,5}$/" placeholder="+86 123 1231 1231" />
```

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
