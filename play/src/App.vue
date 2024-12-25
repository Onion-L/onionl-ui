<script lang="ts" setup>
import { OlButton, OlTooltip } from '@onionl-ui/components'
</script>

<template>
  <div class="flex gap-2 justify-center items-center">
    <ol-tooltip :offset="10" :arrow="false" trigger="click" content="To infinity and beyond🚀">
      <ol-button>Click 触发</ol-button>
    </ol-tooltip>
  </div>
</template>
