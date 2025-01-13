<template>
  <div class="flex gap-5">
    <div v-for="i in [20, 18, 15, 12, 10, 8, 5]" :key="i">
      <p>Size of {{ i }}</p>
      <ol-avatar src="https://i.postimg.cc/50sV11jF/pexels-photo-128302.jpg" :size="i" />
    </div>
  </div>
</template>
