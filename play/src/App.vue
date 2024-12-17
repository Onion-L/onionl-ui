<script setup lang="ts">
import { OlHalo } from 'onionl-ui'
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <ol-halo offset-x="10px" offset-y="10px" :halo-color="['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']" :duration="3000">
      <div class="w-100px h-100px bg-white" />
    </ol-halo>
  </div>
</template>

<style scoped>

</style>
