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
