<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <div class="flex gap-2">
    <ol-popover trigger="hover">
      <template #trigger>
        <ol-button>
          Hover
        </ol-button>
      </template>
      <ol-card class="border-none">
        <ol-card-header class="flex flex-col gap-2 p-1">
          <h4 class="!m-0">
            Buzz Lightyear
          </h4>
          <p class="!m-0 text-sm dark:text-gray-300 text-gray-600">
            To infinity and beyond🚀
          </p>
        </ol-card-header>
      </ol-card>
    </ol-popover>
    <ol-popover trigger="click">
      <template #trigger>
        <ol-button>
          Click
        </ol-button>
      </template>
      <ol-card class="border-none">
        <ol-card-header class="flex flex-col gap-2 p-1">
          <h4 class="!m-0">
            Buzz Lightyear
          </h4>
          <p class="!m-0 text-sm dark:text-gray-300 text-gray-600">
            To infinity and beyond🚀
          </p>
        </ol-card-header>
      </ol-card>
    </ol-popover>
    <ol-popover trigger="manual" :show="show">
      <template #trigger>
        <ol-button @click="show = !show">
          Manual
        </ol-button>
      </template>
      <ol-card class="border-none">
        <ol-card-header class="flex flex-col gap-2 p-1">
          <h4 class="!m-0">
            Buzz Lightyear
          </h4>
          <p class="!m-0 text-sm dark:text-gray-300 text-gray-600">
            To infinity and beyond🚀
          </p>
        </ol-card-header>
        <ol-card-footer class="space-x-2 p-1">
          <ol-button type="primary" @click="show = false">
            confirm
          </ol-button>
          <ol-button type="secondary" @click="show = false">
            Close
          </ol-button>
        </ol-card-footer>
      </ol-card>
    </ol-popover>
  </div>
</template>
