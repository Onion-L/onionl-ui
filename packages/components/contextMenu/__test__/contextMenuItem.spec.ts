import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import OlContextMenu from '../src/contextMenu.ts'
import OlContextMenuItem from '../src/contextMenuItem.ts'

describe('olContextMenuItem', () => {
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

  it('renders correctly when used within a context menu', async () => {
    const wrapper = mount(OlContextMenu, {
      props: {
        target: targetElement,
      },
      slots: {
        default: `<OlContextMenuItem>
  <li>Test Item</li>
</OlContextMenuItem>`,
      },
      global: {
        components: {
          OlContextMenuItem,
        },
      },
    })

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

    expect(wrapper.find('.ol-context-menu-item').exists()).toBe(true)
  })

  it('does not render and warns when used outside of a context menu', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})

    const wrapper = mount(OlContextMenuItem, {
      props: {
        click: vi.fn(),
      },
      slots: {
        default: '<span>Test Item</span>',
      },
    })

    await flushPromises()

    expect(wrapper.find('.ol-context-menu-item').exists()).toBe(false)
    expect(console.warn).toHaveBeenCalledWith(
      'ol-content-menu-item must be used as a sub component of ol-content-menu',
    )

    vi.restoreAllMocks()
  })
})
