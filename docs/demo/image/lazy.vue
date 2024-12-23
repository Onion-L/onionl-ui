<script setup>
const urls = [
  'https://i.postimg.cc/50sV11jF/pexels-photo-128302.jpg',
  'https://i.postimg.cc/NMDgMmCF/pexels-photo-611328.jpg',
  'https://i.postimg.cc/sx8CQcYj/pexels-photo-1108099.jpg',
  'https://i.postimg.cc/W4nR6jGf/cow-pasture-animal-almabtrieb.jpg',
  'https://i.postimg.cc/6QjKxt84/pexels-photo-2416581.jpg',
  'https://i.postimg.cc/BQTGQx80/pexels-photo-19302257.jpg',
  'https://i.postimg.cc/Gtv6tCmQ/pexels-photo-29687479.jpg',
]
</script>

<template>
  <ol-scrollbar class="w-full h-lg">
    <ol-image v-for="url in urls" :key="url" class="w-auto h-370px" fit="contain" loading="lazy" :src="url" />
  </ol-scrollbar>
</template>
