const elementKeys = ['button', 'icon', 'input', 'image', 'context-menu', 'context-menu-item']

export const defaultCls = ['is-disabled', ...elementKeys.map(key => `ol-${key}`)]
