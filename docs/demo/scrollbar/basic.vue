<template>
  <ol-scrollbar height="400px">
    <div v-for="i in 20" :key="i" class="text-lg h-50px bg-primary my-1 rounded-md text-center line-height-50px">
      {{ i }}
    </div>
  </ol-scrollbar>
</template>
