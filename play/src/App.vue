<script lang="ts" setup>
import { OlSwitch } from '@onionl-ui/components'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div class="w-screen h-screen flex gap-2 justify-center items-center">
    <ol-switch v-model="checked" />
  </div>
</template>
