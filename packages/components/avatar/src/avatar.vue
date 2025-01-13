<script setup lang="ts">
import type { AvatarEmits, AvatarProps } from './avatar'
import { OlIcon } from '@onionl-ui/components/icon'
import { computed, ref } from 'vue'

defineOptions({
  name: 'OlAvatar',
})

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  shape: 'circle',
  backgroundColor: '#ccc',
  clickable: false,
})

const emit = defineEmits<AvatarEmits>()
const hasError = ref(false)

const classes = computed(() => [
  'ol-avatar',
  `ol-avatar--${props.size}`,
  `ol-avatar--${props.shape}`,
  { 'ol-avatar--clickable': props.clickable },
])

const styles = computed(() => ({
  backgroundColor: props.backgroundColor,
  borderRadius: props.shape ?? props.borderRadius,
  cursor: props.clickable ? 'pointer' : undefined,
}))

function getFallbackContent() {
  if (props.initials)
    return props.initials.slice(0, 2).toUpperCase()
  if (props.fallbackText)
    return props.fallbackText
  return null
}

function handleError() {
  hasError.value = true
  emit('error')
}

function handleClick(event: MouseEvent) {
  if (!props.clickable) {
    return
  }
  emit('click', event)
}
</script>

<template>
  <div
    :class="classes"
    :style="styles"
    :aria-label="ariaLabel"
    role="img"
    @click="handleClick"
  >
    <img
      v-if="src && !hasError"
      :src="src"
      :alt="alt || ariaLabel"
      class="overflow-hidden"
      @error="handleError"
    >
    <ol-icon
      v-else-if="icon"
      :icon="icon"
      class="ol-avatar__icon"
    />
    <span
      v-else-if="getFallbackContent()"
      class="ol-avatar__fallback"
    >
      {{ getFallbackContent() }}
    </span>
    <ol-icon
      v-else
      icon="i-mi-person"
      class="ol-avatar__icon"
    />
  </div>
</template>

<style>
.ol-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.2s ease;
}

.ol-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ol-avatar--sm {
  width: 32px;
  height: 32px;
  font-size: 14px;
}

.ol-avatar--md {
  width: 40px;
  height: 40px;
  font-size: 16px;
}

.ol-avatar--lg {
  width: 48px;
  height: 48px;
  font-size: 18px;
}

.ol-avatar--circle {
  border-radius: 50%;
}

.ol-avatar--square {
  border-radius: 4px;
}

.ol-avatar--clickable:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.ol-avatar__icon {
  width: 60%;
  height: 60%;
  color: var(--ol-gray-500);
}

.ol-avatar__fallback {
  color: var(--ol-gray-700);
  font-weight: 500;
  line-height: 1;
}
</style>
