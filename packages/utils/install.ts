import type { App, Plugin } from 'vue'

type SFCInstall<T> = T & Plugin

export function useInstall<T extends Record<string, any>>(component: T) {
  ;(component as SFCInstall<T>).install = (app: App) => {
    app.component(component.name, component)
  }

  return component as SFCInstall<T>
}
