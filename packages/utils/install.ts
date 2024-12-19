import type { App, Plugin } from 'vue'

type SFCIntall<T> = T & Plugin

export function useInstall<T extends Record<string, any>>(component: T) {
  ;(component as SFCIntall<T>).install = (app: App) => {
    app.component(component.name, component)
  }

  return component as SFCIntall<T>
}
