<script lang="ts" setup>
import { OlButton, OlCard, OlCardContent, OlCardFooter, OlCardHeader } from '@onionl-ui/components'

defineOptions({
  name: 'OlDialogCard',
})

const emit = defineEmits(['close'])

function handleClose() {
  emit('close')
}
</script>

<template>
  <div class="relative">
    <OlButton icon="i-mi-close" link class="color-gray-500 hover:color-primary text-xl absolute top-2 right-2" @click="handleClose" />
    <OlCard class="bg-white dark:bg-[#1f1f1f]">
      <OlCardHeader>
        <slot name="header" />
      </OlCardHeader>
      <OlCardContent>
        <slot name="content" />
      </OlCardContent>
      <OlCardFooter>
        <slot name="footer" />
      </OlCardFooter>
    </OlCard>
  </div>
</template>
