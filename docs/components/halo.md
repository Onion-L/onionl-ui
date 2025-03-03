# Halo Glow Effect

The Halo component is used to add a dynamic glow effect to its child elements, enhancing the visual appeal and depth of the user interface. This component supports customization of glow color, radius, and animation duration, offering high flexibility and customization.

## Basic Usage

Use the glow effect by wrapping content within the `<ol-halo>` tag.

<demo vue="../demo/halo/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

## Rainbow Glow Effect

You can pass an array of colors to create a gradient glow effect and set the animation time. This effect adds more visual interest and dynamism to the user interface.

<demo vue="../demo/halo/rainbow.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

## Animation Duration

You can pass an animation duration to set the glow effect's animation time. Adjusting the animation duration can affect the speed and smoothness of the glow effect, providing more customization possibilities.

<demo vue="../demo/halo/duration.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

## Custom Glow Radius

You can pass a glow radius to set the radius of the glow effect. Adjusting the glow radius can affect the range and intensity of the glow effect, providing more customization possibilities.

<demo vue="../demo/halo/radius.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

### Offset Glow Effect

You can pass offset values to set the offset position of the glow effect. Adjusting the offset values can affect the position and direction of the glow effect, providing more customization possibilities.

<demo vue="../demo/halo/offset.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/halo" />

## Attributes

| Attribute Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| is | The HTML tag to render | `string` | `'div'` |
| halo-color | Glow color, can be a single color or an array of colors | `string \| string[]` | `-` |
| duration | Animation duration (milliseconds) | `number` | `5000` |
| halo-radius | Glow radius (em) | `number` | `6` |
| offset-x | X-axis offset | `number \| string` | `0` |
| offset-y | Y-axis offset | `number \| string` | `0` |
