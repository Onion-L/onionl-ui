import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Avatar from '../src/avatar.vue'

describe('avatar Component', () => {
  it('renders with default props', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.classes()).toContain('ol-avatar')
    expect(wrapper.classes()).toContain('ol-avatar--md')
    expect(wrapper.classes()).toContain('ol-avatar--circle')
  })

  it('renders with custom size', () => {
    const wrapper = mount(Avatar, {
      props: {
        size: 'lg',
      },
    })
    expect(wrapper.classes()).toContain('ol-avatar--lg')
  })

  it('renders with custom shape', () => {
    const wrapper = mount(Avatar, {
      props: {
        shape: 'square',
      },
    })
    expect(wrapper.classes()).toContain('ol-avatar--square')
  })

  it('shows fallback icon when image fails to load', async () => {
    const wrapper = mount(Avatar, {
      props: {
        src: 'invalid.jpg',
      },
    })

    const img = wrapper.find('img')
    await img.trigger('error')

    expect(wrapper.find('.ol-avatar__icon').exists()).toBe(true)
  })

  it('displays initials when provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        initials: 'JD',
      },
    })
    expect(wrapper.find('.ol-avatar__fallback').text()).toBe('JD')
  })

  it('displays custom icon when provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        icon: 'custom-icon',
      },
    })
    expect(wrapper.find('.ol-avatar__icon').exists()).toBe(true)
  })

  it('applies custom background color', () => {
    const wrapper = mount(Avatar, {
      props: {
        backgroundColor: '#ff0000',
      },
    })
    expect(wrapper.attributes('style')).toContain('background-color: #ff0000')
  })

  it('emits click event when clickable', async () => {
    const wrapper = mount(Avatar, {
      props: {
        clickable: true,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click event when not clickable', async () => {
    const wrapper = mount(Avatar, {
      props: {
        clickable: false,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('applies custom border radius when shape is custom', () => {
    const wrapper = mount(Avatar, {
      props: {
        shape: 'custom',
        borderRadius: '12px',
      },
    })
    expect(wrapper.attributes('style')).toContain('border-radius: 12px')
  })

  it('sets proper aria attributes', () => {
    const wrapper = mount(Avatar, {
      props: {
        ariaLabel: 'User Avatar',
      },
    })
    expect(wrapper.attributes('aria-label')).toBe('User Avatar')
    expect(wrapper.attributes('role')).toBe('img')
  })
})
