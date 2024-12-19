# Progress 进度条

用于展示操作的当前进度。

## 基础用法

通过 `value` 属性设置进度条百分比。

<ol-progress class="w-70 h-2" :value="50" />

```vue
<template>
  <ol-progress class="w-70 h-2" :value="50" />
</template>
```

## 显示标签

设置 `label` 属性可以在进度条右侧显示百分比标签。

<ol-progress class="w-70 h-2" :value="50" label />

```vue
<template>
  <ol-progress class="w-70 h-2" :value="50" label />
</template>
```

## 反向进度条

设置 `reverse` 属性可以使进度条从右向左展示。

<ol-progress class="w-70 h-2" :value="60" reverse label/>

```vue
<template>
  <ol-progress class="w-70 h-2" :value="60" reverse label />
</template>
```

## 自定义标签内容

通过 `label` 插槽可以自定义标签内容。

<ol-progress class="w-70 h-2" :value="70" label>
  <template #label>
    <ol-icon icon='i-mi-heart' />
  </template>
</ol-progress>

```vue
<template>
  <ol-progress class="w-70 h-2" :value="70" label>
    <template #label>
      <ol-icon icon="i-mi-heart" />
    </template>
  </ol-progress>
</template>
```

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|---------|
| value | 进度百分比 | `number` | `0` |
| reverse | 是否反向 | `boolean` | `false` |
| label | 是否显示标签 | `boolean` | `false` |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| label | 自定义标签内容 |
