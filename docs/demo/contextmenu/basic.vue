<script setup>
import { ref } from 'vue'

const section = ref(null)
</script>

<template>
  <div ref="section" class="w-full h-400px rounded-md bg-primary p-4 text-center text-size-18px line-height-400px">
    在此右键打开菜单
  </div>

  <ol-context-menu :target="section">
    <ol-context-menuItem>复制</ol-context-menuItem>
    <ol-context-menuItem>粘贴</ol-context-menuItem>
    <ol-context-menuItem>剪切</ol-context-menuItem>
    <ol-context-menuItem>删除</ol-context-menuItem>
  </ol-context-menu>
</template>
