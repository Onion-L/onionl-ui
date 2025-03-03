# Popover

The popover component is used to display temporary information around an element. When the user interacts with the trigger element (click or hover), the popover will display the content at the specified position.

## Basic Usage

The most basic usage of the popover.

<demo vue="../demo/popover/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## Trigger Method

Use the `trigger` slot to define the trigger element, and the popover content can be any custom content.

<demo vue="../demo/popover/trigger.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## Arrow and Position

Use the `placement` attribute to define the position of the popover, and use the `arrow` attribute to define whether the arrow is displayed.

<demo vue="../demo/popover/arrow.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## Animation Time

Use the `duration` attribute to define the animation time of the popover.

<demo vue="../demo/popover/duration.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## Offset

Use the `offset` attribute to define the offset of the popover.

<demo vue="../demo/popover/offset.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/popover" />

## Attributes

| Attribute | Description | Type | Default |
|------|------|------|--------|
| trigger | Trigger method | `'hover' \| 'click' \| 'focus'` | `'click'` |
| placement | Popover position | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` |
| arrow | Whether to display the arrow | `boolean` | `false` |
| duration | Animation duration (ms) | `number` | `200` |

### Slots

| Slot Name | Description |
|--------|------|
| trigger | Trigger element |
| default | Popover content |
