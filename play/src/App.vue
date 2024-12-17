<script setup lang="ts">
import { OlHalo, OlImage } from 'onionl-ui'
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <ol-halo :halo-color="['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']" :halo-radius="4" :duration="3000">
      <ol-image className="w-180px h-auto" src="/logo.png" />
    </ol-halo>
  </div>
</template>

<style scoped>

</style>
