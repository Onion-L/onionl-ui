import { defaultPrefix } from './constant'

function _bem(namespace: string, block?: string, element?: string, modifier?: string) {
  let cls = namespace
  if (block) {
    cls += `-${block}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

/**
 * Generates a namespace based on the given block name, used to create BEM-style class names.
 * @param name - The base name for generating the namespace.
 * @return An object containing methods for generating BEM-style class names.
 */
export function useNamespace(name: string) {
  const namespace = `${defaultPrefix}-${name}`

  const b = (block: string) => block
    ? _bem(namespace, block)
    : ''
  const e = (element: string) => element
    ? _bem(namespace, '', element)
    : ''
  const m = (modifier: string) => modifier
    ? _bem(namespace, '', '', modifier)
    : ''
  const be = (block: string, element: string) => block && element
    ? _bem(namespace, block, element)
    : ''
  const bm = (block: string, modifier: string) => block && modifier
    ? _bem(namespace, block, '', modifier)
    : ''
  const em = (element: string, modifier: string) => element && modifier
    ? _bem(namespace, '', element, modifier)
    : ''
  const bem = (block: string, element: string, modifier: string) => block && element && modifier
    ? _bem(namespace, block, element, modifier)
    : ''
  const disabled = () => 'is-disabled'

  return {
    namespace,
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    disabled,
  }
}
