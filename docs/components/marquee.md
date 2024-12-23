# Marquee 跑马灯

跑马灯组件用于创建循环滚动的文本或内容展示效果。

## 基础用法

通过默认插槽传入需要滚动的内容。

<div class="flex flex-col gap-4">
  <ol-marquee :duration="20" reverse>
    <ol-card v-for="meme in memes" :key="meme.title" class="w-80 flex-shrink-0 mx-2">
      <ol-card-header>
      <div class="flex flex-col gap-3 dark:text-white">
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 rounded-full" :class="meme.color" />
          <h3 :style="{margin:0}" class="text-xl font-semibold m-0 line-height-8">{{ meme.title }}</h3>
        </div>
        <p class="m-0 text-gray-600 dark:text-gray-300 text-sm">
          {{ meme.description }}
        </p>
      </div>
    </ol-card-header>
  </ol-card>
</ol-marquee>
<ol-marquee :duration="20">
  <ol-card v-for="meme in memes" :key="meme.title" class="w-80 flex-shrink-0 mx-2">
    <ol-card-header>
      <div class="flex flex-col gap-3 dark:text-white">
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 rounded-full" :class="meme.color" />
          <h3 :style="{margin:0}" class="text-xl font-semibold m-0 line-height-8">{{ meme.title }}</h3>
        </div>
        <p class="m-0 text-gray-600 dark:text-gray-300 text-sm">
          {{ meme.description }}
        </p>
      </div>
    </ol-card-header>
  </ol-card>
</ol-marquee>
</div>

<script setup>
const memes = [
  {
    title: 'Buzz Lightyear',
    color: 'bg-gradient-to-r from-blue-500 to-green-500',
    description: 'To infinity... and beyond!'
  },
  {
    title: 'Woody',
    color: 'bg-gradient-to-r from-amber-600 to-yellow-500',
    description: "Reach for the sky! You're my favorite deputy!"
  },
  {
    title: 'Rex',
    color: 'bg-gradient-to-r from-green-400 to-emerald-500',
    description: "I don't like confrontations! I'm just not that kind of dinosaur."
  },
  {
    title: 'Hamm',
    color: 'bg-gradient-to-r from-pink-400 to-rose-300',
    description: "Oh, great. Now I have guilt!"
  },
  {
    title: 'Forky',
    color: 'bg-gradient-to-r from-blue-400 to-cyan-300',
    description: "I am not a toy. I was made for soup, salad, maybe chili, and then the trash!"
  }
]
</script>

```vue
<script setup>
const memes = [
  {
    title: 'Buzz Lightyear',
    color: 'bg-gradient-to-r from-blue-500 to-green-500',
    description: 'To infinity... and beyond!'
  },
  {
    title: 'Woody',
    color: 'bg-gradient-to-r from-amber-600 to-yellow-500',
    description: 'Reach for the sky! You\'re my favorite deputy!'
  },
  {
    title: 'Rex',
    color: 'bg-gradient-to-r from-green-400 to-emerald-500',
    description: 'I don\'t like confrontations! I\'m just not that kind of dinosaur.'
  },
  {
    title: 'Hamm',
    color: 'bg-gradient-to-r from-pink-400 to-rose-300',
    description: 'Oh, great. Now I have guilt!'
  },
  {
    title: 'Forky',
    color: 'bg-gradient-to-r from-blue-400 to-cyan-300',
    description: 'I am not a toy. I was made for soup, salad, maybe chili, and then the trash!'
  }
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <ol-marquee :duration="20" reverse>
      <ol-card v-for="meme in memes" :key="meme.title" class="w-80 flex-shrink-0 mx-2">
        <ol-card-header>
          <div class="flex flex-col gap-3 dark:text-white">
            <div class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-full" :class="meme.color" />
              <h3 :style="{ margin: 0 }" class="text-xl font-semibold m-0 line-height-8">
                {{ meme.title }}
              </h3>
            </div>

            <p class="m-0 text-gray-600 dark:text-gray-300 text-sm">
              {{ meme.description }}
            </p>
          </div>
        </ol-card-header>
      </ol-card>
    </ol-marquee>
    <ol-marquee :duration="20">
      <ol-card v-for="meme in memes" :key="meme.title" class="w-80 flex-shrink-0 mx-2">
        <ol-card-header>
          <div class="flex flex-col gap-3 dark:text-white">
            <div class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-full" :class="meme.color" />
              <h3 :style="{ margin: 0 }" class="text-xl font-semibold m-0 line-height-8">
                {{ meme.title }}
              </h3>
            </div>
            <p class="m-0 text-gray-600 dark:text-gray-300 text-sm">
              {{ meme.description }}
            </p>
          </div>
        </ol-card-header>
      </ol-card>
    </ol-marquee>
  </div>
</template>
```

## 垂直滚动

设置 `vertical` 属性可以实现垂直方向的滚动。

<div class="flex gap-4">
  <ol-marquee :duration="20" vertical class="h-120">
    <ol-card v-for="meme in memes" :key="meme.title" class="w-80 flex-shrink-0 mx-2">
      <ol-card-header>
      <div class="flex flex-col gap-3 dark:text-white">
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 rounded-full" :class="meme.color" />
          <h3 :style="{margin:0}" class="text-xl font-semibold m-0 line-height-8">{{ meme.title }}</h3>
        </div>
        <p class="m-0 text-gray-600 dark:text-gray-300 text-sm">
          {{ meme.description }}
        </p>
      </div>
    </ol-card-header>
  </ol-card>
</ol-marquee>
 <ol-marquee :duration="20" vertical reverse class="h-120">
    <ol-card v-for="meme in memes" :key="meme.title" class="w-80 flex-shrink-0 mx-2">
      <ol-card-header>
      <div class="flex flex-col gap-3 dark:text-white">
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 rounded-full" :class="meme.color" />
          <h3 :style="{margin:0}" class="text-xl font-semibold m-0 line-height-8">{{ meme.title }}</h3>
        </div>
        <p class="m-0 text-gray-600 dark:text-gray-300 text-sm">
          {{ meme.description }}
        </p>
      </div>
    </ol-card-header>
  </ol-card>
</ol-marquee>
</div>

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|---------|
| duration | 滚动一次所需时间(秒) | `number` | `20` |
| reverse | 是否反向滚动 | `boolean` | `false` |
| gap | 滚动内容之间的间距 | `string` | `'8px'` |
| height | 组件高度 | `string` | `'100%'` |
| vertical | 是否垂直滚动 | `boolean` | `false` |
