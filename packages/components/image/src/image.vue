<script lang="ts" setup>
import type { ImageProps } from './image'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed, onMounted, onUnmounted, reactive, ref, useAttrs, watch } from 'vue'

defineOptions({
  name: 'OlImage',
})

const props = withDefaults(defineProps<ImageProps>(), {
  loading: 'eager',
  class: 'w-300px h-200px',
  fit: 'contain',
  preview: false,
})

const emit = defineEmits<{
  (e: 'load', event: Event): void
}>()

const container = ref<HTMLElement>()
const imageRef = ref<HTMLElement>()
const imageSrc = ref<string | undefined>()
const loadError = ref(false)
const isLoading = ref(true)
const previewVisible = ref(false)
const attr = useAttrs()
let observer: IntersectionObserver | null = null

const imgViewEl = ref<HTMLImageElement>()
const ns = useNamespace('image')
const elementPosition = reactive({
  first: { x: 0, y: 0, width: 0, height: 0 },
})
const previewInfo = reactive({
  transX: 0,
  transY: 0,
  scale: 0,
})
const isAnimating = ref(false)

const filteredAttrs = computed(() => {
  const {
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
  return clsx(`ol-image__fit-${props.fit}`, props.class)
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

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve()
  })
}

async function previewImage() {
  if (!props.preview || !imageRef.value)
    return

  const rect = imageRef.value.getBoundingClientRect()
  elementPosition.first = {
    x: rect.x,
    y: rect.y,
    width: rect.width,
    height: rect.height,
  }

  await preloadImage(props.src!)
  previewVisible.value = true
}

function onPreviewLoad() {
  if (!imgViewEl.value || !previewVisible.value)
    return

  const rect = imgViewEl.value.getBoundingClientRect()

  previewInfo.transX = elementPosition.first.x - rect.x
  previewInfo.transY = elementPosition.first.y - rect.y
  previewInfo.scale = elementPosition.first.width / rect.width

  imgViewEl.value.style.transformOrigin = '0 0'
  imgViewEl.value.style.transform = `translate3d(${previewInfo.transX}px, ${previewInfo.transY}px, 0) scale(${previewInfo.scale})`

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      imgViewEl.value!.style.transition = 'transform 0.3s ease-in-out'
      imgViewEl.value!.style.transform = 'translate3d(0, 0, 0) scale(1)'
    })
  })
}

function handleClosePreview() {
  if (!imgViewEl.value)
    return

  isAnimating.value = true

  const rect = imgViewEl.value.getBoundingClientRect()
  const transX = elementPosition.first.x - rect.x
  const transY = elementPosition.first.y - rect.y
  const scale = elementPosition.first.width / rect.width

  requestAnimationFrame(() => {
    imgViewEl.value!.style.transformOrigin = '0 0'
    imgViewEl.value!.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    imgViewEl.value!.style.transform = `translate3d(${transX}px, ${transY}px, 0) scale(${scale})`

    setTimeout(() => {
      previewVisible.value = false
      isAnimating.value = false
    }, 300)
  })
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
  <div ref="container" class="ol-image" v-bind="filteredAttrs">
    <div v-if="loadError" :class="clsx(props.class, ns.e('error'))">
      <slot name="error">
        <span>FAILED</span>
      </slot>
    </div>
    <template v-else>
      <div v-if="isLoading" :class="clsx(props.class, ns.e('load'))">
        <slot name="load">
          Loading...
        </slot>
      </div>
      <img
        v-if="imageSrc !== undefined && !previewVisible"
        ref="imageRef"
        :class="imgCls"
        :src="imageSrc"
        :alt="alt"
        @click="previewImage"
        @load="handleLoad"
        @error="handleError"
      >
      <Teleport v-if="previewVisible" to="body">
        <div :class="ns.em('preview', 'wrapper')" @click="handleClosePreview">
          <img
            ref="imgViewEl"
            :class="ns.e('preview')"
            :src="imageSrc"
            :alt="alt"
            @load="onPreviewLoad"
          >
        </div>
      </Teleport>
    </template>
  </div>
</template>
