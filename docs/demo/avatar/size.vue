<template>
  <div class="flex gap-5">
    <div v-for="size in ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']" :key="size">
      <p>{{ size }}</p>
      <ol-avatar :size />
    </div>
  </div>
</template>
