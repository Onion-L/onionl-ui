<template>
  <div class="flex gap-5">
    <div v-for="size in ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs']" :key="size">
      <p class="text-center text-lg font-500">
        {{ size }}
      </p>
      <ol-avatar :size="size" src="https://i.postimg.cc/50sV11jF/pexels-photo-128302.jpg" />
    </div>
  </div>
</template>
