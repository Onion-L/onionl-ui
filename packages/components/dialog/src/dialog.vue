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
  title?: string
  showClose?: boolean
}

const {
  show = false,
  mask = true,
  maskClickClose = true,
  showClose = true,
} = defineProps<DialogProps>()

const emits = defineEmits(['update:show', 'close', 'open'])

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
function closeByClick() {
  willClose.value = true
  beforeEnter().then(() => {
    close('closeByClick')
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
)
</script>

<template>
  <div v-show="isShow" class="ol-dialog">
    <div v-if="mask" class="ol-dialog-mask" :class="{ fadeOut: willClose }" @click.stop="maskClick" />
    <div class="ol-dialog-container" :style="modalStyle">
      <slot name="header">
        <div v-if="title || showClose" class="ol-dialog-header">
          <span>{{ title }}</span>
          <span v-if="showClose" class="ol-dialog-header-close" @click="closeByClick">×</span>
        </div>
      </slot>
      <slot />
      <div class="ol-dialog-footer">
        <slot name="footer" />
      </div>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
}

.ol-dialog-header,
.ol-dialog-footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 6px 12px;
  background-color: #fff;
  gap: 12px;
  margin: -1px;
}

.ol-dialog-footer {
  justify-content: flex-end;
}

.ol-dialog-footer:empty {
  display: none;
}

.ol-dialog-header-close {
  cursor: pointer;
  font-size: 20px;
  color: #909399;
}

.ol-dialog-header-close:hover {
  color: #303133;
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
