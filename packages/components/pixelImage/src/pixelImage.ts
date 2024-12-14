import type { Ref } from 'vue'

export interface PixelImageProps {
  pixelGap: number | string
  pixelSize: number | string
  width: string | number
  height: string | number
  viewportWidth: number
  viewportHeight: number
}

export const defaultProps: Partial<PixelImageProps> = {
  pixelGap: 4,
  pixelSize: 4,
}

async function waitImageLoad(imgRef: Ref<HTMLImageElement>) {
  if (!imgRef.value)
    return

  return new Promise((resolve) => {
    if (imgRef.value.complete) {
      resolve(true)
    }
    else {
      imgRef.value.onload = () => resolve(true)
    }
  })
}

export async function pixelImageCreator(
  imgRef: Ref<HTMLImageElement>,
  configOptions: PixelImageProps,
) {
  if (!imgRef.value)
    return

  const { pixelGap, pixelSize, viewportWidth, viewportHeight } = configOptions

  await waitImageLoad(imgRef)

  const gap = Number(pixelGap) || 4
  const size = Number(pixelSize) || gap || 4
  const canvas = document.createElement('canvas')
  canvas.width = viewportWidth || imgRef.value.width || imgRef.value.naturalWidth
  canvas.height = viewportHeight || imgRef.value.height || imgRef.value.naturalHeight
  const context = canvas.getContext('2d')
  if (!context)
    return
  context?.drawImage(imgRef.value, 0, 0, canvas.width, canvas.height)
  imgRef.value.style.display = 'none'
  const canvasHeight = canvas.height
  const canvasWidth = canvas.width
  const data = context.getImageData(0, 0, canvasWidth, canvasHeight).data
  const particles = []

  for (let y = 0; y < canvasHeight; y += gap) {
    for (let x = 0; x < canvasWidth; x += gap) {
      const index = (y * canvasWidth + x) * 4
      const r = data[index]
      const g = data[index + 1]
      const b = data[index + 2]
      const a = data[index + 3]
      if (a > 0) {
        particles.push({ x, y, color: `rgba(${r},${g},${b},${a})` })
      }
    }
  }

  context?.clearRect(0, 0, canvasWidth, canvasHeight)

  particles.forEach((particle) => {
    context!.fillStyle = particle.color
    context!.fillRect(particle.x, particle.y, size, size)
  })

  imgRef.value.parentElement?.appendChild(canvas)
}
