<script lang="ts" setup>
import Dialog from '@onionl-ui/components/dialog/index.ts'
import { ref } from 'vue'

const show = ref(false)
const show1 = ref(false)
</script>

<template>
  <div style="display: flex;justify-content: space-between;">
    <button @click="show = !show" style="height: 100px;">show:{{ show }}</button>
    <button @click="show1 = !show1" style="width: 300px;height: 300px;">show1x:{{ show1 }}</button>
    <button @click="show = !show" style="height: 200px;">show3:{{ show }}</button>
  </div>
  <Dialog v-model:show="show" :coherent="true">
    <div style="background-color: #fff; padding: 20px 120px;">
      111
    </div>
  </Dialog>
  <Dialog v-model:show="show1" :coherent="true">
    <div style="background-color: #fff; padding: 20px 120px;">
      111
    </div>
  </Dialog>
</template>

<style></style>
