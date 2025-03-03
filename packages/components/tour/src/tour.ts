import type { Driver } from 'driver.js'

export type RegisterStep = ((index: number, className: string, title: string, description: string) => void) | null
export type DriverObj = Driver | null

export interface TourSteps {
  index: number | string
  title: string
  element: string
  description: string
}
