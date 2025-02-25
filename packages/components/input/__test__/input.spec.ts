import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Input from '../src/input.vue'

describe('input Component', () => {
  it('renders input correctly', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        placeholder: '请输入',
      },
    })

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').attributes('placeholder')).toBe('请输入')
    expect(wrapper.classes()).toContain('ol-input__wrap')
  })

  it('handles model value correctly', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test value',
      },
    })

    expect(wrapper.find('input').element.value).toBe('test value')
  })

  it('renders prefix icon correctly', () => {
    const wrapper = mount(Input, {
      props: {
        prefix: 'search',
      },
    })

    const prefixIcon = wrapper.findComponent({ name: 'OlIcon' })
    expect(prefixIcon.exists()).toBe(true)
    expect(prefixIcon.props('icon')).toBe('search')
    expect(prefixIcon.classes()).toContain('ol-input__icon-prefix')
    expect(wrapper.find('input').classes()).toContain('pl-10')
  })

  it('renders suffix icon correctly', () => {
    const wrapper = mount(Input, {
      props: {
        suffix: 'close',
      },
    })

    const suffixIcon = wrapper.findComponent({ name: 'OlIcon' })
    expect(suffixIcon.exists()).toBe(true)
    expect(suffixIcon.props('icon')).toBe('close')
    expect(suffixIcon.classes()).toContain('ol-input__icon-suffix')
  })

  it('handles disabled state correctly', async () => {
    const wrapper = mount(Input, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.find('input').classes()).toContain('is-disabled')

    await wrapper.find('input').trigger('focus')
    expect(document.activeElement).not.toBe(wrapper.find('input').element)
  })

  it('passes through HTML attributes', () => {
    const wrapper = mount(Input, {
      attrs: {
        'id': 'test-input',
        'data-test': 'test',
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('id')).toBe('test-input')
    expect(input.attributes('data-test')).toBe('test')
  })

  it('applies mask when provided', async () => {
    const wrapper = mount(Input, {
      props: {
        mask: '000-000',
        modelValue: '',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('123456')
    expect(input.element.value).toMatch(/^\d{3}-\d{3}$/)
  })

  it('emits events correctly', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')

    await input.trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()

    await input.trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()

    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])
  })
})
