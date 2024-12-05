<script setup>
import { OlButton, OlInput } from 'onionl-ui'
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">
      link
    </h1>
    <OlButton size="lg" to="/to">
      Link
    </OlButton>
    <OlButton size="md" link>
      Link
    </OlButton>

    <h1>Icon</h1>
    <OlInput placeholder="Default Placeholder" />

    <OlInput suffix="i-mi-eye" placeholder="Default Placeholder" />

    <OlInput prefix="i-mi-search" placeholder="Search" />

    <OlInput type="password" placeholder="Enter your password" disabled />

    <OlButton link size="md" icon="i-mi-table" />
  </div>
</template>
