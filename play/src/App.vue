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
    <OlInput mask="+86 000 0000 0000" placeholder="+86 123 1231 1231" />

    <OlInput suffix="i-mi-eye" placeholder="Default Placeholder" />

    <OlInput prefix="i-mi-search" placeholder="Search" />

    <OlInput type="password" placeholder="Enter your password" disabled />

    <OlButton link size="md" icon="i-mi-table" />
  </div>
</template>
