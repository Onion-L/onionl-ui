# 按钮

按钮组件是一个基础的交互组件,用于触发操作。Onionl UI 提供了多种尺寸和类型的按钮以满足不同场景的需求。

## 基础用法

按钮组件通过 `size` 和 `type` 属性来定义不同的样式。
<!-- TODO：Demo展示 -->
## 尺寸
按钮提供了 7 种预设尺寸: `xs`、`sm`、`md`、`lg`、`xl`、`2xl`、`3xl`。默认为 `md` 尺寸。

<div class="space-x-2">
  <OlButton size="3xl">3xl</OlButton>
  <OlButton size="2xl">2xl</OlButton>
  <OlButton size="xl">xl</OlButton>
  <OlButton size='lg'>lg</OlButton>
  <OlButton size='md'>md</OlButton>
  <OlButton size='sm'>sm</OlButton>
  <OlButton size='xs'>xs</OlButton>
</div>

```html
<div class="space-x-2">
  <OlButton size="3xl">3xl</OlButton>
  <OlButton size="2xl">2xl</OlButton>
  <OlButton size="xl">xl</OlButton>
  <OlButton size='lg'>lg</OlButton>
  <OlButton size='md'>md</OlButton>
  <OlButton size='sm'>sm</OlButton>
  <OlButton size='xs'>xs</OlButton>
</div>
```

## 种类
按钮有三种类型: `primary`、`secondary` 和 `outline`。默认为 `primary` 类型。

<div class="space-x-2">
<OlButton type="primary">Primary</OlButton>
<OlButton type='secondary'>Secondary</OlButton>
<OlButton type='outline'>Outline</OlButton>
</div>

```html
<div class="space-x-2">
<OlButton type="primary">Primary</OlButton>
<OlButton type='secondary'>Secondary</OlButton>
<OlButton type='outline'>Outline</OlButton>
</div>
```

## 链接按钮
按钮可以作为链接使用。使用 `to` 属性指定链接地址，或使用 `link` 属性将按钮样式设置为链接形式。

<div class="space-x-2">
  <OlButton class="!color-primary !no-underline !hover:underline" to="/">路由链接</OlButton>
  <OlButton link>链接样式</OlButton>
</div>

```html
<div class="space-x-2">
  <OlButton to="/">路由链接</OlButton>
  <OlButton link>链接样式</OlButton>
</div>
```

## 图标按钮
按钮可以只包含图标。使用 `icon` 属性设置图标，支持所有 Material Icons。

:::tip
使用图标功能需要先安装 Material Icons 图标集
<div class="space-x-2">
  <OlButton icon="i-mi-comment" />
  <OlButton icon="i-mi-add">Plus</OlButton>
  <OlButton icon="i-mi-settings"link />
</div>
:::

```html
<div class="space-x-2">
  <OlButton icon="i-mi-comment" />
  <OlButton icon="i-mi-add">Plus</OlButton>
  <OlButton icon="i-mi-settings"link />
</div>
```

## 自定义
除了预设尺寸外,你还可以传入数字来自定义按钮大小，默认是1-20，可以通过在组件的预设中设置range字段来改变按钮大小的范围。
```JavaScript
    onionlUIPreset({ range: 25 }),
```

<div class="space-x-2">
  <OlButton size='20'>20</OlButton>
  <OlButton size='25'>25</OlButton>
</div>

```html
<div class="space-x-2">
  <OlButton size='20'>20</OlButton>
  <OlButton size='25'>25</OlButton>
</div>
```
