<template>
  <div class="flex gap-4">
    <OlImage />
    <OlImage>
      <template #error>
        <OlIcon icon="i-mi-image" />
      </template>
    </OlImage>
  </div>
</template>
