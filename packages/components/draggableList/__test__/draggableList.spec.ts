import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import DraggableItem from '../src/draggableItem.vue'
import DraggableList from '../src/draggableList.vue'

describe('draggableList', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(DraggableList, {
      slots: {
        default: [
          '<ol-draggable-item>Item 1</ol-draggable-item>',
          '<ol-draggable-item>Item 2</ol-draggable-item>',
          '<ol-draggable-item>Item 3</ol-draggable-item>',
        ],
      },
      global: {
        components: {
          'ol-draggable-item': DraggableItem,
        },
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.find('.ol-draggable-list').exists()).toBe(true)
    expect(wrapper.findAll('.ol-draggable-item')).toHaveLength(3)
  })

  it('custom class', () => {
    const customClass = 'custom-class'
    const wrapper = mount(DraggableList, {
      props: {
        class: customClass,
      },
    })
    expect(wrapper.classes()).toContain(customClass)
  })

  it('adds dragging class on drag start', async () => {
    const firstItem = wrapper.find('.ol-draggable-item')
    await firstItem.trigger('dragstart')

    await new Promise(resolve => setTimeout(resolve, 0))
    await nextTick()

    expect(firstItem.classes()).toContain('dragging')
  })

  it('removes dragging class on drag end', async () => {
    const firstItem = wrapper.find('.ol-draggable-item')
    await firstItem.trigger('dragstart')
    await new Promise(resolve => setTimeout(resolve, 0))
    await nextTick()
    await firstItem.trigger('dragend')
    expect(firstItem.classes()).not.toContain('dragging')
  })

  it('swaps positions on drag', async () => {
    const items = wrapper.findAll('.ol-draggable-item')
    const firstItem = items[0]
    const secondItem = items[1]

    await firstItem.trigger('dragstart')
    await secondItem.trigger('dragenter')

    const newItems = wrapper.findAll('.ol-draggable-item')
    expect(newItems[1].text()).toBe('Item 1')
    expect(newItems[0].text()).toBe('Item 2')
  })
})
