import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import Swap from '../src/swap.vue'
import SwapItem from '../src/swapItem.vue'

describe('swap', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(Swap, {
      slots: {
        default: [
          '<ol-swap-item>Item 1</ol-swap-item>',
          '<ol-swap-item>Item 2</ol-swap-item>',
          '<ol-swap-item>Item 3</ol-swap-item>',
        ],
      },
      global: {
        components: {
          'ol-swap-item': SwapItem,
        },
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.find('.ol-swap').exists()).toBe(true)
    expect(wrapper.findAll('.ol-swap-item')).toHaveLength(3)
  })

  it('custom class', () => {
    const customClass = 'custom-class'
    const wrapper = mount(Swap, {
      props: {
        class: customClass,
      },
    })
    expect(wrapper.classes()).toContain(customClass)
  })

  it('adds dragging class on drag start', async () => {
    const firstItem = wrapper.find('.ol-swap-item')
    await firstItem.trigger('dragstart')

    await new Promise(resolve => setTimeout(resolve, 0))
    await nextTick()

    expect(firstItem.classes()).toContain('dragging')
  })

  it('removes dragging class on drag end', async () => {
    const firstItem = wrapper.find('.ol-swap-item')
    await firstItem.trigger('dragstart')
    await new Promise(resolve => setTimeout(resolve, 0))
    await nextTick()
    await firstItem.trigger('dragend')
    expect(firstItem.classes()).not.toContain('dragging')
  })

  it('swaps positions on drag', async () => {
    const items = wrapper.findAll('.ol-swap-item')
    const firstItem = items[0]
    const secondItem = items[1]

    await firstItem.trigger('dragstart')
    await secondItem.trigger('dragenter')

    const newItems = wrapper.findAll('.ol-swap-item')
    expect(newItems[1].text()).toBe('Item 1')
    expect(newItems[0].text()).toBe('Item 2')
  })
})
