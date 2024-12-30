<script lang="ts" setup>
import { ref } from 'vue'

const percentage = ref(0)
</script>

<template>
  <div class="text-lg font-700 m-4">
    {{ percentage }}%
  </div>
  <div class="m-4">
    <ol-slider v-model="percentage" />
  </div>
</template>

<style>

</style>
