# Tooltip

Displays a tooltip when the mouse hovers over or clicks on an element. (If you think this component looks a lot like Popover, congratulations, you're right! Tooltip is a wrapper around Popover 😁).

## Basic Usage

The most basic tooltip.

<demo vue="../demo/tooltip/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/feat/popper/packages/components/tooltip" />

## Trigger Methods

The `trigger` attribute can be used to set different trigger methods.

<demo vue="../demo/tooltip/trigger.vue" github="https://github.com/Onion-L/onionl-ui/tree/feat/popper/packages/components/tooltip" />

## Tooltip Style

The `content-class` attribute can be used to set the style of the tooltip.

<demo vue="../demo/tooltip/content.vue" github="https://github.com/Onion-L/onionl-ui/tree/feat/popper/packages/components/tooltip" />

## Arrow

The `arrow` attribute can be used to set whether to display the arrow.

<demo vue="../demo/tooltip/arrow.vue" github="https://github.com/Onion-L/onionl-ui/tree/feat/popper/packages/components/tooltip" />

## Attributes

| Attribute Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| content-class | Content class name | `string` | `-` |
| content | Content to display | `string` | `-` |
| placement | Position where the tooltip appears | `top \| bottom \| left \| right \| top` | `top` |
| trigger | Trigger method | `hover \| click \| hover` | `hover` |
| arrow | Whether to display the arrow | `boolean` | `true` |

### Slots

| Slot Name | Description |
| --- | --- |
| default | Element that triggers the Tooltip display |
