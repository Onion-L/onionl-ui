<script setup lang="ts">
import { OlCard, OlCardHeader, OlMarquee } from '@onionl-ui/components'
</script>

<template>
  <h1>Marquee</h1>
  <div class="w-screen">
    <ol-marquee>
      <ol-card v-for="j in 4" :key="j" class="w-70  flex-shrink-0">
        <ol-card-header>
          <div class="flex flex-col gap-2 dark:text-white">
            <h1 class="text-2xl font-bold m-0">
              Onionl-UI {{ j }}
            </h1>
            <p class="m-0 dark:text-coolGray-3">
              Onionl-UI is a UI library for Vue 3🚀. It is a library of components for Vue 3.
            </p>
          </div>
        </ol-card-header>
      </ol-card>
    </ol-marquee>
  </div>
</template>

<style scoped>

</style>
