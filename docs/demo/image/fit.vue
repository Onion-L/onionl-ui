<template>
  <div class="flex gap-4">
    <div v-for="fit in ['fill', 'contain', 'cover', 'none', 'scale-down']" :key="fit" class="flex flex-col items-center gap-4">
      <span>{{ fit }}</span>
      <ol-image class="w-100px h-100px" :fit="fit" src="https://i.postimg.cc/sx8CQcYj/pexels-photo-1108099.jpg" />
    </div>
  </div>
</template>
