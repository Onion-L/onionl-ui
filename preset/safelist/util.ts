export function addPrefix(elementKeys: string[]) {
  return elementKeys.map(key => `ol-${key}`)
}
