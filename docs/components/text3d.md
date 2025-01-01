# Text3D 3D Text Effect

Used to create a 3D text effect.

## Basic Usage

Set the `text` property to specify the text content to be displayed.

<demo vue="../demo/text3d/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## Customizing Layers

Set the `layer` property to specify the number of layers for the shadow, with a larger number resulting in a stronger 3D effect.

<demo vue="../demo/text3d/layer.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## Direction Control

Use the `direction` property to control the direction of the 3D effect, supporting `top-left`, `top-right`, `bottom-left`, and `bottom-right` directions.

<demo vue="../demo/text3d/direction.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## Blur Effect

Add the `blur` property to enable the blur effect for the shadow.

<demo vue="../demo/text3d/blur.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## Customizing Styles

You can customize the text style through the `color`, `shadowColor`, and `letterSpacing` properties.

<demo vue="../demo/text3d/style.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/text3d" />

## Properties

| Property Name | Description | Type | Default Value                |
|--------|------|------|---------------------------|
| text | Text content to be displayed | `string` | `—`                   |
| color | Text color | `string` | `var(--onl-primary)` |
| shadowColor | Shadow color | `string` | `var(--onl-purple-900)` |
| layer | Number of layers for the 3D effect | `number` | `5`                  |
| letterSpacing | Letter spacing | `string` | `'0'`                |
| direction | Direction of the 3D effect | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `—`                   |
| blur | Whether to enable the blur effect | `boolean` | `false`              |
