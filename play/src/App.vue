<script lang="ts" setup>
import { OlText3D } from '@onionl-ui/components'
</script>

<template>
  <div class="w-screen h-screen flex gap-2 justify-center items-center">
    <OlText3D
      class="text-100px font-extrabold"
      text="Onionl UI"
      :layer="10"
      letter-spacing="10px"
      direction="bottom-left"
      blur
    />
  </div>
</template>
