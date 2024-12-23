<script setup>
import { ref } from 'vue'

const section = ref(null)
</script>

<template>
  <div ref="section" class="w-full h-400px rounded-md bg-primary p-4 text-center text-size-18px line-height-400px">
    在此右键打开菜单
  </div>

  <OlContextMenu :target="section">
    <OlContextMenuItem>复制</OlContextMenuItem>
    <OlContextMenuItem>粘贴</OlContextMenuItem>
    <OlContextMenuItem>剪切</OlContextMenuItem>
    <OlContextMenuItem>删除</OlContextMenuItem>
  </OlContextMenu>
</template>
