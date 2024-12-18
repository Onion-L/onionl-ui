<script setup lang="ts">
import { OlButton, OlCard, OlCardContent, OlCardFooter, OlCardHeader, OlImage } from 'onionl-ui'
import { ref } from 'vue'

const isToggle = ref(false)
</script>

<template>
  <div class="relative w-70 h-100 [perspective:1000px] ">
    <div :class="{ 'rotate-y-180': isToggle }" class="relative w-full h-full [transform-style:preserve-3d] [transition:transform_0.6s]">
      <div class="absolute w-full h-full [backface-visibility:hidden] ">
        <ol-card class="w-70">
          <ol-card-header>
            <div class="flex flex-col gap-2 dark:text-white">
              <h1 class="text-2xl font-bold m-0">
                Card
              </h1>
              <p class="m-0 dark:text-coolGray-3">
                Card component is a container for displaying content in a card format.
              </p>
            </div>
          </ol-card-header>
          <ol-card-content>
            <ol-image className="w-full h-auto image-render-edge" src="/logo4x.png" />
          </ol-card-content>
          <ol-card-footer>
            <ol-button size="sm" class="w-full" @click="isToggle = !isToggle">
              Confirm
            </ol-button>
          </ol-card-footer>
        </ol-card>
      </div>
      <div class="absolute size-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <ol-card class="w-70">
          <ol-card-header>
            <div class="flex flex-col gap-2 dark:text-white">
              <h1 class="text-2xl font-bold m-0">
                Card
              </h1>
              <p class="m-0 dark:text-coolGray-3">
                Card component is a container for displaying content in a card format.
              </p>
            </div>
          </ol-card-header>
          <ol-card-content>
            <ol-image className="w-full h-auto image-render-edge" src="/logo4x.png" />
          </ol-card-content>
          <ol-card-footer>
            <ol-button size="sm" class="w-full" @click="isToggle = !isToggle">
              Confirm
            </ol-button>
          </ol-card-footer>
        </ol-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
