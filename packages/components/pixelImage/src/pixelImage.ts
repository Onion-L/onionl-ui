import type { Ref } from 'vue'

export interface PixelImageProps {
  pixelGap?: number | string
  pixelSize?: number | string
  width?: string | number
  height?: string | number
  viewportWidth?: number
  viewportHeight?: number
}

export const defaultProps: Partial<PixelImageProps> = {
  pixelGap: 4,
  pixelSize: 4,
}

interface Particle {
  x: number
  y: number
  color: string
}

class PixelImageError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'PixelImageError'
  }
}

export class PixelImage {
  private imgRef: Ref<HTMLImageElement> | null
  private config: PixelImageProps | null
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D | null
  private particles: Particle[] = []
  private viewportWidth: number | undefined
  private viewportHeight: number | undefined
  private pixelGap: number
  private pixelSize: number

  constructor(imgRef: Ref<HTMLImageElement>, configOptions: PixelImageProps) {
    if (!imgRef || !configOptions)
      throw new PixelImageError('Image DOM and props are required')

    this.imgRef = imgRef
    this.config = configOptions
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')
    this.viewportWidth = this.config.viewportWidth
    this.viewportHeight = this.config.viewportHeight
    this.pixelGap = Number(this.config.pixelGap) || 4
    this.pixelSize = Number(this.config.pixelSize) || this.pixelGap || 4
  }

  private async _waitImageLoad() {
    return new Promise((resolve) => {
      if (!this.imgRef || !this.imgRef.value) {
        throw new PixelImageError('Image DOM is not ready')
      }

      if (this.imgRef.value.complete) {
        resolve(true)
      }
      else {
        this.imgRef.value.onload = () => resolve(true)
      }
    })
  }

  private initCanvas() {
    if (!this.imgRef || !this.imgRef.value) {
      throw new PixelImageError('Image DOM is not ready')
    }

    this.canvas.width = this.viewportWidth || this.imgRef.value.width || this.imgRef.value.naturalWidth
    this.canvas.height = this.viewportHeight || this.imgRef.value.height || this.imgRef.value.naturalHeight
  }

  private drawImage() {
    if (!this.context || !this.imgRef || !this.imgRef.value) {
      throw new PixelImageError('Image DOM or context is not ready')
    }

    if (this.viewportWidth && this.viewportHeight) {
      this.context.drawImage(this.imgRef.value, 0, 0)
    }
    else {
      this.context.drawImage(this.imgRef.value, 0, 0, this.canvas.width, this.canvas.height)
    }
    this.imgRef.value.style.display = 'none'
  }

  private getImageData() {
    if (!this.context) {
      throw new PixelImageError('context is not ready')
    }

    const data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height).data
    for (let y = 0; y < this.canvas.height; y += this.pixelGap) {
      for (let x = 0; x < this.canvas.width; x += this.pixelGap) {
        const index = (y * this.canvas.width + x) * 4
        const r = data[index]
        const g = data[index + 1]
        const b = data[index + 2]
        const a = data[index + 3]
        if (a > 0) {
          this.particles.push({ x, y, color: `rgba(${r},${g},${b},${a})` })
        }
      }
    }
  }

  private drawParticles() {
    if (!this.context) {
      throw new PixelImageError('context is not ready')
    }

    this.context!.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.particles.forEach((particle) => {
      this.context!.fillStyle = particle.color
      this.context!.fillRect(particle.x, particle.y, this.pixelSize, this.pixelSize)
    })
  }

  public async create() {
    const isLoading = await this._waitImageLoad()
    if (!isLoading || !this.imgRef || !this.imgRef.value || !this.context) {
      throw new PixelImageError('Image is not loaded or context is not ready')
    }

    this.initCanvas()
    this.drawImage()
    this.getImageData()
    this.drawParticles()
    this.imgRef.value.parentElement?.appendChild(this.canvas)
  }

  public destroy() {
    if (!this.imgRef || !this.imgRef.value || !this.canvas)
      return

    this.imgRef.value.parentElement?.removeChild(this.canvas)
    this.imgRef.value.style.display = ''
    this.canvas.remove()

    this.particles = []
    this.context = null
    this.imgRef = null
    this.config = null
  }
}
