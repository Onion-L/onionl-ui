<script lang="ts" setup>
import { OlSwap, OlSwapItem } from '@onionl-ui/components'
</script>

<template>
  <OlSwap>
    <OlSwapItem>1</OlSwapItem>
    <OlSwapItem>2</OlSwapItem>
    <OlSwapItem>3</OlSwapItem>
    <OlSwapItem>4</OlSwapItem>
    <OlSwapItem>5</OlSwapItem>
  </OlSwap>
</template>

<style scoped>
.dragging {
  opacity: 0.5;
}
</style>
