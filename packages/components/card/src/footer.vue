<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'

defineOptions({
  name: 'OlCardFooter',
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const ns = useNamespace('card')
</script>

<template>
  <div :class="clsx(ns.b('footer'), props.class)">
    <slot />
  </div>
</template>

<style>

</style>
