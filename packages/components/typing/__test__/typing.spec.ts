import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TypingText from '../src/typingText.vue'

describe('typingText', () => {
  it('render text', () => {
    const text = 'Hello World'
    const wrapper = mount(TypingText, {
      props: {
        text,
      },
    })

    expect(wrapper.text()).toBe(text)
    expect(wrapper.attributes('role')).toBe('text')
    expect(wrapper.attributes('aria-label')).toBe('Typewriter effect text')
  })

  it('calculate animation style variables', () => {
    const text = 'Test'
    const duration = 5
    const wrapper = mount(TypingText, {
      props: {
        text,
        duration,
      },
    })

    const style = wrapper.attributes('style')
    expect(style).toContain('--typing-duration: 5s')
    expect(style).toContain('--typing-steps: 4') // text.length = 4
  })

  it('merge custom class', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'test',
        class: 'custom-class',
      },
    })

    expect(wrapper.classes()).toContain('ol-typing__text')
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('use default duration', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'test',
      },
    })

    expect(wrapper.attributes('style')).toContain('--typing-duration: 8s')
  })
})
