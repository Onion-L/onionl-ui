import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SwapItem from '../src/swapItem.vue'

describe('swapItem', () => {
  it('renders correctly', () => {
    const wrapper = mount(SwapItem)
    expect(wrapper.find('.ol-swap-item').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const customClass = 'custom-class'
    const wrapper = mount(SwapItem, {
      props: {
        class: customClass,
      },
    })
    expect(wrapper.classes()).toContain(customClass)
  })

  it('is draggable by default', () => {
    const wrapper = mount(SwapItem)
    expect(wrapper.attributes('draggable')).toBe('true')
  })

  it('renders slot content correctly', () => {
    const wrapper = mount(SwapItem, {
      slots: {
        default: 'Test Content',
      },
    })
    expect(wrapper.text()).toBe('Test Content')
  })
})
