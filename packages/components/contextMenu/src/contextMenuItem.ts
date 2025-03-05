import type { PropType } from 'vue'
import { CONTEXTMENU_EVENT } from '@onionl-ui/components/constant'
import { defineComponent, h, inject } from 'vue'

export default defineComponent({
  name: 'OlContextMenuItem',
  props: {
    click: {
      type: Function as PropType<() => void>,
      require: false,
    },
  },
  setup(props) {
    const contextMenu = inject<string | undefined>(CONTEXTMENU_EVENT, undefined)
    const handleClick = () => {
      if (props.click) {
        props.click()
      }
    }

    return { handleClick, contextMenu }
  },

  render() {
    const { handleClick, contextMenu } = this
    if (!contextMenu) {
      console.warn('ol-content-menu-item must be used as a sub component of ol-content-menu')
      return null
    }

    return h('li', { class: 'ol-context-menu-item', onClick: handleClick }, {
      default: () => this.$slots,
    })
  },
})
