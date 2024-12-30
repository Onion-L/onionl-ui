<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'

defineOptions({
  name: 'OlGlowRing',
})

const props = withDefaults(defineProps<{
  background?: string
  class?: HTMLAttributes['class']
  ringWidth?: string
}>(), {
  background: '#fff',
  ringWidth: '4px',
})

const ns = useNamespace('glow-ring')
</script>

<template>
  <div :class="clsx(ns.namespace, props.class)" class="relative relative rounded-md overflow-hidden">
    <div :class="ns.e('content')" class="w-full h-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ol-glow-ring__content {
  --glow-content-background: v-bind(props.background);
  --glow-ring-width: v-bind(props.ringWidth);
}

.ol-glow-ring__content::before {
  content: '';
  z-index: -10;
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background:conic-gradient(red, orange, yellow, green, blue, purple);
  animation: rotate 10s linear infinite;
  transform-origin: 50% 50%;
}

.ol-glow-ring__content::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - var(--glow-ring-width));
  height: calc(100% - var(--glow-ring-width));
  background-color: var(--glow-content-background);
  border-radius: inherit;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
