<template>
  <ol-scrollbar height="400px" snap="both">
    <ol-scroll-snap
      v-for="i in 10"
      :key="i"
      align="start"
      class="text-3xl h-400px bg-primary my-1 rounded-md text-center line-height-400px"
    >
      {{ i }}
    </ol-scroll-snap>
  </ol-scrollbar>
</template>
