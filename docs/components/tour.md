# Tour

The Tour component is used to create interactive user guidance processes, highlighting specific elements on the page and providing corresponding explanations.

## Basic Usage

The guidance process is created using the `OlTourProvider` and `OlTourStep` components.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/tour" vue="../demo/tour/basic.vue" />

## Attributes

### OlTourProvider Attributes

| Attribute | Description | Type | Default |
|----------|-------------|------|---------|
| active | Whether to display the guide | `boolean` | `false` |
| v-model:active | Two-way binding for the display state of the guide | `boolean` | `false` |

### OlTourStep Attributes

| Attribute | Description | Type | Default |
|----------|-------------|------|---------|
| index | Step index (required) | `string \| number` | `-` |
| title | Step title | `string` | `''` |
| description | Step description | `string` | `''` |
