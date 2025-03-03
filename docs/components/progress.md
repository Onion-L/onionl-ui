# Progress

Used to display the current progress of an operation.

## Basic Usage

Set the progress bar percentage through the `value` attribute.

<demo vue="../demo/progress/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/progress" />

## Displaying Labels

Setting the `label` attribute can display a percentage label on the right side of the progress bar.

<demo vue="../demo/progress/label.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/progress" />

## Reverse Progress Bar

Setting the `reverse` attribute can make the progress bar display from right to left.

<demo vue="../demo/progress/reverse.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/progress" />

## Customizing Label Content

The `label` slot can be used to customize the label content.

<demo vue="../demo/progress/slot.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/progress" />

### Attributes

| Attribute Name | Description | Type | Default Value |
|---------------|-------------|------|----------------|
| value | Progress percentage | `number` | `0` |
| reverse | Whether to reverse | `boolean` | `false` |
| label | Whether to display labels | `boolean` | `false` |

### Slots

| Slot Name | Description |
|-----------|-------------|
| label | Custom label content |
