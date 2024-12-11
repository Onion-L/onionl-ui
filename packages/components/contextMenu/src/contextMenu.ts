import type { PropType } from 'vue'
import { onClickOutside, useEventListener } from '@vueuse/core'
import { defineComponent, h, nextTick, onMounted, ref } from 'vue'

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
    const clientX = ref<number | undefined>()
    const clientY = ref<number | undefined>()
    const showMenu = ref(false)
    let Ele: HTMLElement | Document

    const handleClickMenu = (e: MouseEvent) => {
      e.stopPropagation()
    }

    const handleShowMenu = (e: Event) => {
      e.preventDefault()
      const mouseEvent = e as MouseEvent
      showMenu.value = true
      clientX.value = mouseEvent.clientX
      clientY.value = mouseEvent.clientY
    }

    const handleClose = () => {
      props.beforeClose && props.beforeClose()
      if (showMenu) {
        showMenu.value = false
      }
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
      handleClickMenu,
    }
  },
  render() {
    const { clientX, clientY, showMenu, handleClickMenu } = this

    return showMenu
      ? h('div', { onClick: e => handleClickMenu(e), style: { left: `${clientX}px`, top: `${clientY}px` }, class: 'ol-context-menu' }, h('ul', { class: 'ol-context-menu__wrapper' }, {
        default: () => this.$slots,
      }))
      : null
  },
})
