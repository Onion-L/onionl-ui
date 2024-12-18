<script setup lang="ts">
import { OlButton, OlCard, OlCardContent, OlCardFooter, OlCardHeader, OlImage } from 'onionl-ui'
</script>

<template>
  <ol-card class="w-70">
    <ol-card-header>
      <div class="flex flex-col gap-2 text-white">
        <h1 class="text-2xl font-bold m-0">
          Card
        </h1>
        <p class="m-0 text-coolGray-3">
          Card component is a container for displaying content in a card format.
        </p>
      </div>
    </ol-card-header>
    <ol-card-content>
      <ol-image className="w-full h-auto image-render-edge" src="/logo4x.png" />
    </ol-card-content>
    <ol-card-footer>
      <ol-button size="sm" class="w-full">
        Confirm
      </ol-button>
    </ol-card-footer>
  </ol-card>
</template>

<style scoped>

</style>
