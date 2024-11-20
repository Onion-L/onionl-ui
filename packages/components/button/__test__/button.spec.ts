import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../src/button.vue'

describe('button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Hello World' },
    })

    expect(wrapper.text()).toBe('Hello World')
  })
})
