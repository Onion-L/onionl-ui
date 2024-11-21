<script setup>
import { OlButton } from 'onionl-ui'
</script>

<template>
  <div class="p-4 ">
    <h1 class="text-2xl font-bold">
      OL-UI Components
    </h1>
    <div class="mt-4">
      <h2>type</h2>
      <OlButton type="primary">
        primary
      </OlButton>
      <OlButton type="secondary">
        secondary
      </OlButton>
      <OlButton type="outline">
        outline
      </OlButton>
      <h2>size</h2>
      <!-- 这里放组件展示 -->
      <OlButton size="sm">
        small
      </OlButton>
      <OlButton size="md">
        medium
      </OlButton>

      <OlButton size="lg" type="outline">
        large
      </OlButton>

      <OlButton size="xl">
        XL
      </OlButton>

      <OlButton size="2xl">
        XXL
      </OlButton>

      <OlButton size="3xl">
        XXXL
      </OlButton>

      <OlButton size="10">
        custome
      </OlButton>
    </div>
  </div>
</template>
