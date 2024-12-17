import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ScrollSnap from '../src/snap.vue'

describe('scrollSnap', () => {
  it('should render default slot', () => {
    const wrapper = mount(ScrollSnap, {
      slots: {
        default: '<div>test</div>',
      },
    })

    expect(wrapper.text()).toContain('test')
  })

  it('should use default align value', () => {
    const wrapper = mount(ScrollSnap)
    expect(wrapper.classes()).toContain('ol-scroll-snap__align-none')
  })

  it('should set align class', async () => {
    const wrapper = mount(ScrollSnap, {
      props: {
        align: 'center',
      },
    })

    expect(wrapper.classes()).toContain('ol-scroll-snap__align-center')

    // 测试动态更新
    await wrapper.setProps({ align: 'start' })
    expect(wrapper.classes()).toContain('ol-scroll-snap__align-start')
  })

  it('should validate align value', () => {
    const validAligns = ['start', 'end', 'center', 'none'] as const

    validAligns.forEach((align) => {
      const wrapper = mount(ScrollSnap, {
        props: { align },
      })
      expect(wrapper.classes()).toContain(`ol-scroll-snap__align-${align}`)
    })
  })
})
