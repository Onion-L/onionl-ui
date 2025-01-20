import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import Dialog from '../src/dialog.vue'

describe('dialog.vue', () => {
  it('renders dialog correctly when show is true', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
      },
      slots: {
        default: '<div class="test-content">测试内容</div>',
      },
    })

    expect(wrapper.find('.ol-dialog').isVisible()).toBe(true)
    expect(wrapper.find('.ol-dialog-mask').exists()).toBe(true)
    expect(wrapper.find('.test-content').exists()).toBe(true)
  })

  it('emits update:show and close events when mask is clicked', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
      },
    })

    await wrapper.find('.ol-dialog-mask').trigger('click')

    expect(wrapper.emitted('update:show')?.[0]).toEqual([false])
    expect(wrapper.emitted('close')?.[0]).toEqual(['maskClick'])
  })

  it('updates isShow when show prop changes', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: false,
      },
    })

    await wrapper.setProps({ show: true })
    await new Promise(resolve => requestAnimationFrame(resolve))
    await nextTick()

    expect(wrapper.find('.ol-dialog').isVisible()).toBe(true)
  })

  it('removes event listener on unmount', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
      },
    })

    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    wrapper.unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function))
  })
})
