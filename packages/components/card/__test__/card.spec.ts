import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import Card from '../src/card.vue'
import CardContent from '../src/content.vue'
import CardFooter from '../src/footer.vue'
import CardHeader from '../src/header.vue'

describe('ol-card', () => {
  describe('cardContainer', () => {
    it('should render', () => {
      const wrapper = mount(Card)
      expect(wrapper.classes()).toContain('ol-card')
    })

    it('should support custom class', () => {
      const wrapper = mount(Card, {
        props: {
          class: 'custom-class',
        },
      })
      expect(wrapper.classes()).toContain('custom-class')
    })

    it('should render default slot content', () => {
      const wrapper = mount(Card, {
        slots: {
          default: 'Card Content',
        },
      })
      expect(wrapper.text()).toBe('Card Content')
    })

    it('should support header/content/footer', () => {
      const wrapper = mount(Card, {
        slots: {
          default: [
            h(CardHeader, null, { default: () => 'Header' }),
            h(CardContent, null, { default: () => 'Content' }),
            h(CardFooter, null, { default: () => 'Footer' }),
          ],
        },
      })

      expect(wrapper.find('.ol-card-header').exists()).toBe(true)
      expect(wrapper.find('.ol-card-content').exists()).toBe(true)
      expect(wrapper.find('.ol-card-footer').exists()).toBe(true)

      expect(wrapper.find('.ol-card-header').text()).toBe('Header')
      expect(wrapper.find('.ol-card-content').text()).toBe('Content')
      expect(wrapper.find('.ol-card-footer').text()).toBe('Footer')
    })
  })

  describe('card sub-components', () => {
    // 测试 Header
    describe('cardHeader', () => {
      it('should render', () => {
        const wrapper = mount(CardHeader)
        expect(wrapper.classes()).toContain('ol-card-header')
      })

      it('should support custom class', () => {
        const wrapper = mount(CardHeader, {
          props: {
            class: 'custom-header',
          },
        })
        expect(wrapper.classes()).toContain('custom-header')
      })

      it('should render slot content', () => {
        const wrapper = mount(CardHeader, {
          slots: {
            default: 'Header Content',
          },
        })
        expect(wrapper.text()).toBe('Header Content')
      })
    })

    // 测试 Content
    describe('cardContent', () => {
      it('should render', () => {
        const wrapper = mount(CardContent)
        expect(wrapper.classes()).toContain('ol-card-content')
      })

      it('should support custom class', () => {
        const wrapper = mount(CardContent, {
          props: {
            class: 'custom-content',
          },
        })
        expect(wrapper.classes()).toContain('custom-content')
      })

      it('should render slot content', () => {
        const wrapper = mount(CardContent, {
          slots: {
            default: 'Content Text',
          },
        })
        expect(wrapper.text()).toBe('Content Text')
      })
    })

    // 测试 Footer
    describe('cardFooter', () => {
      it('should render', () => {
        const wrapper = mount(CardFooter)
        expect(wrapper.classes()).toContain('ol-card-footer')
      })

      it('should support custom class', () => {
        const wrapper = mount(CardFooter, {
          props: {
            class: 'custom-footer',
          },
        })
        expect(wrapper.classes()).toContain('custom-footer')
      })

      it('should render slot content', () => {
        const wrapper = mount(CardFooter, {
          slots: {
            default: 'Footer Content',
          },
        })
        expect(wrapper.text()).toBe('Footer Content')
      })
    })
  })
})
