import type { PropType } from 'vue'
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'OlContextMenuItem',
  props: {
    click: {
      type: Function as PropType<() => void>,
      require: false,
    },
  },
  setup(props) {
    const handleClick = () => {
      if (props.click) {
        props.click()
      }
    }

    return { handleClick }
  },

  render() {
    const { handleClick } = this

    return h('li', { class: 'ol-context-menu-item', onClick: handleClick }, {
      default: () => this.$slots,
    })
  },
})
