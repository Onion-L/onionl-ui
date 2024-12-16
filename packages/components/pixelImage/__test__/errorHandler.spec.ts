import type { PixelImageProps } from '../src/pixelImage'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { PixelImage } from '../src/pixelImage'

describe('pixelImage Error Handling', () => {
  const mockConfig: PixelImageProps = {
    pixelGap: 4,
    pixelSize: 4,
    width: 100,
    height: 100,
    viewportWidth: 100,
    viewportHeight: 100,
  }

  const createMockImage = () => {
    const img = document.createElement('img')
    img.width = 100
    img.height = 100
    return img
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('constructor', () => {
    it.each([
      ['imgRef is null', [null, mockConfig]],
      ['config is null', [ref(createMockImage()), null]],
    ])('should throw error when %s', (_, args) => {
      expect(() => new PixelImage(...args as [any, any]))
        .toThrow('Image DOM and props are required')
    })
  })

  describe('_waitImageLoad', () => {
    it('should throw error when imgRef is null', async () => {
      const pixelImage = new PixelImage(ref(createMockImage()), mockConfig)
      // @ts-expect-error - private attribute, test only
      pixelImage.imgRef = null
      // @ts-expect-error - private method, test only
      await expect(pixelImage._waitImageLoad())
        .rejects
        .toThrow('Image DOM is not ready')
    })
  })

  describe('initCanvas', () => {
    it('should throw error when imgRef is null', () => {
      const pixelImage = new PixelImage(ref(createMockImage()), mockConfig)
      // @ts-expect-error - private attribute, test only
      pixelImage.imgRef = null
      // @ts-expect-error - private method, test only
      expect(() => pixelImage.initCanvas())
        .toThrow('Image DOM is not ready')
    })
  })

  describe('drawImage', () => {
    it('should throw error when context is null', () => {
      const pixelImage = new PixelImage(ref(createMockImage()), mockConfig)
      // @ts-expect-error - private attribute, test only
      pixelImage.context = null
      // @ts-expect-error - private method, test only
      expect(() => pixelImage.drawImage())
        .toThrow('Image DOM or context is not ready')
    })

    it('should throw error when imgRef is null', () => {
      const pixelImage = new PixelImage(ref(createMockImage()), mockConfig)
      // @ts-expect-error - private attribute, test only
      pixelImage.imgRef = null
      // @ts-expect-error - private method, test only
      expect(() => pixelImage.drawImage())
        .toThrow('Image DOM or context is not ready')
    })
  })

  describe('getImageData', () => {
    it('should throw error when context is null', () => {
      const pixelImage = new PixelImage(ref(createMockImage()), mockConfig)
      // @ts-expect-error - private attribute, test only
      pixelImage.context = null
      // @ts-expect-error - private method, test only
      expect(() => pixelImage.getImageData())
        .toThrow('context is not ready')
    })
  })

  describe('drawParticles', () => {
    it('should throw error when context is null', () => {
      const pixelImage = new PixelImage(ref(createMockImage()), mockConfig)
      // @ts-expect-error - private attribute, test only
      pixelImage.context = null
      // @ts-expect-error - private method, test only
      expect(() => pixelImage.drawParticles())
        .toThrow('context is not ready')
    })
  })

  describe('create', () => {
    it('should throw error when image load fails', async () => {
      const pixelImage = new PixelImage(ref(createMockImage()), mockConfig)
      vi.spyOn(pixelImage as any, '_waitImageLoad').mockRejectedValue(new Error('Image is not loaded or context is not ready'))

      await expect(pixelImage.create())
        .rejects
        .toThrow('Image is not loaded or context is not ready')
    })
  })
})
