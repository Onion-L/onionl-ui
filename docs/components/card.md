# Card 卡片

卡片组件用于以统一的格式展示相关内容和操作。

## 基础用法

最基本的卡片组件包含标题、内容和底部操作区域。

<div class="flex justify-center">
<ol-card class="w-70">
  <ol-card-header>
    <div class="flex flex-col gap-2 dark:text-white">
      <h1 class="text-2xl font-bold m-0">
        Card
      </h1>
      <p class="m-0 dark:text-coolGray-3">
        Card component is a container for displaying content in a card format.
      </p>
    </div>
  </ol-card-header>
  <ol-card-content>
    <ol-image className="w-full h-auto" src="/logo4x.png" />
  </ol-card-content>
  <ol-card-footer>
    <ol-button size="sm" class="w-full">
      Confirm
    </ol-button>
  </ol-card-footer>
</ol-card>
</div>

## 组件结构

Card组件由以下几个部分组成：

- `<ol-card>`: 卡片的容器组件
- `<ol-card-header>`: 卡片的头部区域
- `<ol-card-content>`: 卡片的主要内容区域
- `<ol-card-footer>`: 卡片的底部区域
