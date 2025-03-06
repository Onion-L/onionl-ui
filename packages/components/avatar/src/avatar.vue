<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { AvatarEmits, AvatarProps } from './avatar'
import { AVATAR_GROUP_OVERLAP } from '@onionl-ui/components/constant'
import { OlIcon } from '@onionl-ui/components/icon'
import { useNamespace } from '@onionl-ui/utils'
import initials from 'initials'
import { computed, inject, ref } from 'vue'

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
const ns = useNamespace('avatar')
const hasError = ref(false)
const DEFAULT_ICON = 'i-mi-user'

const overlap = inject<string | undefined>(AVATAR_GROUP_OVERLAP, undefined)

const isUsingNumericSize = computed(() => typeof Number(props.size) === 'number')

const outlineStyles = computed<CSSProperties>(() => {
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

const styles = computed<CSSProperties>(() => ({
  backgroundColor: props.backgroundColor ?? 'var(--onl-primary)',
  borderRadius: props.borderRadius ? `${props.borderRadius}px` : undefined,
  cursor: props.clickable ? 'pointer' : 'default',
  marginLeft: overlap ? `-${overlap}px` : 0,
  ...outlineStyles.value,
}))

const imgStyles = computed<CSSProperties>(() => ({
  width: isUsingNumericSize.value ? `${props.size}px` : '100%',
  height: isUsingNumericSize.value ? `${props.size}px` : '100%',
}))

const classes = computed(() => [
  ns.namespace,
  ns.m(props.shape),
  isUsingNumericSize.value ? ns.m(props.size) : '',
  { [ns.m('clickable')]: props.clickable },
  { [ns.m('outlined')]: props.outlined },
  overlap ? ns.m('overlap') : '',
])

const fallbackContent = computed(() => {
  return props.initials
    ? initials(props.initials)
    : (props.fallbackText || null)
})

function handleError() {
  hasError.value = true
  emit('error')
}

function handleClick(event: MouseEvent) {
  if (!props.clickable)
    return
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
      :class="ns.e('img')"
      class="w-full h-full object-cover"
      :src="src"
      :alt="alt || ariaLabel"
      :style="imgStyles"
      @error="handleError"
    >
    <ol-icon
      v-else-if="icon"
      :icon="icon"
    />
    <span
      v-else-if="props.initials || props.fallbackText"
      :class="ns.e('fallback')"
      class="text-light-50 font-500 leading-none"
    >
      {{ fallbackContent }}
    </span>
    <ol-icon
      v-else
      :icon="DEFAULT_ICON"
    />
  </div>
</template>
