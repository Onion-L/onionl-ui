# Switch

A switch component used to toggle between two states.

## Basic Usage

Bind a `boolean` variable using `v-model`.

<demo vue="../demo/switch/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/switch"/>

## Disabled State

Specify whether the Switch component is disabled using the `disabled` attribute.

<demo vue="../demo/switch/disabled.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/switch"/>

## Size

Provides three sizes for the switch: `large`, `default`, and `small`.

<demo vue="../demo/switch/size.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/switch"/>

## Before Switch Hook

Use the `before-switch` attribute to execute specific logic before switching. This function needs to return a `Promise`.

<demo vue="../demo/switch/before.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/switch"/>

## Attributes

| Attribute Name | Description | Type | Default Value |
|---------------|-------------|------|---------------|
| v-model | Bound value | `boolean` | `false` |
| disabled | Whether disabled | `boolean` | `false` |
| size | Switch size | `'large' \| 'default' \| 'small'` | `'default'` |
| checked | Whether checked | `boolean` | `false` |
| before-switch | Hook function before switching | `() => Promise<boolean>` | `() => Promise.resolve(true)` |

## Events

| Event Name | Description | Callback Parameters |
|------------|-------------|---------------------|
| change | Triggered when the state changes | `(value: boolean)` |
| click | Triggered when clicked | `(value: boolean)` |
