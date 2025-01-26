<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { DialogProps } from './dialog'
import { useNamespace } from '@onionl-ui/utils'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const {
  show = false,
  mask = true,
  maskClickClose = true,
} = defineProps<DialogProps>()

const emits = defineEmits(['update:show', 'close', 'open'])

const ns = useNamespace('dialog')
const modalStyle = ref<CSSProperties>()
const targetRect = ref<DOMRect>()
const isShow = ref(show)
const willClose = ref(false)
const duration = 300

function maskClick() {
  if (!maskClickClose)
    return
  willClose.value = true
  beforeEnter().then(() => {
    close('maskClick')
  })
}

function closeByCustom() {
  willClose.value = true
  beforeEnter().then(() => {
    close('closeByCustom')
  })
}

function close(reason: string) {
  emits('close', reason)
  emits('update:show', false)
  willClose.value = false
  isShow.value = false
}

function open() {
  isShow.value = true
  emits('open')
}

function beforeEnter(incomDuration = 0) {
  const rect = targetRect.value
  if (!rect)
    return Promise.resolve()
  const startX = rect.left
  const startY = rect.top
  modalStyle.value = {
    position: 'fixed',
    top: `${startY}px`,
    left: `${startX}px`,
    transform: 'translate(0, 0) scale(0.2)',
    opacity: 0,
  }
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, incomDuration || duration)
  })
}

function onEnter() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modalStyle.value = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: 1,
      }
    })
  })
}

function handleGlobalClick(event: MouseEvent) {
  if (isShow.value || !show)
    return
  const clickTarget = event.target as Element
  targetRect.value = clickTarget.getBoundingClientRect()
  if (show) {
    beforeEnter()
    onEnter()
  }
}

onMounted(() => {
  window.removeEventListener('click', handleGlobalClick)
  window.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
  window.removeEventListener('click', handleGlobalClick)
})

watch(
  () => show,
  (newVal) => {
    requestAnimationFrame(() => {
      if (!newVal) {
        closeByCustom()
      }
      else {
        open()
      }
    })
  },
  { immediate: true },
)
</script>

<template>
  <div v-show="isShow" :class="ns.namespace">
    <div v-if="mask" :class="[{ [ns.m('fade-out')]: willClose }, ns.e('mask')]" @click.stop="maskClick" />
    <div :class="[ns.e('container'), ns.em('container', 'transition')]" :style="modalStyle">
      <slot />
    </div>
  </div>
</template>

<style>
.ol-dialog__mask {
  animation: dialog-fade-in 0.3s;
}

.dialog-fly-enter-active .ol-dialog__container>* {
  height: 100% !important;
  width: 100% !important;
}

.ol-dialog__container>* {
  transition: 0.3s;
  box-sizing: border-box;
}

.ol-dialog--fade-out {
  animation: dialog-fade-out 0.3s forwards;
}

@keyframes dialog-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
