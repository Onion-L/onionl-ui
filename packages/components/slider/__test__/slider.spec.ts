import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import OlSlider from '../src/slider.vue'

describe('olSlider', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(OlSlider)
    expect(wrapper.exists()).toBe(true)
  })

  it('should render thumb element', () => {
    const wrapper = mount(OlSlider)
    expect(wrapper.find('.ol-slider__thumb').exists()).toBe(true)
  })

  it('should set min and max value correctly', () => {
    const wrapper = mount(OlSlider, {
      props: {
        min: 10,
        max: 90,
      },
    })
    expect(wrapper.vm.$props.min).toBe(10)
    expect(wrapper.vm.$props.max).toBe(90)
  })

  it('should set disabled status correctly', () => {
    const wrapper = mount(OlSlider, {
      props: {
        disabled: true,
      },
    })
    const thumb = wrapper.find('.ol-slider__thumb')

    expect(thumb.classes()).toContain('ol-slider__thumb--disabled')
  })

  it('should add correct classes when interacting with the slider', async () => {
    const wrapper = mount(OlSlider, {
      props: {
        modelValue: 50,
        min: 0,
        max: 100,
        step: 1,
        vertical: false,
      },
    })
    const thumb = wrapper.find('.ol-slider__thumb')

    expect(thumb.classes()).not.toContain('ol-slider__thumb--hover')
    expect(thumb.classes()).not.toContain('ol-slider__thumb--drag')

    await thumb.trigger('mouseenter')
    expect(thumb.classes()).toContain('ol-slider__thumb--hover')

    await thumb.trigger('mouseleave')
    expect(thumb.classes()).not.toContain('ol-slider__thumb--hover')

    await thumb.trigger('mousedown')
    expect(thumb.classes()).toContain('ol-slider__thumb--drag')
    expect(thumb.classes()).not.toContain('ol-slider__thumb--hover')
  })

  it('should set percentage style based on modelValue', () => {
    const wrapper = mount(OlSlider, {
      props: {
        modelValue: 75,
        min: 0,
        max: 100,
      },
    })

    const progressStyle = wrapper.find('.ol-slider__progress').attributes('style')
    expect(progressStyle).toContain('width: 75%')
  })

  it('should add vertical class when vertical prop is true', () => {
    const wrapper = mount(OlSlider, {
      props: {
        vertical: true,
      },
    })

    expect(wrapper.classes()).toContain('ol-slider--vertical')
  })

  
  it('should emit update:modelValue event when dragging', async () => {
    const wrapper = mount(OlSlider, {
      props: {
        modelValue: 50,
      },
    })
    const thumb = wrapper.find('.ol-slider__thumb')
    
    await thumb.trigger('mousedown')

    const moveEvent = new MouseEvent('mousemove', {
      clientX: 200,
      bubbles: true,
    })
    document.dispatchEvent(moveEvent)
    
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
