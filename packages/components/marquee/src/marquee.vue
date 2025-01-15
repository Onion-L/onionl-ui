<script lang="ts" setup>
import type { MarqueeProps } from './marquee'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed, ref } from 'vue'

defineOptions({
  name: 'OlMarquee',
})

const props = withDefaults(defineProps<MarqueeProps>(), {
  duration: 20,
  reverse: false,
  gap: '8px',
  height: '100%',
  vertical: false,
})

const marqueeRef = ref<HTMLElement>()
const repeat = 4
const ns = useNamespace('marquee')
const { namespace } = ns

const duration = computed(() => `${props.duration}s`)
const marqueeCls = computed(() => {
  return clsx(namespace, props.class, { [ns.e('vertical')]: props.vertical })
})

const innerCls = computed(() => {
  let marqueeAnimateCls

  if (props.vertical) {
    marqueeAnimateCls = props.reverse
      ? ns.em('animate', 'vertical-reverse')
      : ns.em('animate', 'vertical')
  }
  else {
    marqueeAnimateCls = props.reverse
      ? ns.em('animate', 'reverse')
      : ns.e('animate')
  }

  return clsx(marqueeAnimateCls, ns.e('inner'), { [ns.em('inner', 'vertical')]: props.vertical })
})
</script>

<template>
  <div
    class="group"
    :style="{ '--onl-marquee-duration': duration, '--onl-marquee-gap': gap }" :class="marqueeCls"
  >
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

<style>
.ol-marquee__animate {
  animation: marquee var(--onl-marquee-duration) linear infinite;
}

.ol-marquee__animate--reverse {
  animation: marquee-reverse var(--onl-marquee-duration) linear infinite;
}

.ol-marquee__animate--vertical {
  animation: marquee-vertical var(--onl-marquee-duration) linear infinite;
}

.ol-marquee__animate--vertical-reverse {
  animation: marquee-vertical-reverse var(--onl-marquee-duration) linear infinite;
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

@keyframes marquee-vertical {
  0% {
    transform: translateY(calc(-100% - var(--onl-marquee-gap)));
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes marquee-vertical-reverse {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-100% - var(--onl-marquee-gap)));
  }
}
</style>
