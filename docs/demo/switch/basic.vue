<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <ol-switch v-model="checked" />
</template>
