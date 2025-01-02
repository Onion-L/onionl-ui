<script lang="ts" setup>
function handleBeforeSwitch(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
}
</script>

<template>
  <ol-switch :before-switch="handleBeforeSwitch" />
</template>
