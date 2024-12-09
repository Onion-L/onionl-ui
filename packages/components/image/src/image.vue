<script lang="ts" setup>
import type { ImageProps } from './image'
import clsx from 'clsx'
import { computed, ref, useAttrs, watch } from 'vue'

defineOptions({
  name: 'OlImage',
})

const props = defineProps<ImageProps>()
const container = ref<HTMLElement>()
const imageSrc = ref<string | undefined>()
const loadError = ref(false)
const isLoading = ref(true)
const attr = useAttrs()

function loadImage() {
  imageSrc.value = props.src
  isLoading.value = false
}

const filteredAttrs = computed(() => {
  const { style, ...rest } = attr
  return rest
})
const whCls = ref<string | undefined>()

watch(() => props.src, () => {
  loadImage()
}, { immediate: true })

const imgCls = computed(() => {
  return clsx(whCls.value, `ol-image__fit-${props.fit}`)
})

function handleError() {
  loadError.value = true
}

function handleLoad() {
  isLoading.value = false
}
</script>

<template>
  <div ref="container" v-bind="filteredAttrs">
    <slot v-if="loadError">
      <div class="w-full h-full bg-gray-300 flex justify-center items-center">
        {{ 'error' }}
      </div>
    </slot>
    <template v-else>
      <img
        v-bind="attr"
        :class="imgCls"
        :src="imageSrc"
        :alt="alt"
        loading="lazy"
        @load="handleLoad"
        @error="handleError"
      >
    </template>
  </div>
</template>
