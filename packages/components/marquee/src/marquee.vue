<script lang="ts" setup>
defineOptions({
  name: 'OlMarquee',
})
</script>

<template>
  <div class=" flex gap-2 overflow-hidden">
    <div v-for="i in 4" :key="i" class="flex animate-marquee gap-2 transition-all duration-300 translate-x-[calc(-100%-8px)]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(calc(-100% - 8px));
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 8px));
  }
}
</style>
