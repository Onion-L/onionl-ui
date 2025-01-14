<template>
  <div class="flex gap-5">
    <div v-for="i in [100, 85, 65, 50, 30, 25, 10]" :key="i">
      <p>Size of {{ i }}</p>
      <ol-avatar src="https://i.postimg.cc/50sV11jF/pexels-photo-128302.jpg" :size="i" />
    </div>
  </div>
</template>
