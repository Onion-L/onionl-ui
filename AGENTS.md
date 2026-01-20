# Agentic Coding Guidelines for Onionl-UI

This document provides context and rules for AI agents working on the Onionl-UI codebase.

## 1. Environment & Commands

- **Package Manager**: `pnpm`
- **Monorepo Structure**: `packages/` directory managed via pnpm workspaces.
  - `packages/components/`: Individual UI components.
  - `packages/onionl-ui/`: Main entry point.
  - `packages/utils/`: Shared utilities.

### Key Commands

| Command              | Description                           |
| -------------------- | ------------------------------------- |
| `pnpm install`       | Install dependencies                  |
| `pnpm dev`           | Start development server (Playground) |
| `pnpm build`         | Build all packages                    |
| `pnpm build:package` | Build component library               |
| `pnpm lint`          | Run ESLint (Antfu config)             |
| `pnpm lint:fix`      | Fix linting errors                    |
| `pnpm type-check`    | Run Vue/TS type checking              |
| `pnpm test`          | Run all tests (Vitest)                |
| `pnpm coverage`      | Run tests with coverage               |

### Running a Single Test

To run a test for a specific component:

```bash
pnpm test packages/components/button/__test__/button.spec.ts
# or partial match
pnpm test button.spec.ts
```

## 2. Project Structure & Naming Conventions

### Component Structure

Each component resides in `packages/components/<componentName>/` with the following structure:

```
packages/components/button/
├── index.ts                # Entry point exporting the component
├── src/
│   ├── button.vue          # Vue component implementation
│   └── button.ts           # Prop types and interface definitions
└── __test__/
    └── button.spec.ts      # Vitest tests
```

### Naming Rules

- **Directories**: camelCase (e.g., `button`, `draggableList`, `contextMenu`).
- **Files**: camelCase (e.g., `button.vue`, `draggableList.vue`).
- **Component Names**: PascalCase with `Ol` prefix in `defineOptions` (e.g., `OlButton`, `OlDraggableList`).
- **CSS Classes**: BEM-style generated via `useNamespace`.
  - Namespace: `ol`
  - Block: kebab-case of component (e.g., `ol-button`, `ol-draggable-list`)
  - Modifier: `ol-button--primary` (handled by `ns.m()`, `ns.e()`, etc.)

## 3. Code Style & Patterns

This project uses **@antfu/eslint-config**. All agents MUST follow these rules.

### TypeScript & Vue

- **Strict Mode**: `strict: true` is enabled. No `any` unless absolutely necessary.
- **Composition API**: Use `<script lang="ts" setup>`.
- **Props**: Define props in a separate `.ts` file (e.g., `button.ts`) using `interface`.
  - Import types in `.vue` and use `defineProps<Props>()`.
  - Use `withDefaults` to set default values.
- **Emits**: Use `defineEmits`.
- **Styling**:
  - Use `clsx` for class merging.
  - Use `useNamespace` hook from `@onionl-ui/utils` for class generation.
  - Example: `const ns = useNamespace('button')` -> `ns.b()` = `ol-button`.

### Formatting (Strictly Enforced)

- **Quotes**: Single quotes (`'`).
- **Semi-colons**: NO semi-colons (`console.log('hello')`).
- **Trailing Commas**: Always use trailing commas in multiline objects/arrays.
- **Imports**: Sorted automatically.

### Example Component (`button.vue`)

```vue
<script lang="ts" setup>
import type { ButtonProps } from './button'
import { useNamespace } from '@onionl-ui/utils'
import clsx from 'clsx'
import { computed } from 'vue'

defineOptions({
  name: 'OlButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
})

const emit = defineEmits(['click'])
const ns = useNamespace('button')

const classes = computed(() => {
  return clsx(ns.b(), ns.m(props.type))
})

function handleClick(e: MouseEvent) {
  emit('click', e)
}
</script>

<template>
  <button :class="classes" @click="handleClick">
    <slot />
  </button>
</template>
```

## 4. Testing Guidelines

- **Library**: Vitest + @vue/test-utils.
- **Location**: `__test__` directory inside the component folder.
- **Pattern**:
  - Use `describe` to group tests by component.
  - Use `it` for test cases.
  - Use `mount` to render components.
  - Test for:
    - Default rendering (classes, text).
    - Props (variants, sizes, etc.).
    - Events (clicks, inputs).
    - Slots.

### Example Test

```ts
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../src/button.vue'

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = mount(Button, { slots: { default: 'Click me' } })
    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.classes()).toContain('ol-button')
  })
})
```

## 5. Agent Workflow

1.  **Explore**: Before making changes, check `packages/components/` for similar components to mimic.
2.  **Implement**: Follow the file structure and naming conventions strictly.
3.  **Verify**:
    - Run `pnpm lint:fix` to ensure code style compliance.
    - Run `pnpm type-check` to catch TS errors.
    - Run `pnpm test <path>` to verify logic.
