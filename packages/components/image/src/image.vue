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
  fit: 'contain',
})

const emit = defineEmits<{
  (e: 'load', event: Event): void
}>()

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
  if (props.loading === 'lazy') {
    isLoading.value = true
    loadError.value = false
    cleanupObserver()
    lazyLoadImageSetup()
  }
  else {
    loadImage()
  }
})

function handleError() {
  loadError.value = true
}

function loadImage() {
  if (!props.src) {
    handleError()
    return
  }
  isLoading.value = true
  loadError.value = false
  imageSrc.value = props.src
}

function handleLoad(event: Event) {
  isLoading.value = false
  emit('load', event)
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
  else {
    loadImage()
  }
})

onUnmounted(() => {
  cleanupObserver()
})
</script>

<template>
  <div ref="container" class="ol-image relative" v-bind="filteredAttrs">
    <div v-if="loadError" :class="className" class="ol-image__error">
      <slot name="error">
        <span>FAILED</span>
      </slot>
    </div>
    <template v-else>
      <div v-if="isLoading" :class="className" class="absolute ol-image__load">
        <slot name="load">
          Loading...
        </slot>
      </div>
      <img
        v-if="imageSrc !== undefined"
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
