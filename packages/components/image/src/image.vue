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

const imgCls = computed(() => {
  return clsx(`ol-image__fit-${props.fit}`)
})

watch(() => props.src, () => {
  loadImage()
}, { immediate: true })

function handleError() {
  loadError.value = true
}

function loadImage() {
  isLoading.value = true
  loadError.value = false
  if (props.src) {
    imageSrc.value = props.src
  }
  else {
    handleError()
  }
}

function handleLoad() {
  isLoading.value = false
}

function lazyLoadImageSetup() {
  observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      imageSrc.value = props.src
      isLoading.value = false
      if (observer && container.value) {
        observer.unobserve(container.value)
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

function cleanupObserver() {
  if (observer && container.value) {
    observer.unobserve(container.value)
    observer.disconnect()
    observer = null
  }
}

onMounted(() => {
  if (props.loading === 'lazy') {
    lazyLoadImageSetup()
  }
})

onUnmounted(() => {
  cleanupObserver()
})
</script>

<template>
  <div ref="container" v-bind="filteredAttrs">
    <div v-if="loadError" :class="className" class="ol-image__error">
      <slot name="error">
        <span>FAILED</span>
      </slot>
    </div>
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
