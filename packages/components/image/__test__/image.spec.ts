import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import Image from '../src/image.vue'

const VALID_IMAGE_URL = 'https://i.postimg.cc/sx8CQcYj/pexels-photo-1108099.jpg'
const EMPTY_IMAGE_URL = ''

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
  it('image render', async () => {
    const wrapper = factory({
      src: 'test.jpg',
      alt: 'test image',
    })

    expect(wrapper.find('.ol-image').exists()).toBe(true)
  })

  it('should render basic image correctly', async () => {
    const wrapper = factory({
      src: VALID_IMAGE_URL,
      alt: 'test image',
    })

    await nextTick()

    const img = wrapper.find('img')
    expect(img.exists()).toBeTruthy()

    expect(img.attributes('src')).toBe(VALID_IMAGE_URL)
    expect(img.attributes('alt')).toBe('test image')
  })

  it('should show error state when src is empty', async () => {
    const wrapper = factory({
      src: EMPTY_IMAGE_URL,
    })

    await nextTick()

    expect(wrapper.find('.ol-image__error').exists()).toBeTruthy()
    expect(wrapper.find('img').exists()).toBeFalsy()
  })

  it('should apply fit class correctly', async () => {
    const wrapper = factory({
      src: VALID_IMAGE_URL,
      fit: 'cover',
    })

    await nextTick()

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
      src: VALID_IMAGE_URL,
      loading: 'lazy',
    })

    expect(mockObserve).toHaveBeenCalled()
  })

  // TODO 懒加载测试 (Lazy load test)

  it('should support custom loading slot', async () => {
    const wrapper = factory({
      src: VALID_IMAGE_URL,
    }, {
      load: '<div class="custom-loading">Custom Loading</div>',
    })

    expect(wrapper.find('.custom-loading').exists()).toBe(true)
  })

  it('should support custom error slot', async () => {
    const wrapper = factory({
      src: EMPTY_IMAGE_URL,
    }, {
      error: '<div class="custom-error">Custom Error</div>',
    })

    await nextTick()

    expect(wrapper.find('.custom-error').exists()).toBe(true)
  })
})

// TODO: 测试图片加载错误无法测试非空 src (Image Error can not be triggered with invalid src eg: 'invalid.jpg')
// TODO 优化懒加载测试 (Optimize lazy load test)
