import type { Ref } from 'vue'

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

export async function pixelImageCreator(imgRef: Ref<HTMLImageElement>) {
  if (!imgRef.value)
    return

  await waitImageLoad(imgRef)

  const canvas = document.createElement('canvas')
  canvas.width = imgRef.value.width || 300
  canvas.height = imgRef.value.height || 150
  const context = canvas.getContext('2d')

  context?.drawImage(imgRef.value, 0, 0, canvas.width, canvas.height)

  imgRef.value.style.display = 'none'

  const canvasHeight = canvas.height
  const canvasWidth = canvas.width

  if (!context)
    return

  const data = context.getImageData(0, 0, canvasWidth, canvasHeight).data

  const gap = 4

  const particles = []

  for (let y = 0; y < canvasHeight; y += gap) {
    for (let x = 0; x < canvasWidth; x += gap) {
      const index = (y * canvasWidth + x) * 4
      const r = data[index]
      const g = data[index + 1]
      const b = data[index + 2]
      const a = data[index + 3]
      if (a > 0) {
        particles.push({ x, y, color: `rgba(${r},${g},${b},${a})`, vx: (Math.random() - 0.5) * 2, // 添加水平速度
          vy: (Math.random() - 0.5) * 2 })
      }
    }
  }

  context?.clearRect(0, 0, canvasWidth, canvasHeight)

  particles.forEach((particle) => {
    context!.fillStyle = particle.color
    context!.fillRect(particle.x, particle.y, gap, gap)
  })

  imgRef.value.parentElement?.appendChild(canvas)
}
