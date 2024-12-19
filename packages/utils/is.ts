export function isEmpty(value: any) {
  return value === undefined || value === null || value === ''
}

export function isNumberString(value: string | number) {
  return !Number.isNaN(Number(value))
}
