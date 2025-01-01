<script setup>
import { ref } from 'vue'

const section = ref(null)
</script>

<template>
  <div ref="section" class="w-full h-400px rounded-md bg-primary p-4 text-center text-size-18px line-height-400px">
    Right-click here to open the menu
  </div>

  <ol-context-menu :target="section">
    <ol-context-menuItem>Copy</ol-context-menuItem>
    <ol-context-menuItem>Paste</ol-context-menuItem>
    <ol-context-menuItem>Cut</ol-context-menuItem>
    <ol-context-menuItem>Delete</ol-context-menuItem>
  </ol-context-menu>
</template>
