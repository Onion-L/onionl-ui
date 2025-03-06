<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'

defineOptions({
  name: 'OlCard',
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { namespace } = useNamespace('card')
</script>

<template>
  <div :class="clsx(namespace, props.class)">
    <slot />
  </div>
</template>

<style>

</style>
