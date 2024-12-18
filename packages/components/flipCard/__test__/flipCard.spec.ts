import type { VueWrapper } from '@vue/test-utils'
import { OlFlipControl } from '@onionl-ui/components'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import OlFlipCard from '../src/flipCard.vue'

describe('olFlipCard', () => {
  let wrapper: VueWrapper

  const FrontComponent = {
    template: '<div class="front">Front Content</div>',
  }

  const BackComponent = {
    template: '<div class="back">Back Content</div>',
  }

  beforeEach(() => {
    wrapper = mount(OlFlipCard, {
      props: {
        flipped: false,
        front: FrontComponent,
        back: BackComponent,
      },
    })
  })

  // 基础渲染测试
  it('should render correctly', () => {
    expect(wrapper.findComponent(OlFlipControl).exists()).toBe(true)
    expect(wrapper.find('.front').exists()).toBe(true)
    expect(wrapper.find('.back').exists()).toBe(true)
  })

  it('should correctly pass flipped property', async () => {
    expect(wrapper.findComponent(OlFlipControl).props('flipped')).toBe(false)

    await wrapper.setProps({ flipped: true })
    expect(wrapper.findComponent(OlFlipControl).props('flipped')).toBe(true)
  })

  it('should correctly handle custom class', async () => {
    await wrapper.setProps({ class: 'custom-class' })
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('should correctly handle component properties being undefined', async () => {
    await wrapper.setProps({ front: undefined, back: undefined })
    expect(wrapper.findComponent(OlFlipControl).exists()).toBe(true)
  })

  it('should render front and back components correctly', () => {
    expect(wrapper.find('.front').text()).toBe('Front Content')
    expect(wrapper.find('.back').text()).toBe('Back Content')
  })

  it('should render correctly when no components are provided', () => {
    wrapper = mount(OlFlipCard, {
      props: { flipped: false },
    })
    expect(wrapper.findComponent(OlFlipControl).exists()).toBe(true)
  })
})
