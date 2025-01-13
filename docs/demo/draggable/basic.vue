<template>
  <ol-draggable-list>
    <ol-draggable-item
      v-for="i in 5"
      :key="i"
      class="w-380px h-48px text-center line-height-48px"
    >
      {{ i }}
    </ol-draggable-item>
  </ol-draggable-list>
</template>

<style scoped>
.dragging {
  opacity: 0.5;
}
</style>
