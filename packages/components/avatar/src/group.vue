<script lang="ts" setup>
import { AVATAR_GROUP_EVENT } from '@onionl-ui/components/constant'
import { useNamespace } from '@onionl-ui/utils'
import { provide } from 'vue'

provide(AVATAR_GROUP_EVENT, true)

const ns = useNamespace('avatar')
</script>

<template>
  <div :class="ns.b('group')">
    <slot />
  </div>
</template>

<style>

</style>
