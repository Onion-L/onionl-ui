<script setup lang="ts">
import { OlScrollbar } from 'onionl-ui'
</script>

<template>
  <div class="w-2xl">
    <ol-scrollbar height="400px">
      <div v-for="i in 20" :key="i" class="h-400px bg-primary my-1 rounded-md text-center line-height-400px">
        {{ i }}
      </div>
    </ol-scrollbar>
  </div>
</template>

<style scoped>

</style>
