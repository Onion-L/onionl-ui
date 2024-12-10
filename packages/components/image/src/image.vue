<script lang="ts" setup>
import type { ImageProps } from './image'
import clsx from 'clsx'
import { computed, onMounted, onUnmounted, ref, useAttrs, watch } from 'vue'

defineOptions({
  name: 'OlImage',
})

const props = withDefaults(defineProps<ImageProps>(), {
  loading: 'eager',
  className: 'w-300px h-200px',
})

const container = ref<HTMLElement>()
const imageRef = ref<HTMLElement>()
const imageSrc = ref<string | undefined>()
const loadError = ref(false)
const isLoading = ref(true)
const attr = useAttrs()
let observer: IntersectionObserver | null = null

const imgCls = computed(() => {
  return clsx(`ol-image__fit-${props.fit}`)
})

function loadImage() {
  if (props.loading === 'eager') {
    imageSrc.value = props.src
    isLoading.value = false
  }
  else {
    imageSrc.value = undefined
    isLoading.value = true
  }
}

const filteredAttrs = computed(() => {
  const {
    className,
    style,
    src,
    alt,
    fit,
    loading,
    ...rest
  } = attr

  return rest
})

watch(() => props.src, () => {
  if (props.loading === 'eager') {
    loadImage()
  }
}, { immediate: true })

function handleError() {
  loadError.value = true
}

function handleLoad() {
  isLoading.value = false
}

onMounted(() => {
  if (props.loading === 'lazy') {
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        imageSrc.value = props.src
        isLoading.value = false
        if (observer && container.value) {
          observer.unobserve(container.value)
          observer.disconnect()
          observer = null
        }
      }
    }, {
      root: null,
      threshold: 0.25,
      rootMargin: '50px',
    })

    if (container.value) {
      observer.observe(container.value)
    }
  }
  else {
    imageSrc.value = props.src
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<template>
  <div ref="container" v-bind="filteredAttrs">
    <slot v-if="loadError" name="error">
      <div :class="className" class="ol-image__error">
        {{ 'FAILED' }}
      </div>
    </slot>
    <template v-else>
      <div v-if="isLoading" :class="className" class="ol-image__load">
        <slot name="load">
          Loading...
        </slot>
      </div>
      <img
        v-else
        ref="imageRef"
        :class="[imgCls, className]"
        :src="imageSrc"
        :alt="alt"
        @load="handleLoad"
        @error="handleError"
      >
    </template>
  </div>
</template>
