import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import OlFlipControl from '../src/filp.vue'

describe('olFlipControl', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(OlFlipControl)
  })

  it('should render the component correctly', () => {
    expect(wrapper.find('.ol-flip-control').exists()).toBeTruthy()
    expect(wrapper.find('.ol-flip-control__inner').exists()).toBeTruthy()
    expect(wrapper.find('.ol-flip-control-front').exists()).toBeTruthy()
    expect(wrapper.find('.ol-flip-control-back').exists()).toBeTruthy()
  })

  it('default flipped is false', () => {
    expect(wrapper.find('.ol-flip-control__inner').classes()).not.toContain('is-flipped')
  })

  it('should add the corresponding class when flipped is set to true', async () => {
    await wrapper.setProps({ flipped: true })
    expect(wrapper.find('.ol-flip-control__inner').classes()).toContain('is-flipped')
  })

  it('should handle custom class correctly', async () => {
    const customClass = 'custom-class'
    await wrapper.setProps({ class: customClass })
    expect(wrapper.classes()).toContain(customClass)

    await wrapper.setProps({ class: ['class1', 'class2'] })
    expect(wrapper.classes()).toContain('class1')
    expect(wrapper.classes()).toContain('class2')
  })

  it('should render front and back slots', () => {
    wrapper = mount(OlFlipControl, {
      slots: {
        front: '<div class="front-content">Front</div>',
        back: '<div class="back-content">Back</div>',
      },
    })

    expect(wrapper.find('.front-content').text()).toBe('Front')
    expect(wrapper.find('.back-content').text()).toBe('Back')
  })

  it('slots are empty should render correctly', () => {
    expect(wrapper.find('.ol-flip-control-front').exists()).toBeTruthy()
    expect(wrapper.find('.ol-flip-control-back').exists()).toBeTruthy()
  })

  it('should support complex slot content', () => {
    wrapper = mount(OlFlipControl, {
      slots: {
        front: `
            <div class="complex-front">
              <h1>Title</h1>
              <p>Content</p>
            </div>
          `,
        back: `
            <div class="complex-back">
              <button>Click me</button>
            </div>
          `,
      },
    })

    expect(wrapper.find('.complex-front h1').exists()).toBeTruthy()
    expect(wrapper.find('.complex-back button').exists()).toBeTruthy()
  })

  it('flipped property should be reactive', async () => {
    await wrapper.setProps({ flipped: true })
    expect(wrapper.find('.ol-flip-control__inner').classes()).toContain('is-flipped')

    await wrapper.setProps({ flipped: false })
    expect(wrapper.find('.ol-flip-control__inner').classes()).not.toContain('is-flipped')
  })
})
