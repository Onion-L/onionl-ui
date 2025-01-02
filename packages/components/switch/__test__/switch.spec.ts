import { CHANGE_EVENT, CLICK_EVENT, MODEL_VALUE_UPDATE } from '@onionl-ui/components/constant'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Switch from '../src/switch.vue'

describe('switch Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(Switch)
    expect(wrapper.find('.ol-switch').exists()).toBe(true)
    expect(wrapper.find('.ol-switch__core').exists()).toBe(true)
  })

  it('should set initial state based on checked prop', () => {
    const wrapper = mount(Switch, {
      props: {
        checked: true,
      },
    })
    expect(wrapper.classes()).toContain('ol-switch__checked')
  })

  it('should not toggle when disabled', async () => {
    const wrapper = mount(Switch, {
      props: {
        disabled: true,
      },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted(MODEL_VALUE_UPDATE)).toBeFalsy()
    expect(wrapper.emitted(CHANGE_EVENT)).toBeFalsy()
    expect(wrapper.emitted(CLICK_EVENT)).toBeFalsy()
  })

  it('should toggle state and emit events on click', async () => {
    const wrapper = mount(Switch)

    await wrapper.trigger('click')

    expect(wrapper.emitted(MODEL_VALUE_UPDATE)?.[0]).toEqual([true])
    expect(wrapper.emitted(CHANGE_EVENT)?.[0]).toEqual([true])
    expect(wrapper.emitted(CLICK_EVENT)?.[0]).toEqual([true])

    expect(wrapper.classes()).toContain('ol-switch__checked')
  })

  it('should respond to keyboard events', async () => {
    const wrapper = mount(Switch)

    await wrapper.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted(MODEL_VALUE_UPDATE)?.[0]).toEqual([true])

    await wrapper.trigger('keydown', { key: ' ' })
    expect(wrapper.emitted(MODEL_VALUE_UPDATE)?.[1]).toEqual([false])
  })

  it('beforeSwitch hook should execute before toggling', async () => {
    const beforeSwitch = vi.fn(() => Promise.resolve(true))
    const wrapper = mount(Switch, {
      props: {
        beforeSwitch,
      },
    })

    await wrapper.trigger('click')

    expect(beforeSwitch).toHaveBeenCalled()
    expect(wrapper.emitted(MODEL_VALUE_UPDATE)?.[0]).toEqual([true])
  })

  it('should render different sizes', () => {
    const sizes = ['small', 'default', 'large'] as const

    sizes.forEach((size) => {
      const wrapper = mount(Switch, {
        props: { size },
      })
      const core = wrapper.find('.ol-switch__core')

      expect(wrapper.classes()).toContain(`ol-switch--${size}`)
      expect(core.classes()).toContain(`ol-switch__core--${size}`)
    })
  })
})
