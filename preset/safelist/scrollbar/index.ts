const elementKeys = [
  'ol-scrollbar',
  'ol-scrollbar__snap-both',
  'ol-scrollbar__snap-x',
  'ol-scrollbar__snap-y',
]

const snapKeys = [
  'ol-scroll-snap__align-start',
  'ol-scroll-snap__align-end',
  'ol-scroll-snap__align-center',
  'ol-scroll-snap__align-none',
]

export const scrollbarSafelist: string[] = [elementKeys, snapKeys].flat()
