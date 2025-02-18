<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
</script>

<template>
  <div class="flex justify-between">
    <ol-button @click="show = !show">
      Left:{{ show }}
    </ol-button>
    <ol-button @click="show1 = !show1">
      Center:{{ show1 }}
    </ol-button>
    <ol-button @click="show2 = !show2">
      Right:{{ show2 }}
    </ol-button>
  </div>
  <ol-dialog v-model:show="show">
    <ol-dialog-card class="w-120 min-w-80 shadow-lg rounded-lg overflow-hidden" @close="show = !show">
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
          <ol-button type="secondary">
            Cancel
          </ol-button>
          <ol-button type="primary">
            Confirm
          </ol-button>
        </div>
      </template>
    </ol-dialog-card>
  </ol-dialog>
  <ol-dialog v-model:show="show1">
    <ol-dialog-card class="w-120 min-w-80 shadow-lg rounded-lg overflow-hidden" @close="show1 = !show1">
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
          <ol-button type="secondary">
            Cancel
          </ol-button>
          <ol-button type="primary">
            Confirm
          </ol-button>
        </div>
      </template>
    </ol-dialog-card>
  </ol-dialog>
  <ol-dialog v-model:show="show2">
    <ol-dialog-card class="w-120 min-w-80 shadow-lg rounded-lg overflow-hidden" @close="show2 = !show2">
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
          <ol-button type="secondary">
            Cancel
          </ol-button>
          <ol-button type="primary">
            Confirm
          </ol-button>
        </div>
      </template>
    </ol-dialog-card>
  </ol-dialog>
</template>
