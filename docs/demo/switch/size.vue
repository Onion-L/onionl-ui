<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div class="flex flex-col gap-2">
    <ol-switch v-model="checked" size="large" />
    <ol-switch v-model="checked" size="default" />
    <ol-switch v-model="checked" size="small" />
  </div>
</template>
