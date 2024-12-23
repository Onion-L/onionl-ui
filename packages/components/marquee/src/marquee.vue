<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'OlMarquee',
})

const props = withDefaults(defineProps<{
  duration?: number
  reverse?: boolean
  gap?: string
}>(), {
  duration: 20,
  reverse: false,
  gap: '2rem',
})

const repeat = 4
const duration = computed(() => `${props.duration}s`)
</script>

<template>
  <div class="flex [gap:var(--onl-marquee-gap)] overflow-hidden marquee-variable">
    <div
      v-for="i in repeat"
      :key="i"
      class="flex [gap:var(--onl-marquee-gap)]"
      :class="props.reverse ? 'animate-marquee-reverse' : 'animate-marquee'"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.marquee-variable {
  --onl-marquee-duration: v-bind(duration);
  --onl-marquee-gap: v-bind(gap);
}

.animate-marquee {
  animation: marquee var(--onl-marquee-duration) linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse var(--onl-marquee-duration) linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(calc(-100% - var(--onl-marquee-gap)));
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
    transform: translateX(calc(-100% - var(--onl-marquee-gap)));
  }
}
</style>
