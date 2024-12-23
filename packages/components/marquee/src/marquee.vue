<script lang="ts" setup>
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed, ref } from 'vue'

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

const marqueeRef = ref<HTMLElement>()

const repeat = 4
const duration = computed(() => `${props.duration}s`)
const ns = useNamespace('marquee')
const { namespace } = ns

const innerCls = computed(() => {
  const isReverseCls = props.reverse
    ? ns.em('animate', 'reverse')
    : ns.e('animate')
  return clsx(isReverseCls, ns.e('inner'))
})
</script>

<template>
  <div class="group" :class="[namespace]">
    <div
      v-for="i in repeat"
      ref="marqueeRef"
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
