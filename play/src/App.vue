<script setup lang="ts">
import { OlPixelImage } from 'onionl-ui'
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">
      Pixel Image
    </h1>
    <ol-pixel-image
      src="/vue.png"
      :pixel-size="4"
    />
  </div>
</template>
