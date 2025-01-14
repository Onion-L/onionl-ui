<template>
  <div class="flex gap-4 items-center">
    <div v-for="shape in ['circle', 'square']" :key="shape">
      <p>{{ shape }}</p>
      <ol-avatar src="https://i.postimg.cc/50sV11jF/pexels-photo-128302.jpg" :shape />
    </div>
  </div>
</template>
