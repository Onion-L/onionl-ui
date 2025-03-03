<script lang="ts" setup>
import { ref } from 'vue'

const showTour = ref(false)
function handle() {
  showTour.value = !showTour.value
}
</script>

<template>
  <OlButton size="sm" class="mb-4" @click="handle">
    Begin Tour
  </OlButton>

  <OlTourProvider v-model:active="showTour" class="space-x-4">
    <OlTourStep index="1" title="Step 1" description="This is the first step description">
      <OlButton size="md">
        Step 1
      </OlButton>
    </OlTourStep>
    <OlTourStep index="2" title="Step 2" description="This is the second step description">
      <OlButton type="outline" size="md">
        Step 2
      </OlButton>
    </OlTourStep>
    <OlTourStep index="3" title="Step 3" description="This is the third step description">
      <OlButton icon="i-mi-heart" link size="2xl" />
    </OlTourStep>
  </OlTourProvider>
</template>
