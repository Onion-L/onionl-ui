import { describe, expect, it, vi } from 'vitest'
import { handleTrigger } from '../src/util'

describe('popover utils', () => {
  describe('isTriggerAllow', () => {
    it('should only allow hover and click triggers', () => {
      const mockEvent = new Event('click')
      const mockClickHandler = vi.fn()
      const mockHoverHandler = vi.fn()
      const mockInvalidHandler = vi.fn()

      const clickHandler = handleTrigger('click', 'click', mockClickHandler)
      clickHandler(mockEvent)
      expect(mockClickHandler).toBeCalled()

      const hoverHandler = handleTrigger('hover', 'hover', mockHoverHandler)
      hoverHandler(mockEvent)
      expect(mockHoverHandler).toBeCalled()

      const invalidHandler = handleTrigger('invalid', 'click', mockInvalidHandler)
      invalidHandler(mockEvent)
      expect(mockInvalidHandler).not.toBeCalled()
    })
  })

  describe('handleTrigger', () => {
    it('should call handler when trigger and event match', () => {
      const mockEvent = new Event('click')
      const mockHandler = vi.fn()

      const handler = handleTrigger('click', 'click', mockHandler)
      handler(mockEvent)

      expect(mockHandler).toHaveBeenCalledWith(mockEvent)
    })

    it('should not call handler when trigger and event do not match', () => {
      const mockEvent = new Event('click')
      const mockHandler = vi.fn()

      const handler = handleTrigger('hover', 'click', mockHandler)
      handler(mockEvent)

      expect(mockHandler).not.toHaveBeenCalled()
    })
  })
})
