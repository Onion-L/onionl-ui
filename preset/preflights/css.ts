export const defaultColors = {
  dark: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#6c757d',
    600: '#495057',
    700: '#343a40',
    800: '#212529',
    900: '#000000',
  },
  light: {
    50: '#ffffff',
    100: '#fafafa',
    200: '#f5f5f5',
    300: '#e5e5e5',
    400: '#d4d4d4',
    500: '#a3a3a3',
    600: '#737373',
    700: '#525252',
    800: '#404040',
    900: '#262626',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  purple: {
    50: '#f6f2ff', // 最浅，适合背景
    100: '#ede5ff', // 适合 hover 背景
    200: '#e2d4ff', // 适合禁用状态
    300: '#c8abfa', // 原来的主色
    400: '#b18ef2', // 适合普通状态
    500: '#9b6ff0', // 主要强调色
    600: '#8550ed', // 适合 hover 状态
    700: '#6e35d9', // 适合激活状态
    800: '#5a23c8', // 深色文本
    900: '#4a1ba8', // 最深，特殊强调
  },
  gray: {
    50: '#ffffff',
    100: '#fafafa',
    200: '#f5f5f5',
    300: '#f0f0f0',
    400: '#d9d9d9',
    500: '#bfbfbf',
    600: '#8c8c8c',
    700: '#595959',
    800: '#434343',
    900: '#262626',
  },
}

const themes = {
  primary: {
    DEFAULT: 'var(--onl-purple-500)',
    text: 'var(--onl-light-50)',
    hover: 'var(--onl-purple-300)',
    border: 'transparent',
  },
  secondary: {
    DEFAULT: 'var(--onl-light-50)',
    text: 'var(--onl-purple-500)',
    hover: 'var(--onl-light-300)',
    border: 'transparent',
  },
  outline: {
    DEFAULT: 'transparent',
    text: 'var(--onl-purple-500)',
    hover: 'var(--onl-purple-300)',
    border: 'var(--onl-purple-300)',
  },
  disabled: {
    DEFAULT: '#f0f0f05e',
  },
  contextmenu: {
    DEFAULT: 'var(--onl-light-50)',
    text: 'var(--onl-dark-900)',
    hover: 'var(--onl-light-300)',
    border: 'transparent',
  },
}

const darkThemes = {
  primary: {
    DEFAULT: 'var(--onl-purple-400)',
    text: 'var(--onl-dark-900)',
    hover: 'var(--onl-purple-600)',
    border: 'transparent',
  },
  secondary: {
    DEFAULT: 'var(--onl-dark-800)',
    text: 'var(--onl-light-50)',
    hover: 'var(--onl-dark-700)',
    border: 'transparent',
  },
  outline: {
    DEFAULT: 'transparent',
    text: 'var(--onl-purple-400)',
    hover: 'var(--onl-purple-600)',
    border: 'var(--onl-purple-600)',
  },
  contextmenu: {
    DEFAULT: 'var(--onl-gray-800)',
    text: 'var(--onl-light-50)',
    hover: 'var(--onl-gray-700)',
    border: 'transparent',
  },
}

function splitCSSInject(prefix: string, key: string, value: Record<number | string, string>) {
  let res = ''
  for (const [k, v] of Object.entries(value)) {
    if (k === 'DEFAULT') {
      res += `\n--${prefix}-${key}: ${v};`
    }
    else {
      res += `\n--${prefix}-${key}-${k}: ${v};`
    }
  }
  return res
}

function generateCSSVariables(
  entries: Record<string, any>,
  selector: string,
  prefix: string,
) {
  return Object.entries(entries)
    .map(([key, value]) =>
      `\n${selector}{${splitCSSInject(prefix, key, value)}\n}`,
    )
    .join('')
}

export function getCSSVariable(colors = defaultColors, prefix: string = 'onl') {
  return [
    generateCSSVariables(colors, ':root', prefix),
    generateCSSVariables(themes, ':root', prefix),
    generateCSSVariables(darkThemes, 'html.dark', prefix),
  ].join('')
}
