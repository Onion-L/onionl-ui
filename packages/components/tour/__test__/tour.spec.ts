import { TOUR_STEP_EVENT } from '@onionl-ui/components/constant'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import TourProvider from '../src/provider.vue'
import TourStep from '../src/step.vue'

const driveMock = vi.fn()
vi.mock('driver.js', () => ({
  driver: vi.fn(() => ({
    drive: driveMock,
  })),
}))

describe('tour Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('provider should correctly render child elements', () => {
    const wrapper = mount(TourProvider, {
      slots: {
        default: '<div class="test-content">Test Content</div>',
      },
    })

    expect(wrapper.find('.test-content').exists()).toBe(true)
    expect(wrapper.find('.test-content').text()).toBe('Test Content')
  })

  it('step component should be registered to Provider', async () => {
    const wrapper = mount({
      components: { TourProvider, TourStep },
      template: `
        <TourProvider>
          <TourStep class="bg-red" :index="1" title="First Step" description="This is the first step description">
            <div>First Step Content</div>
          </TourStep>
        </TourProvider>
      `,
    })

    await nextTick()

    const stepElement = wrapper.find('.ol-tour-step--1')
    expect(stepElement.exists()).toBe(true)
    expect(stepElement.classes()).toContain('bg-red')
  })

  it('should start the tour when active becomes true', async () => {
    const wrapper = mount({
      components: { TourProvider, TourStep },
      template: `
        <button @click="showTour = true">Start</button>
        <TourProvider v-model:active="showTour">
          <TourStep class="bg-red" :index="1" title="First Step" description="This is the first step description" />
        </TourProvider>
      `,
      data() {
        return {
          showTour: false,
        }
      },
    })

    await nextTick()

    await wrapper.find('button').trigger('click')
    await nextTick()

    expect(driveMock).toHaveBeenCalled()
  })

  it('multiple Steps should be sorted by index', async () => {
    const wrapper = mount({
      components: { TourProvider, TourStep },
      template: `
        <TourProvider v-model:active="showTour">
          <TourStep class="bg-blue" :index="2" title="Second Step" description="This is the second step description" />
          <TourStep class="bg-red" :index="1" title="First Step" description="This is the first step description" />
          <TourStep class="bg-green" :index="3" title="Third Step" description="This is the third step description" />
        </TourProvider>
      `,
      data() {
        return {
          showTour: false,
        }
      },
    })

    await nextTick()

    await wrapper.setData({ showTour: true })
    await nextTick()

    const providerInstance = wrapper.findComponent(TourProvider).vm
    // @ts-expect-error - Accessing internal state for testing
    const steps = providerInstance.tourSteps

    // Verify steps are sorted by index
    expect(steps.length).toBe(3)
    expect(steps[0].index).toBe(1)
    expect(steps[1].index).toBe(2)
    expect(steps[2].index).toBe(3)
  })

  it('should emit an event when active becomes false', async () => {
    const wrapper = mount({
      components: { TourProvider, TourStep },
      template: `
        <TourProvider v-model:active="showTour">
          <TourStep class="bg-red" :index="1" title="First Step" description="This is the first step description" />
        </TourProvider>
      `,
      data() {
        return {
          showTour: true,
        }
      },
    })

    await nextTick()

    const provider = wrapper.findComponent(TourProvider)

    // @ts-expect-error - Accessing internal method for testing
    provider.vm.onTourFinish()
    await nextTick()

    expect(wrapper.vm.showTour).toBe(false)
  })

  it('should render slot content', () => {
    const wrapper = mount(TourStep, {
      props: { index: 1 },
      slots: { default: '<div>test</div>' },
      global: {
        provide: {
          [TOUR_STEP_EVENT]: vi.fn(),
        },
      },
    })
    expect(wrapper.html()).toContain('<div>test</div>')
  })

  it('should apply class attribute', () => {
    const wrapper = mount(TourStep, {
      props: { index: 1 },
      attrs: { class: 'custom-class' },
      global: {
        provide: {
          [TOUR_STEP_EVENT]: vi.fn(),
        },
      },
    })
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('should display warning', () => {
    const warn = vi.spyOn(console, 'warn')
    mount(TourStep, {
      props: { index: 1 },
    })
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('OlTourProvider'))
  })

  it('should correctly register step', async () => {
    const registerMock = vi.fn()
    const wrapper = mount(TourStep, {
      props: { index: 1, title: 'test', description: 'desc' },
      global: {
        provide: {
          [TOUR_STEP_EVENT]: registerMock,
        },
      },
    })

    await wrapper.vm.$nextTick()
    expect(registerMock).toHaveBeenCalledWith(1, expect.any(String), 'test', 'desc')
  })
})
