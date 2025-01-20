import type { PropType } from 'vue'
import { onClickOutside, useElementSize, useEventListener } from '@vueuse/core'
import { defineComponent, h, nextTick, onMounted, provide, ref, watch } from 'vue'

const ContextMenuProps = {
  target: {
    type: [HTMLElement, Document],
    default: document,
  },
  beforeClose: {
    type: Function as PropType<() => void>,
    require: false,
  },
}

export default defineComponent({
  name: 'OlContextMenu',
  props: ContextMenuProps,
  setup(props) {
    const clientX = ref(0)
    const clientY = ref(0)
    const showMenu = ref(false)
    const menuEl = ref(null)
    let Ele: HTMLElement | Document

    provide('contextMenu', 'this')

    const handleClickMenu = (e: MouseEvent) => {
      e.stopPropagation()
    }

    const handleClose = () => {
      props.beforeClose && props.beforeClose()
      if (showMenu) {
        showMenu.value = false
        menuEl.value = null
      }
    }

    const handleShowMenu = (e: Event) => {
      handleClose()
      e.preventDefault()
      const mouseEvent = e as MouseEvent
      showMenu.value = true
      clientX.value = mouseEvent.clientX
      clientY.value = mouseEvent.clientY
    }

    const eventListeners = {
      click: handleClose,
      contextmenu: handleShowMenu,
    }

    const addEventListener = () => {
      Object.entries(eventListeners).forEach(([event, listener]) => {
        useEventListener(Ele, event, listener)
      })
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!Ele || !Ele.contains(event.target as HTMLElement)) {
        handleClose()
      }
    }

    useEventListener(document, 'contextmenu', handleClickOutside)
    useEventListener(document, 'scroll', handleClose)

    watch(menuEl, () => {
      if (!menuEl.value)
        return
      const { width, height } = useElementSize(menuEl)
      if (clientX.value + width.value > window.innerWidth) {
        clientX.value = clientX.value - width.value
      }
      if (clientY.value + height.value > window.innerHeight) {
        clientY.value = clientY.value - height.value
      }
    })

    onMounted(async () => {
      await nextTick()
      Ele = props.target || document
      addEventListener()
      if (Ele instanceof HTMLElement)
        onClickOutside(Ele, handleClose)
    })

    return {
      clientX,
      clientY,
      showMenu,
      menuEl,
      handleClickMenu,
    }
  },
  render() {
    const { clientX, clientY, showMenu, handleClickMenu } = this

    return showMenu
      ? h('div', {
        onClick: e => handleClickMenu(e),
        style: { left: `${clientX}px`, top: `${clientY}px` },
        ref: 'menuEl',
        class: 'ol-context-menu',
      }, h('ul', { class: 'ol-context-menu__wrapper' }, {
        default: () => this.$slots,
      }))
      : null
  },
})
