import { useEventListener } from '@vueuse/core'
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
  name: 'OlContextMenu',
  props: {},
  setup() {
    const clientX = ref<number | undefined>()
    const clientY = ref<number | undefined>()
    const showMenu = ref(false)

    useEventListener(document, 'contextmenu', (e: MouseEvent) => {
      e.preventDefault()
      showMenu.value = true
      clientX.value = e.clientX
      clientY.value = e.clientY
    })

    useEventListener(document, 'click', (e: MouseEvent) => {
      e.preventDefault()
      showMenu.value = false
    })

    const handleClickMenu = (e: MouseEvent) => {
      e.stopPropagation()
    }

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
