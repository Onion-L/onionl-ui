export function getBtnSafelist(range: number) {
  const sizeList = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
  const sizeSaftList = sizeList.map(size => `ol-button__size-${size}`)
  const typeSafeList = ['primary', 'secondary', 'outline', 'link'].map(type => `ol-button__type-${type}`)
  const btnSize = Array.from({ length: range }, (_, i) => `ol-button__size-${i + 1}`)
  const btnSafelist: string[] = [typeSafeList, sizeSaftList, btnSize].flat()
  return btnSafelist
}
