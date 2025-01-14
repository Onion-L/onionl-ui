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
  clickable: false,
  outlined: false,
  outlineColor: '#ccc',
  outlineWidth: 3,
  outlineStyle: 'solid',
  outlineGradient: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
})

const emit = defineEmits<AvatarEmits>()
const hasError = ref(false)

const isUsingNumericSize = computed(() => typeof Number(props.size) === 'number')

const outlineStyles = computed(() => {
  if (!props.outlined)
    return {}

  return {
    border: props.outlineStyle === 'solid'
      ? `${props.outlineWidth}px solid ${props.outlineColor}`
      : `${props.outlineWidth}px solid transparent`,
    backgroundImage: props.outlineStyle === 'gradient'
      ? `linear-gradient(#fff, #fff), ${props.outlineGradient || 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}`
      : undefined,
    backgroundOrigin: props.outlineStyle === 'gradient' ? 'border-box' : undefined,
    backgroundClip: props.outlineStyle === 'gradient' ? 'padding-box, border-box' : undefined,
  }
})

const classes = computed(() => [
  'ol-avatar',
  `ol-avatar--${props.shape}`,
  isUsingNumericSize.value ? `ol-avatar--${props.size}` : '',
  { 'ol-avatar--clickable': props.clickable },
  { 'ol-avatar--outlined': props.outlined },
])

const styles = computed(() => ({
  backgroundColor: props.backgroundColor ?? '#000',
  borderRadius: props.borderRadius ? `${props.borderRadius}px` : undefined,
  cursor: props.clickable ? 'pointer' : 'default',
  ...outlineStyles.value,
}))

const imgStyles = computed(() => ({
  width: isUsingNumericSize.value ? `${props.size}px` : '100%',
  height: isUsingNumericSize.value ? `${props.size}px` : '100%',
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
      :style="imgStyles"
      @error="handleError"
    >
    <ol-icon
      v-else-if="icon"
      :class="icon"
    />
    <span
      v-else-if="getFallbackContent()"
      class="ol-avatar__fallback"
    >
      {{ getFallbackContent() }}
    </span>
  </div>
</template>

<style>
.ol-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.2s ease;
  aspect-ratio: 1/1;
}

.ol-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ol-avatar--xs {
  width: 24px;
  height: 24px;
  font-size: 12px;
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

.ol-avatar--xl {
  width: 56px;
  height: 56px;
  font-size: 20px;
}

.ol-avatar--2xl {
  width: 64px;
  height: 64px;
  font-size: 24px;
}

.ol-avatar--3xl {
  width: 72px;
  height: 72px;
  font-size: 28px;
}

.ol-avatar--circle {
  border-radius: 50%;
}

.ol-avatar--square {
  border-radius: none;
}

.ol-avatar--clickable:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.ol-avatar__fallback {
  color: var(--ol-gray-700);
  font-weight: 500;
  line-height: 1;
}
</style>
