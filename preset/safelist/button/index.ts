const disabled = 'ol-button__disabled'
const sizeList = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
const sizeSaftList = sizeList.map(size => `ol-button__size-${size}`)
const typeSafeList = ['primary', 'secondary', 'outline', 'link'].map(type => `ol-button__type-${type}`)

export const btnSafelist: string[] = ['ol-button', disabled, typeSafeList, sizeSaftList].flat()
