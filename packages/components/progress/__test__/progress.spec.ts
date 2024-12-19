import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Progress from '../src/progress.vue'

describe('ol-progress', () => {
  it('should render correctly', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 50,
      },
    })

    expect(wrapper.find('.ol-progress').exists()).toBe(true)
    expect(wrapper.find('.ol-progress__inner').exists()).toBe(true)
    expect(wrapper.find('.ol-progress-bar').exists()).toBe(true)
  })

  it('should respond to value changes', async () => {
    const wrapper = mount(Progress, {
      props: {
        value: 30,
      },
    })

    const bar = wrapper.find('.ol-progress-bar')
    expect(bar.attributes('style')).toContain('translateX(-70%)')

    await wrapper.setProps({ value: 60 })
    expect(bar.attributes('style')).toContain('translateX(-40%)')
  })

  it('should reverse the progress bar direction', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 40,
        reverse: true,
      },
    })

    expect(wrapper.find('.ol-progress-bar').attributes('style'))
      .toContain('translateX(60%)')
  })

  it('should control label display with label prop', async () => {
    const wrapper = mount(Progress, {
      props: {
        value: 50,
        label: true,
      },
    })

    const label = wrapper.find('.ol-progress-label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('50%')

    await wrapper.setProps({ label: false })
    expect(wrapper.find('.ol-progress-label').attributes('style'))
      .toContain('display: none')
  })

  it('should support custom label slot', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 50,
        label: true,
      },
      slots: {
        label: 'Custom Label',
      },
    })

    expect(wrapper.find('.ol-progress-label').text()).toBe('Custom Label')
  })
})
