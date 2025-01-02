export function isEmpty(value: any) {
  return value === undefined || value === null || value === ''
}

export function isNumberString(value: string | number) {
  return !Number.isNaN(Number(value))
}

export function isNumber(value: any) {
  return typeof value === 'number'
}

export function isString(value: any) {
  return typeof value === 'string'
}

export function isBoolean(value: any) {
  return typeof value === 'boolean'
}
