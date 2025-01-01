<template>
  <div class="flex flex-col p-x-5 p-y-3 gap-4">
    <div class="flex gap-2 justify-center items-center">
      <ol-tooltip content="Hello, I'm at the top" placement="top-start" trigger="hover">
        <ol-button type="primary">
          Top Start
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, I'm at the top" placement="top" trigger="hover">
        <ol-button type="primary">
          Top
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, I'm at the top" placement="top-end" trigger="hover">
        <ol-button type="primary">
          Top End
        </ol-button>
      </ol-tooltip>
    </div>
    <div class="flex justify-around items-center">
      <ol-tooltip content="Hello, I'm on the left" placement="left-start" trigger="hover">
        <ol-button type="primary">
          Left Start
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, I'm on the right" placement="right-start" trigger="hover">
        <ol-button type="primary">
          Right Start
        </ol-button>
      </ol-tooltip>
    </div>
    <div class="flex justify-around items-center">
      <ol-tooltip content="Hello, I'm on the left" placement="left" trigger="hover">
        <ol-button type="primary">
          Left Center
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, I'm on the right" placement="right" trigger="hover">
        <ol-button type="primary">
          Right Center
        </ol-button>
      </ol-tooltip>
    </div>

    <div class="flex justify-around items-center">
      <ol-tooltip content="Hello, I'm on the left" placement="left-end" trigger="hover">
        <ol-button type="primary">
          Left End
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, I'm on the right" placement="right-end" trigger="hover">
        <ol-button type="primary">
          Right End
        </ol-button>
      </ol-tooltip>
    </div>
    <div class="flex gap-2 justify-center items-center">
      <ol-tooltip content="Hello, I'm at the bottom" placement="bottom-start" trigger="hover">
        <ol-button type="primary">
          Bottom Start
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, I'm at the bottom" placement="bottom" trigger="hover">
        <ol-button type="primary">
          Bottom
        </ol-button>
      </ol-tooltip>
      <ol-tooltip content="Hello, I'm at the bottom" placement="bottom-end" trigger="hover">
        <ol-button type="primary">
          Bottom End
        </ol-button>
      </ol-tooltip>
    </div>
  </div>
</template>
