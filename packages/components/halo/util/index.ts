export function clone<T>(value: T): T {
  if (!value)
    return value

  return JSON.parse(JSON.stringify(value))
}

export function isNumberString(value: string | number) {
  return !Number.isNaN(Number(value))
}
