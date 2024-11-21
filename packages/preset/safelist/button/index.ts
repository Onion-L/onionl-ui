export function getBtnSafelist(range: number) {
  const sizeList = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']

  const sizeSaftList = sizeList.map(size => `ol-button__size-${size}`)

  const btnSafelist: string[] = ['ol-button', 'ol-button__type-primary', 'ol-button__type-outline', 'ol-button__type-secondary', ...sizeSaftList]

  const btnSize = Array.from({ length: range }, (_, i) => `ol-button__size-${i + 1}`)
  btnSafelist.push(...btnSize)

  return btnSafelist
}
