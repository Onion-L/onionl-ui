<script lang="ts" setup>
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
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
const ns = useNamespace('marquee')
const { namespace } = ns
const innerCls = computed(() => clsx(props.reverse ? ns.em('animate', 'reverse') : ns.e('animate'), ns.e('inner')))
</script>

<template>
  <div :class="namespace">
    <div
      v-for="i in repeat"
      :key="i"
      :class="innerCls"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ol-marquee {
  --onl-marquee-duration: v-bind(duration);
  --onl-marquee-gap: v-bind(gap);
}

.ol-marquee__animate {
  animation: marquee var(--onl-marquee-duration) linear infinite;
}

.ol-marquee__animate--reverse {
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
