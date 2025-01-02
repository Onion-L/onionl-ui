<script lang="ts" setup>
import { MODEL_VALUE_UPDATE } from '@onionl-ui/components/constant'
import { useNamespace } from '@onionl-ui/utils'
import { computed, ref } from 'vue'

defineOptions({
  name: 'OlSwitch',
})

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([MODEL_VALUE_UPDATE, 'change'])

const ns = useNamespace('switch')

const checked = ref(false)
function handleSwitch() {
  if (props.disabled)
    return
  checked.value = !checked.value
  emit(MODEL_VALUE_UPDATE, checked.value)
  emit('change', checked.value)
}

function handleKeyDown(e: KeyboardEvent) {
  e.preventDefault()
  if (e.key === 'Enter' || e.key === ' ')
    handleSwitch()
}

const switchCls = computed(() => [
  { [ns.e('checked')]: checked.value },
  { 'is-disabled': props.disabled },
  ns.namespace,
])

const switchStyle = computed(() => {
  return checked.value ? { transform: 'translateX(20px)' } : {}
})
</script>

<template>
  <div
    :class="switchCls"
    tabindex="0"
    @click="handleSwitch"
    @keydown="handleKeyDown"
  >
    <div
      :style="switchStyle"
      :class="ns.e('core')"
    />
  </div>
</template>

<style>

</style>
