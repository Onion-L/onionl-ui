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
    expect(wrapper.find('.ol-dialog__mask').exists()).toBe(true)
    expect(wrapper.find('.test-content').exists()).toBe(true)
  })

  it('emits update:show and close events when mask is clicked', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
        maskClickClose: true,
      },
    })

    await wrapper.find('.ol-dialog__mask').trigger('click')
    await nextTick()

    expect(wrapper.emitted('update:show')?.[0]).toEqual([false])
    expect(wrapper.emitted('close')?.[0]).toEqual(['maskClick'])
  })

  it('should not close when maskClickClose is false', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
        maskClickClose: false,
      },
    })

    await wrapper.find('.ol-dialog__mask').trigger('click')
    await nextTick()

    expect(wrapper.emitted('update:show')).toBeFalsy()
    expect(wrapper.emitted('close')).toBeFalsy()
  })

  it('renders with title and close button correctly', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
        title: '测试标题',
        showClose: true,
      },
    })

    expect(wrapper.find('.ol-dialog__header').text()).toContain('测试标题')
    expect(wrapper.find('.ol-dialog__header--close').exists()).toBe(true)
  })

  it('emits events when close button is clicked', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
        showClose: true,
      },
    })

    await wrapper.find('.ol-dialog__header--close').trigger('click')
    await nextTick()

    expect(wrapper.emitted('update:show')?.[0]).toEqual([false])
    expect(wrapper.emitted('close')?.[0]).toEqual(['closeByClick'])
  })

  it('renders custom header and footer slots', () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
      },
      slots: {
        header: '<div class="custom-header">自定义头部</div>',
        footer: '<div class="custom-footer">自定义底部</div>',
      },
    })

    expect(wrapper.find('.custom-header').exists()).toBe(true)
    expect(wrapper.find('.custom-footer').exists()).toBe(true)
  })

  it('updates visibility and emits events when show changes', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
      },
    })

    await wrapper.setProps({ show: false })
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.emitted('update:show')?.[0]).toEqual([false])
    expect(wrapper.emitted('close')?.[0]).toEqual(['closeByCustom'])
  })

  it('emits open event when dialog opens', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: false,
      },
    })

    await wrapper.setProps({ show: true })
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.emitted('open')).toBeTruthy()
  })

  it('removes event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    const wrapper = mount(Dialog, {
      props: {
        show: false,
      },
    })

    wrapper.unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function))
    removeEventListenerSpy.mockRestore()
  })

  it('handles animation transitions', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: true,
        mask: true,
        maskClickClose: true,
      },
    })

    await wrapper.find('.ol-dialog__mask').trigger('click')
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.emitted('update:show')?.[0]).toEqual([false])
    expect(wrapper.emitted('close')?.[0]).toEqual(['maskClick'])
    expect(wrapper.find('.ol-dialog').isVisible()).toBe(true)
  })

  it('handles multiple show/hide transitions', async () => {
    const wrapper = mount(Dialog, {
      props: {
        show: false,
      },
    })

    await wrapper.setProps({ show: true })
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.find('.ol-dialog').isVisible()).toBe(true)
    expect(wrapper.emitted('open')).toBeTruthy()
  })
})
