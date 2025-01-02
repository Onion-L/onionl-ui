<script lang="ts" setup>
import { CHANGE_EVENT, CLICK_EVENT, MODEL_VALUE_UPDATE } from '@onionl-ui/components/constant'
import { useNamespace } from '@onionl-ui/utils'
import { computed, ref, watch } from 'vue'
import { SwitchEmits, SwitchProps } from './switch'

defineOptions({
  name: 'OlSwitch',
})

const props = defineProps(SwitchProps)
const emit = defineEmits(SwitchEmits)
const { beforeSwitch } = props
const ns = useNamespace('switch')
const isChecked = ref(props.checked)

watch(() => props.modelValue, (value) => {
  isChecked.value = value
})

const switchCls = computed(() => [
  { [ns.e('checked')]: isChecked.value },
  { [ns.disabled()]: props.disabled },
  ns.namespace,
  ns.m(props.size),
])

function handleSwitch() {
  if (props.disabled)
    return
  isChecked.value = !isChecked.value
  emit(MODEL_VALUE_UPDATE, isChecked.value)
  emit(CHANGE_EVENT, isChecked.value)
  emit(CLICK_EVENT, isChecked.value)
}

function handleKeyDown(e: KeyboardEvent) {
  e.preventDefault()
  if (e.key === 'Enter' || e.key === ' ')
    handleSwitch()
}

async function handleClick() {
  if (!beforeSwitch) {
    handleSwitch()
  }
  else {
    await beforeSwitch()
    handleSwitch()
  }
}
</script>

<template>
  <div
    :class="switchCls"
    tabindex="0"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <div
      :class="[
        ns.e('core'),
        ns.em('core', size),
        { [ns.em('core', `${size}-checked`)]: isChecked },
      ]"
    />
  </div>
</template>

<style>

</style>
