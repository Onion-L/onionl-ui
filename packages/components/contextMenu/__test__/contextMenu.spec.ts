import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import OlContextMenu from '../src/contextMenu.ts'

describe('olContextMenu', () => {
  let targetElement: HTMLElement

  beforeEach(() => {
    targetElement = document.createElement('div')
    document.body.appendChild(targetElement)
  })

  afterEach(() => {
    if (targetElement && targetElement.parentNode) {
      targetElement.parentNode.removeChild(targetElement)
    }
  })

  it('should not show menu by default', async () => {
    const wrapper = mount(OlContextMenu, {
      props: {
        target: targetElement,
      },
      slots: {
        default: '<li>Test Item</li>',
      },
    })

    expect(wrapper.find('.ol-context-menu').exists()).toBe(false)
  })

  it('should show menu on contextmenu event', async () => {
    const wrapper = mount(OlContextMenu, {
      props: {
        target: targetElement,
      },
      slots: {
        default: '<li>Test Item</li>',
      },
    })

    expect(wrapper.props().target).toBe(targetElement)

    await flushPromises()
    await wrapper.vm.$nextTick()

    const contextMenuEvent = new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true,
      clientX: 100,
      clientY: 200,
    })
    targetElement.dispatchEvent(contextMenuEvent)

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.ol-context-menu').exists()).toBe(true)
  })

  it('should close menu when clicking outside', async () => {
    const wrapper = mount(OlContextMenu, {
      props: {
        target: targetElement,
      },
      slots: {
        default: '<li>Test Item</li>',
      },
    })

    targetElement.dispatchEvent(new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true,
      clientX: 100,
      clientY: 200,
    }))

    await flushPromises()
    await wrapper.vm.$nextTick()

    document.body.click()
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.ol-context-menu').exists()).toBe(false)
  })

  it('should close menu when right clicking outside', async () => {
    const wrapper = mount(OlContextMenu, {
      props: {
        target: targetElement,
      },
      slots: {
        default: '<li>Test Item</li>',
      },
    })

    targetElement.dispatchEvent(new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true,
      clientX: 100,
      clientY: 200,
    }))

    await flushPromises()
    await wrapper.vm.$nextTick()

    document.body.dispatchEvent(new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true,
      clientX: 300,
      clientY: 400,
    }))

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.ol-context-menu').exists()).toBe(false)
  })
})
