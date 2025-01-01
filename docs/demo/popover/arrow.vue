<template>
  <ol-popover trigger="click" placement="right" :arrow="false">
    <template #trigger>
      <ol-button>
        Click Me
      </ol-button>
    </template>
    <ol-card class="border-none">
      <ol-card-header class="flex flex-col gap-2 p-1">
        <p class="!m-0 text-sm dark:text-gray-300 text-gray-600">
          Who saw my arrow?
        </p>
      </ol-card-header>
    </ol-card>
  </ol-popover>
</template>
