import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Image from '../src/image.vue'

function factory(props: Record<string, any>, slots?: Record<string, any>) {
  return mount(Image, {
    props: {
      ...props,
    },
    slots: {
      ...slots,
    },
  })
}

describe('image Component', () => {
  it('should render basic image correctly', async () => {
    const wrapper = factory({
      src: 'test.jpg',
      alt: 'test image',
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('test.jpg')
    expect(img.attributes('alt')).toBe('test image')
  })

  it('should show error state when src is empty', () => {
    const wrapper = factory({
      src: '',
    })

    expect(wrapper.find('.ol-image__error').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('should handle image load error correctly', async () => {
    const wrapper = factory({
      src: 'invalid.jpg',
    })

    const img = wrapper.find('img')
    await img.trigger('error')

    expect(wrapper.find('.ol-image__error').exists()).toBe(true)
  })

  it('should apply fit class correctly', () => {
    const wrapper = mount(Image, {
      props: {
        src: 'test.jpg',
        fit: 'cover',
      },
    })

    expect(wrapper.find('img').classes()).toContain('ol-image__fit-cover')
  })

  it('should support lazy loading', async () => {
    const mockObserve = vi.fn()

    vi.stubGlobal('IntersectionObserver', vi.fn().mockImplementation(() => ({
      observe: mockObserve,
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    })))

    factory({
      src: 'test.jpg',
      loading: 'lazy',
    })

    expect(mockObserve).toHaveBeenCalled()
  })

  // TODO Loading e2e test

  it('should support custom error slot', async () => {
    const wrapper = factory({
      src: 'invalid.jpg',
    }, {
      error: '<div class="custom-error">Custom Error</div>',
    })

    const img = wrapper.find('img')
    await img.trigger('error')

    expect(wrapper.find('.custom-error').exists()).toBe(true)
  })
})
