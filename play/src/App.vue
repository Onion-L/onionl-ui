<script lang="ts" setup>
import { OlButton, OlTooltip } from '@onionl-ui/components'
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div class="flex flex-col w-180 h-80 p-x-5 p-y-3 gap-4">
      <div class="flex gap-2 justify-center items-center">
        <ol-tooltip content="hello" placement="top-start" trigger="hover">
          <ol-button type="outline">
            Top Start
          </ol-button>
        </ol-tooltip>
        <ol-tooltip content="hello" placement="top" trigger="hover">
          <ol-button type="outline">
            Top
          </ol-button>
        </ol-tooltip>
        <ol-tooltip content="hello" placement="top-end" trigger="hover">
          <ol-button type="outline">
            Top End
          </ol-button>
        </ol-tooltip>
      </div>
      <div class="flex justify-around items-center">
        <ol-tooltip content="hello" placement="left-start" trigger="hover">
          <ol-button type="outline">
            left Start
          </ol-button>
        </ol-tooltip>
        <ol-tooltip content="hello" placement="right-start" trigger="hover">
          <ol-button type="outline">
            Right Start
          </ol-button>
        </ol-tooltip>
      </div>
      <div class="flex justify-around items-center">
        <ol-tooltip content="hello" placement="left" trigger="hover">
          <ol-button type="outline">
            left Center
          </ol-button>
        </ol-tooltip>
        <ol-tooltip content="hello" placement="right" trigger="hover">
          <ol-button type="outline">
            Right Center
          </ol-button>
        </ol-tooltip>
      </div>

      <div class="flex justify-around items-center">
        <ol-tooltip content="hello" placement="left-end" trigger="hover">
          <ol-button type="outline">
            left End
          </ol-button>
        </ol-tooltip>
        <ol-tooltip content="hello" placement="right-end" trigger="hover">
          <ol-button type="outline">
            Right End
          </ol-button>
        </ol-tooltip>
      </div>
      <div class="flex gap-2 justify-center items-center">
        <ol-tooltip content="hello" placement="bottom-start" trigger="hover">
          <ol-button type="outline">
            Bottom Start
          </ol-button>
        </ol-tooltip>
        <ol-tooltip content="hello" placement="bottom" trigger="hover">
          <ol-button type="outline">
            Bottom
          </ol-button>
        </ol-tooltip>
        <ol-tooltip content="hello" placement="bottom-end" trigger="hover">
          <ol-button type="outline">
            Bottom End
          </ol-button>
        </ol-tooltip>
      </div>
    </div>
  </div>
</template>
