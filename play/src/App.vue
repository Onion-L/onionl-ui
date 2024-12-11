<script setup>
import { OlContextMenu, OlContextMenuItem } from 'onionl-ui'

// const isVisible = ref(false)
// const clientX = ref(0)
// const clientY = ref(0)

// const contextMenuRef = ref()

// window.addEventListener('contextmenu', (e) => {
//   e.preventDefault()
//   console.log('contextmenu')
//   console.log(e.clientX, e.clientY)
//   isVisible.value = true

//   nextTick(() => {
//     clientY.value = e.clientX
//     clientY.value = e.clientY
//     contextMenuRef.value.style.left = e.clientX
//     console.log(contextMenuRef.value.style.left)
//   })
// })

// window.addEventListener('click', () => {
//   clientY.value = 100
//   console.log('click', clientX.value)
//   isVisible.value = false
// })
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold color-white">
      Context Menu
    </h1>
    <OlContextMenu>
      <OlContextMenuItem>label</OlContextMenuItem>
    </OlContextMenu>

    <div class="fixed min-w-100px min-h-2 bg-white border-1 border-solid border-gray-300 rounded-md shadow-lg">
      <ul class=" list-none p-0 m-y-2">
        <li
          class="cursor-pointer py-2 text-left flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors duration-150"
        >
          <span>label</span>
        </li>
      </ul>
    </div>
  </div>
</template>
