<script lang="ts" setup>
import type { RegisterStep } from './tour'
import { TOUR_STEP_EVENT } from '@onionl-ui/components/constant'
import { useNamespace } from '@onionl-ui/utils'
import { inject, onMounted, ref } from 'vue'

defineOptions({
  name: 'OlTourStep',
})

const props = defineProps({
  index: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})

const ns = useNamespace('tour-step')
const elementRef = ref()
const uniqueClass = ns.m(`${props.index}`)

const registerTourStep = inject(TOUR_STEP_EVENT, null) as RegisterStep

onMounted(() => {
  if (registerTourStep && elementRef.value) {
    elementRef.value.classList.add(uniqueClass)
    registerTourStep(
      Number(props.index),
      uniqueClass,
      props.title,
      props.description,
    )
  }
  else {
    console.warn('`OlTourStep` must be used nested within the `OlTourProvider` component')
  }
})
</script>

<template>
  <div v-if="registerTourStep" ref="elementRef" :class="$attrs.class">
    <slot />
  </div>
</template>
