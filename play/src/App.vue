<script lang="ts" setup>
import { OlButton, OlPopover } from '@onionl-ui/components'
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <ol-popover placement="top-end" arrow :duration="300" :show="show">
      <template #trigger>
        <ol-button @click="show = !show">
          显示 Popover
        </ol-button>
      </template>
      hello
    </ol-popover>
  </div>
</template>
