<script lang="ts" setup>
import Dialog from '@onionl-ui/components/dialog/index.ts'
import { ref } from 'vue'

const show = ref(false)
const show1 = ref(false)
</script>

<template>
  <div style="display: flex;justify-content: space-between;">
    <button style="height: 100px;" @click="show = !show">
      show:{{ show }}
    </button>
    <button style="width: 300px;height: 300px;" @click="show1 = !show1">
      show1x:{{ show1 }}
    </button>
    <button style="height: 200px;" @click="show = !show">
      show3:{{ show }}
    </button>
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
