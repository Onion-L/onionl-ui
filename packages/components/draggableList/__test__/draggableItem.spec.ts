import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import DraggableItem from '../src/draggableItem.vue'

describe('draggableItem', () => {
  it('renders correctly', () => {
    const wrapper = mount(DraggableItem)
    expect(wrapper.find('.ol-draggable-item').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const customClass = 'custom-class'
    const wrapper = mount(DraggableItem, {
      props: {
        class: customClass,
      },
    })
    expect(wrapper.classes()).toContain(customClass)
  })

  it('is draggable by default', () => {
    const wrapper = mount(DraggableItem)
    expect(wrapper.attributes('draggable')).toBe('true')
  })

  it('renders slot content correctly', () => {
    const wrapper = mount(DraggableItem, {
      slots: {
        default: 'Test Content',
      },
    })
    expect(wrapper.text()).toBe('Test Content')
  })
})
