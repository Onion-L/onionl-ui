import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../src/button.vue'

describe('button Component', () => {
  it('renders default button correctly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Button Text',
      },
    })

    expect(wrapper.classes()).toContain('ol-button')
    expect(wrapper.text()).toBe('Button Text')
    expect(wrapper.classes()).toContain('ol-button__size--sm')
    expect(wrapper.classes()).toContain('ol-button__type--primary')
  })

  it('renders different button types', () => {
    const types = ['primary', 'secondary', 'outline'] as const

    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type },
        slots: {
          default: 'Button',
        },
      })
      expect(wrapper.classes()).toContain(`ol-button__type--${type}`)
    })
  })

  it('renders different button sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const

    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size },
        slots: {
          default: 'Button',
        },
      })
      expect(wrapper.classes()).toContain(`ol-button__size--${size}`)
    })
  })

  it('renders as link when "to" prop is provided', () => {
    const wrapper = mount(Button, {
      props: {
        to: 'https://example.com',
      },
      slots: {
        default: 'Link Button',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
    expect(wrapper.classes()).toContain('ol-button__type--link')
  })

  it('renders button with icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'i-mi-add',
      },
      slots: {
        default: 'Icon Button',
      },
    })

    const iconComponent = wrapper.findComponent({ name: 'OlIcon' })

    expect(iconComponent.exists()).toBe(true)
    expect(iconComponent.classes()).toContain('i-mi-add')
  })

  it('renders with link type', () => {
    const wrapper = mount(Button, {
      props: {
        link: true,
      },
      slots: {
        default: 'Link Type Button',
      },
    })

    expect(wrapper.classes()).toContain('ol-button__type--link')
  })

  it('renders slot content correctly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="custom-content">Custom Content</span>',
      },
    })

    expect(wrapper.find('.custom-content').exists()).toBe(true)
    expect(wrapper.text()).toBe('Custom Content')
  })

  it('disables click event when disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('triggers click event in normal state', async () => {
    const wrapper = mount(Button)

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
