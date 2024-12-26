# 按钮

按钮组件是一个基础的交互组件,用于触发操作。Onionl UI 提供了多种尺寸和类型的按钮以满足不同场景的需求。

## 基础用法

按钮组件通过 `size` 和 `type` 属性来定义不同的样式。

### 尺寸
按钮提供了 7 种预设尺寸: `xs`、`sm`、`md`、`lg`、`xl`、`2xl`、`3xl`。默认为 `md` 尺寸。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/size.vue"  />

### 种类
按钮有三种类型: `primary`、`secondary` 和 `outline`。默认为 `primary` 类型。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/basic.vue"  />

## 链接按钮
按钮可以作为链接使用。使用 `to` 属性指定链接地址，或使用 `link` 属性将按钮样式设置为链接形式。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/link.vue"  />

## 禁用状态
按钮可以设置为禁用状态。使用 `disabled` 属性将按钮设置为禁用状态。

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/disabled.vue"  />

## 图标按钮
按钮可以只包含图标。使用 `icon` 属性设置图标，支持所有 Material Icons。

:::tip
使用图标功能需要先安装 Mono Icons 图标集
:::
<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/icon.vue"  />

## 自定义
除了预设尺寸外,你还可以传入数字来自定义按钮大小，默认是1-20，可以通过在组件的预设中设置range字段来改变按钮大小的范围。
```JavaScript
    onionlUIPreset({ range: 25 }),
```

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/custom.vue"  />

## 属性

|属性名     | 说明                                   | 类型                        | 默认值 |
| -------- | ------------------------------------- | ----------------------------- | --- |
| size     | 按钮尺寸，可选值为 `sm`、`md`、`lg` 或数字 | `string \| number`            | `md` |
| link     | 是否为链接样式                           | `boolean`                     | `false` |
| to       | 路由跳转目标，支持 vue-router 的 to 属性   | `string \| RouteLocationRaw` | - |
| icon     | 图标名称，支持 Material Icons | `string` | - |
| disabled | 是否禁用                                | `boolean`                     | `false` |
