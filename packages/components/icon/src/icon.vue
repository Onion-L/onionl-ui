<script lang="ts" setup>
defineOptions({
  name: 'OlIcon',
})

defineProps<{
  icon?: string
}>()
</script>

<template>
  <span :class="icon" />
</template>
