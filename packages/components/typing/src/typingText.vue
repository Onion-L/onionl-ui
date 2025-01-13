<script lang="ts" setup>
import type { TypingTextProps } from './typingText'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed } from 'vue'

defineOptions({
  name: 'OlTypingText',
})

const props = withDefaults(defineProps<TypingTextProps>(), {
  duration: 8,
})

const ns = useNamespace('typing')

const textLength = computed(() => props.text.length)
const typingTextCls = computed(() => clsx(ns.e('text'), props.class, 'typing-text'))
</script>

<template>
  <span
    :class="typingTextCls"
    :style="{
      '--typing-duration': `${props.duration}s`,
      '--typing-steps': textLength,
    }"
    role="text"
    aria-label="Typewriter effect text"
  >
    {{ props.text }}
  </span>
</template>

<style scoped>
.typing-text {
  animation: typing var(--typing-duration) steps(var(--typing-steps), end) infinite,
    cursor-blink 0.3s step-end infinite alternate;
}

@keyframes typing {
  0%,20% {
    width: 0;
  }
  40%,60% {
    width: calc(var(--typing-steps) * 1ch);
  }
  80%,100% {
    width: 0;
  }
}

@keyframes cursor-blink {
  50% {
    border-color: transparent;
  }
}
</style>
