<script setup lang="ts">
import { OlScrollbar } from 'onionl-ui'
</script>

<template>
  <div class="w-2xl">
    <ol-scrollbar>
      <div v-for="i in 20" :key="i" class="h-50px bg-primary my-1 rounded-md text-center line-height-50px">
        {{ i }}
      </div>
    </ol-scrollbar>
  </div>
</template>

<style scoped>

</style>
