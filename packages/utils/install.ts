import type { App, Plugin } from 'vue'

type SFCIntall<T> = T & Plugin

export function useInstall<T extends Record<string, any>>(comp: T) {
  ;(comp as SFCIntall<T>).install = (app: App) => {
    app.component(comp.name, comp)
  }

  return comp as SFCIntall<T>
}
