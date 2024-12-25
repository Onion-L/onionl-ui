<template>
  <div class="flex flex-col p-x-5 p-y-3 gap-4">
    <div class="flex gap-2 justify-center items-center">
      <ol-tooltip content="Hello, 我在顶部" placement="top-start" trigger="hover">
        <ol-button type="primary">
          Top Start
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, 我在顶部" placement="top" trigger="hover">
        <ol-button type="primary">
          Top
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, 我在顶部" placement="top-end" trigger="hover">
        <ol-button type="primary">
          Top End
        </ol-button>
      </ol-tooltip>
    </div>
    <div class="flex justify-around items-center">
      <ol-tooltip content="Hello, 我在左边" placement="left-start" trigger="hover">
        <ol-button type="primary">
          left Start
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, 我在右边" placement="right-start" trigger="hover">
        <ol-button type="primary">
          Right Start
        </ol-button>
      </ol-tooltip>
    </div>
    <div class="flex justify-around items-center">
      <ol-tooltip content="Hello, 我在左边" placement="left" trigger="hover">
        <ol-button type="primary">
          left Center
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, 我在右边" placement="right" trigger="hover">
        <ol-button type="primary">
          Right Center
        </ol-button>
      </ol-tooltip>
    </div>

    <div class="flex justify-around items-center">
      <ol-tooltip content="Hello, 我在左边" placement="left-end" trigger="hover">
        <ol-button type="primary">
          left End
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, 我在右边" placement="right-end" trigger="hover">
        <ol-button type="primary">
          Right End
        </ol-button>
      </ol-tooltip>
    </div>
    <div class="flex gap-2 justify-center items-center">
      <ol-tooltip content="Hello, 我在底部" placement="bottom-start" trigger="hover">
        <ol-button type="primary">
          Bottom Start
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, 我在底部" placement="bottom" trigger="hover">
        <ol-button type="primary">
          Bottom
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, 我在底部" placement="bottom-end" trigger="hover">
        <ol-button type="primary">
          Bottom End
        </ol-button>
      </ol-tooltip>
    </div>
  </div>
</template>
