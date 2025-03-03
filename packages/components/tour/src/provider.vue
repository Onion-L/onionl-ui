<script lang="ts" setup>
import type { DriveStep } from 'driver.js'
import type { DriverObj, TourSteps } from './tour'
import { TOUR_STEP_EVENT } from '@onionl-ui/components/constant'
import { driver } from 'driver.js'
import { provide, ref, watch } from 'vue'
import 'driver.js/dist/driver.css'

defineOptions({
  name: 'OlTourProvider',
})

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:active'])

const provider = ref<HTMLElement | null>(null)
const tourSteps = ref<TourSteps[]>([])

provide(TOUR_STEP_EVENT, (index: number | string, element: string, title: string, description: string) => {
  tourSteps.value.push({
    index,
    element,
    title,
    description,
  })
  tourSteps.value.sort((a, b) => Number(a.index) - Number(b.index))
})

let driverObj: DriverObj = null

function initDriver() {
  if (tourSteps.value.length === 0)
    return

  const steps: DriveStep[] = tourSteps.value.map(step => ({
    element: `.${step.element}`,
    popover: {
      title: step.title,
      description: step.description,
    },
  }))

  driverObj = driver({
    showProgress: true,
    steps,
    onDestroyed: onTourFinish,
  })
}

watch(
  () => props.active,
  (newVal) => {
    if (newVal) {
      if (!driverObj)
        initDriver()
      driverObj?.drive()
    }
  },
)

watch(
  () => tourSteps.value,
  () => {
    driverObj = null
    initDriver()
  },
  { deep: true },
)

function onTourFinish() {
  emit('update:active', false)
}
</script>

<template>
  <div ref="provider">
    <slot />
  </div>
</template>
