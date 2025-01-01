# Scrollbar

Custom scrollbar component, providing a better scrolling experience.

## Basic Usage

Control the height of the scrolling area by setting the `height` property.

<demo vue="../demo/scrollbar/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/scrollbar" />

## Scroll Snap

Combining with the `ol-scroll-snap` component, scroll snap effect can be achieved. Setting the `snap` property to `both`, `x`, or `y` enables scroll snap in both horizontal and vertical directions.

<demo vue="../demo/scrollbar/snap.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/scrollbar" />

### Scrollbar Properties

| Property Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| height | Height of the scrolling area | `string \| number` | - |
| snap | Scroll snap direction, optional values are `x`, `y`, `both` | `string` | - |

### ScrollSnap Properties

| Property Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| align | Alignment of scroll snap, optional values are `start`, `center`, `end` | `string` | `center` |
