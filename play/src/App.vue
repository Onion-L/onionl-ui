<script lang="ts" setup>
import { OlButton, OlDialog, OlDialogCard } from '@onionl-ui/components'
import { ref } from 'vue'

const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
</script>

<template>
  <div class="flex justify-between">
    <ol-button @click="show = !show">
      show:{{ show }}
    </ol-button>
    <ol-button @click="show1 = !show1">
      show1x:{{ show1 }}
    </ol-button>
    <ol-button @click="show2 = !show2">
      show3:{{ show2 }}
    </ol-button>
  </div>
  <OlDialog v-model:show="show" :coherent="true" :title="'标题'">
    <OlDialogCard class="w-120 min-w-80 shadow-lg rounded-lg overflow-hidden" @close="show = !show">
      <template #header>
        <div class="text-xl font-bold">
          Title for custom
        </div>
      </template>
      <template #content>
        <div class="p-4 text-gray-600 leading-6">
          Here is some content and the content is very long, and you can put everything you want here.
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end space-x-2">
          <OlButton type="secondary">
            Cancel
          </OlButton>
          <OlButton type="primary">
            Confirm
          </OlButton>
        </div>
      </template>
    </OlDialogCard>
  </OlDialog>
  <OlDialog v-model:show="show1" :coherent="true" :showClose="false">
    <OlDialogCard class="w-120 min-w-80 shadow-lg rounded-lg overflow-hidden" @close="show1 = !show1">
      <template #header>
        <div class="text-xl font-bold border-b border-gray-200">
          Title for custom
        </div>
      </template>
      <template #content>
        <div class="p-4 text-gray-600 leading-6">
          Here is some content and the content is very long, and you can put everything you want here.
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end space-x-2">
          <OlButton type="secondary">
            Cancel
          </OlButton>
          <OlButton type="primary">
            Confirm
          </OlButton>
        </div>
      </template>
    </OlDialogCard>
  </OlDialog>
  <OlDialog v-model:show="show2" :coherent="true">
    <OlDialogCard class="w-120 min-w-80 shadow-lg rounded-lg overflow-hidden" @close="show2 = !show2">
      <template #header>
        <div class="text-xl font-bold border-b border-gray-200">
          Title for custom
        </div>
      </template>
      <template #content>
        <div class="p-4 text-gray-600 leading-6">
          Here is some content and the content is very long, and you can put everything you want here.
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end space-x-2">
          <OlButton type="secondary">
            Cancel
          </OlButton>
          <OlButton type="primary">
            Confirm
          </OlButton>
        </div>
      </template>
    </OlDialogCard>
  </OlDialog>
</template>
