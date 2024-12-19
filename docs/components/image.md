# Image 组件

`Image` 组件用于显示图像，并支持多种适应方式。以下是如何使用 `Image` 组件的示例。

## 使用示例

<div class="flex gap-4">
  <div v-for="fit in ['fill', 'contain', 'cover', 'none', 'scale-down']" :key="fit" class="flex flex-col items-center gap-4">
    <span>{{ fit }}</span>
    <OlImage class="w-100px h-100px" :fit="fit" loading="lazy" src="https://i.postimg.cc/sx8CQcYj/pexels-photo-1108099.jpg" />
  </div>
</div>

```html
<div class="flex gap-4">
    <div
      v-for="fit in ['fill', 'contain', 'cover', 'none', 'scale-down']"
      :key="fit"
      class="flex flex-col items-center gap-4"
    >
      <span>{{ fit }}</span>
      <OlImage class="w-100px h-100px" :fit="fit" loading="lazy" src="https://i.  postimg.cc/sx8CQcYj/pexels-photo-1108099.jpg" />
    </div>
</div>
```

## 默认插槽

`OlImage` 组件支持默认插槽，可以自定义错误状态下的显示内容。

<div class="flex gap-4">
  <OlImage />
  <OlImage>
    <template #error>
      <OlIcon icon="i-mi-image" />
    </template>
  </OlImage>
</div>

```html
 <!-- 默认报错 -->
 <OlImage />

<!-- 错误插槽 -->
  <OlImage>
    <template #error>
      <OlIcon icon="i-mi-image" />
    </template>
  </OlImage>
```

## 懒加载

`OlImage` 组件支持懒加载功能，通过设置 `loading` 属性为 `'lazy'`，可以在图像进入视口时才进行加载，从而提高页面的性能。

<script setup>
const urls = [
  'https://i.postimg.cc/50sV11jF/pexels-photo-128302.jpg',
  'https://i.postimg.cc/NMDgMmCF/pexels-photo-611328.jpg',
  'https://i.postimg.cc/sx8CQcYj/pexels-photo-1108099.jpg',
  'https://i.postimg.cc/W4nR6jGf/cow-pasture-animal-almabtrieb.jpg',
  'https://i.postimg.cc/6QjKxt84/pexels-photo-2416581.jpg',
  'https://i.postimg.cc/BQTGQx80/pexels-photo-19302257.jpg',
  'https://i.postimg.cc/Gtv6tCmQ/pexels-photo-29687479.jpg',
]
</script>

<div class="w-2xl h-lg overflow-y-scroll">
  <OlImage class='w-auto h-370px' v-for="url in urls" :key="url" fit="contain" loading="lazy" :src="url" />
</div>

```vue
<script setup>
const urls = [
  'https://i.postimg.cc/50sV11jF/pexels-photo-128302.jpg',
  'https://i.postimg.cc/NMDgMmCF/pexels-photo-611328.jpg',
  'https://i.postimg.cc/sx8CQcYj/pexels-photo-1108099.jpg',
  'https://i.postimg.cc/W4nR6jGf/cow-pasture-animal-almabtrieb.jpg',
  'https://i.postimg.cc/6QjKxt84/pexels-photo-2416581.jpg',
  'https://i.postimg.cc/BQTGQx80/pexels-photo-19302257.jpg',
  'https://i.postimg.cc/Gtv6tCmQ/pexels-photo-29687479.jpg',
]
</script>

<template>
  <div class="w-2xl h-lg overflow-y-scroll">
    <OlImage v-for="url in urls" :key="url" class="w-auto h-370px" fit="contain" loading="lazy" :src="url" />
  </div>
</template>
```

## 属性

| 属性名      | 说明           | 类型                | 默认值  |
|------------|---------------|---------------------|--------|
| src        | 图片源地址     | `string`            | `-`    |
| fit        | 图片填充模式   | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'fill'` |
| loading    | 图片加载模式   | `'eager' \| 'lazy'` | `'eager'` |
| alt        | 图片替代文本   | `string`            | `-`    |

## 插槽

| 插槽名      | 说明           |
|------------|---------------|
| error      | 图片加载失败时的显示内容 |
| placeholder| 图片加载中的显示内容 |
