import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { PixelImage } from '../src/pixelImage'
import OlPixelImage from '../src/pixelImage.vue'

describe('olPixelImage', () => {
  let wrapper: any

  afterEach(() => {
    wrapper?.unmount()
    vi.clearAllMocks()
  })

  it('should render component correctly', () => {
    wrapper = mount(OlPixelImage, {
      props: {
        pixelGap: 4,
        pixelSize: 4,
        width: 100,
        height: 100,
        viewportWidth: 100,
        viewportHeight: 100,
      },
      attrs: {
        src: 'test.jpg',
        alt: 'test image',
      },
    })

    expect(wrapper.find('.ol-pixel-image').exists()).toBeTruthy()
    expect(wrapper.find('img').exists()).toBeTruthy()
  })

  it('should use correct props and attrs', () => {
    const props = {
      pixelGap: 8,
      pixelSize: 8,
      width: 200,
      height: 200,
      viewportWidth: 200,
      viewportHeight: 200,
    }

    wrapper = mount(OlPixelImage, {
      props,
      attrs: {
        src: 'test.jpg',
        alt: 'test image',
      },
    })

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('test.jpg')
    expect(img.attributes('alt')).toBe('test image')
    expect(img.attributes('width')).toBe('200')
    expect(img.attributes('height')).toBe('200')
  })

  it('should create PixelImage class instance', async () => {
    const createMock = vi.fn()
    vi.spyOn(PixelImage.prototype, 'create').mockImplementation(createMock)

    wrapper = mount(OlPixelImage, {
      props: {
        pixelGap: 4,
        pixelSize: 4,
        width: 100,
        height: 100,
        viewportWidth: 100,
        viewportHeight: 100,
      },
    })

    await nextTick()

    expect(createMock).toHaveBeenCalled()
  })

  it('should call destroy method when unmounted', async () => {
    const destroyMock = vi.fn()
    vi.spyOn(PixelImage.prototype, 'destroy').mockImplementation(destroyMock)

    wrapper = mount(OlPixelImage, {
      props: {
        pixelGap: 4,
        pixelSize: 4,
        width: 100,
        height: 100,
        viewportWidth: 100,
        viewportHeight: 100,
      },
    })

    await nextTick()
    wrapper.unmount()

    expect(destroyMock).toHaveBeenCalled()
  })

  it('should use default props', () => {
    wrapper = mount(OlPixelImage, {
      props: {
        width: 100,
        height: 100,
        viewportWidth: 100,
        viewportHeight: 100,
        pixelGap: 4,
        pixelSize: 4,
      },
    })

    const img = wrapper.find('img')

    expect(img.exists()).toBeTruthy()
    expect(img.attributes('width')).toBe('100')
    expect(img.attributes('height')).toBe('100')
    expect(wrapper.props('pixelGap')).toBe(4)
    expect(wrapper.props('pixelSize')).toBe(4)
    expect(wrapper.props('viewportWidth')).toBe(100)
    expect(wrapper.props('viewportHeight')).toBe(100)
  })
})

// TODO unit test
