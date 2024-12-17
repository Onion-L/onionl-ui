import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Scrollbar from '../src/scrollbar.vue'

describe('scrollbar', () => {
  it('should render default slot', () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: '<div>test</div>',
      },
    })

    expect(wrapper.text()).toContain('test')
  })

  it('should set height', () => {
    const wrapper = mount(Scrollbar, {
      props: {
        height: '200px',
      },
    })

    expect(wrapper.attributes('style')).toContain('height: 200px')
  })

  it('should set snap class', () => {
    const wrapper = mount(Scrollbar, {
      props: {
        snap: 'both',
      },
    })

    expect(wrapper.classes()).toContain('ol-scrollbar__snap-both')
  })

  it('should contain base class', () => {
    const wrapper = mount(Scrollbar)
    expect(wrapper.classes()).toContain('ol-scrollbar')
  })
})
