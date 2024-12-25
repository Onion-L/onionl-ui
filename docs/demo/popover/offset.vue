<template>
  <ol-popover trigger="click" placement="right" :offset="480">
    <template #trigger>
      <ol-button>
        Offset
      </ol-button>
    </template>
    <ol-card class="border-none">
      <ol-card-header class="flex flex-col gap-2 p-1">
        <p class="!m-0 text-sm dark:text-gray-300 text-gray-600">
          我走了
        </p>
      </ol-card-header>
    </ol-card>
  </ol-popover>
</template>
