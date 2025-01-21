<script setup lang="ts">
import type {
  CSSProperties,
} from 'vue'
import {
  defineProps,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue'

interface DialogProps {
  show: boolean
  mask?: boolean
  maskClickClose?: boolean
}

const {
  show = false,
  mask = true,
  maskClickClose = true,
} = defineProps<DialogProps>()

const emits = defineEmits(['update:show', 'close'])

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
function close(reason: string) {
  emits('close', reason)
  emits('update:show', false)
  willClose.value = false
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
      isShow.value = newVal
    })
  },
)
</script>

<template>
  <div v-show="isShow" class="ol-dialog">
    <div v-if="mask" class="ol-dialog-mask" :class="{ fadeOut: willClose }" @click.stop="maskClick" />
    <div class="ol-dialog-container" :style="modalStyle">
      <slot />
    </div>
  </div>
</template>

<style>
.ol-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s;
}

.fadeOut {
  animation: fadeOut 0.3s forwards;
}

.ol-dialog-container {
  transform-origin: 0 0;
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 100vh;
  max-width: 100vw;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ol-dialog .ol-dialog-container {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

.dialog-fly-enter-active .ol-dialog-container>* {
  height: 100% !important;
  width: 100% !important;
}

.ol-dialog-container>* {
  transition: 0.3s;
  box-sizing: border-box;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
