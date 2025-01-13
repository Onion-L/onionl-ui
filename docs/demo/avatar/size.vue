<template>
  <div class="flex gap-5">
    <div v-for="size in ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']" :key="size">
      <p>{{ size }}</p>
      <ol-avatar :size="size" src="https://i.postimg.cc/50sV11jF/pexels-photo-128302.jpg" />
    </div>
  </div>
</template>
