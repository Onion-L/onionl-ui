function isTriggerAllow(trigger: string, event: string) {
  if (trigger !== 'hover' && trigger !== 'click')
    return false

  return trigger === event
}

export function handleTrigger(trigger: string, event: string, handler: (e: Event) => void) {
  return (e: Event) => isTriggerAllow(trigger, event) && handler(e)
}
