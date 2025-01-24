<script lang="ts" setup>
import OlButton from '@onionl-ui/components/button/index.ts'
import OlDialog from '@onionl-ui/components/dialog/index.ts'
import { ref } from 'vue'

const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
</script>

<template>
  <div style="display: flex;justify-content: space-between;">
    <button style="height: 100px;" @click="show = !show">
      show:{{ show }}
    </button>
    <button style="width: 300px;height: 300px;" @click="show1 = !show1">
      show1x:{{ show1 }}
    </button>
    <button style="height: 200px;" @click="show2 = !show2">
      show3:{{ show2 }}
    </button>
  </div>
  <OlDialog v-model:show="show" :coherent="true" :title="'标题'">
    <div style="background-color: #fff; padding: 20px 120px;">
      传入 title
    </div>
  </OlDialog>
  <OlDialog v-model:show="show1" :coherent="true" :showClose="false">
    <div style="background-color: #fff; padding: 20px 120px;">
      无关闭按钮、无标题、无页脚
    </div>
    <template #header>
      <div style="display: flex; justify-content: space-between; width: 100%;background: red;">
        <span>自定义Header</span>
        <span @click="show1 = false">X</span>
      </div>
    </template>
  </OlDialog>
  <OlDialog v-model:show="show2" :coherent="true">
    <div style="background-color: #fff; padding: 20px 120px;">
      带关闭按钮
    </div>
    <template #footer>
      <span>自定义footer</span>
      <OlButton @click="show2 = false">
        取消
      </OlButton>
      <OlButton @click="show2 = false">
        确认
      </OlButton>
    </template>
  </OlDialog>
</template>

<style></style>
