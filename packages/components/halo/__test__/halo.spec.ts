import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Halo from '../src/halo.vue'

describe('ol-halo', () => {
  beforeEach(() => {
    // Mock Element.animate
    Element.prototype.animate = vi.fn()
  })

  // 测试默认渲染
  it('should render default slot content', () => {
    const wrapper = mount(Halo, {
      slots: {
        default: '<div>test</div>',
      },
    })

    expect(wrapper.html()).toContain('test')
  })

  it('should use specified HTML tag to render', () => {
    const wrapper = mount(Halo, {
      props: {
        is: 'span',
      },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('should generate keyframes correctly', async () => {
    const wrapper = mount(Halo, {
      props: {
        haloColor: ['#ff0000', '#00ff00'],
        haloRadius: 10,
        offsetX: 5,
        offsetY: 5,
      },
    })

    const vm = wrapper.vm as any
    const keyframes = await vm.keyframes

    expect(keyframes).toHaveLength(4) // 因为颜色会被复制和反转
    expect(keyframes[0].filter).toContain('drop-shadow(5px 5px 10em #ff0000)')
  })

  it('should handle number and string type offset values correctly', async () => {
    const wrapper = mount(Halo, {
      props: {
        haloColor: '#ff0000',
        offsetX: '2rem',
        offsetY: 10,
      },
    })

    const vm = wrapper.vm as any
    const keyframes = await vm.keyframes

    expect(keyframes[0].filter).toContain('drop-shadow(2rem 10px')
  })

  it('should handle single color and multiple colors correctly', async () => {
    const singleColorWrapper = mount(Halo, {
      props: {
        haloColor: '#ff0000',
      },
    })

    const singleColorVm = singleColorWrapper.vm as any
    const singleColorKeyframes = await singleColorVm.keyframes
    expect(singleColorKeyframes).toHaveLength(2)

    const multiColorWrapper = mount(Halo, {
      props: {
        haloColor: ['#ff0000', '#00ff00', '#0000ff'],
      },
    })

    const multiColorVm = multiColorWrapper.vm as any
    const multiColorKeyframes = await multiColorVm.keyframes
    expect(multiColorKeyframes).toHaveLength(6)
  })

  it('should initialize animation correctly when mounted', async () => {
    const wrapper = mount(Halo, {
      props: {
        haloColor: '#ff0000',
        duration: 3000,
        haloRadius: 6,
      },
    })

    await wrapper.vm.$nextTick()

    const animateMock = Element.prototype.animate as any
    expect(animateMock).toHaveBeenCalled()

    const [keyframes, options] = animateMock.mock.calls[0]
    expect(options).toEqual({
      duration: 3000,
      iterations: Infinity,
    })
    expect(keyframes).toHaveLength(2)
  })

  it('should generate correct animation parameters based on the input configuration', async () => {
    const wrapper = mount(Halo, {
      props: {
        haloColor: ['red', 'blue'],
        duration: 5000,
        haloRadius: 8,
        offsetX: 10,
        offsetY: 20,
      },
    })

    await wrapper.vm.$nextTick()

    const animateMock = Element.prototype.animate as any
    const [keyframes] = animateMock.mock.calls[0]

    expect(keyframes[0].filter).toContain('drop-shadow(10px 20px 8em red)')
    expect(keyframes[keyframes.length - 1].filter).toContain('drop-shadow(10px 20px 8em red)')
  })

  it('should cleanup animation when component is unmounted', () => {
    const wrapper = mount(Halo, {
      props: {
        haloColor: '#ff0000',
      },
    })

    const animateMock = Element.prototype.animate as any
    const initialCallCount = animateMock.mock.calls.length

    wrapper.unmount()

    expect(animateMock.mock.calls.length).toBe(initialCallCount)
  })

  it('should handle invalid haloColor correctly', async () => {
    const wrapper = mount(Halo, {
      props: {
        haloColor: undefined,
      },
    })

    await wrapper.vm.$nextTick()

    const animateMock = Element.prototype.animate as any
    expect(animateMock).not.toHaveBeenCalled()
  })
})
