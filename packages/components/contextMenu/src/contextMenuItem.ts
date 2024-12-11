import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'OlContextMenuItem',
  props: {},
  setup() {

  },

  render() {
    return h('li', { class: 'ol-context-menu-item' }, {
      default: () => this.$slots,
    })
  },
})
