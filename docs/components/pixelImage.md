# PixelImage

The PixelImage component is used to create pixel-style image effects, transforming ordinary images into pixelated retro styles.

## Basic Usage

By providing an image URL, you can create a basic pixelated image.

<demo vue="../demo/pixelImage/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/pixelImage" />

## Custom Spacing

You can control the spacing between pixel blocks using the `pixelGap` property.

<demo vue="../demo/pixelImage/gap.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/pixelImage" />

## Custom Pixel Size

You can control the degree of pixelation using the `pixelSize` property. The larger the value, the larger the pixel blocks.

<demo vue="../demo/pixelImage/size.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/pixelImage" />

## Custom Viewport Size

You can customize the viewport size using the `viewport-width` and `viewport-height` properties.

<demo vue="../demo/pixelImage/viewport.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/pixelImage" />

## Properties

| Property Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| width | Image width | `number` | `200` |
| height | Image height | `number` | `200` |
| pixelSize | Pixel block size | `number` | `4` |
| src | Image URL | `string` | `-` |
| pixelGap | Pixel block spacing | `number` | `4` |

### Notes

1. The component inherits all attributes of the native `img` tag.
2. For the best results, it is recommended to use images with moderate resolution.
3. The larger the `pixelSize` value, the higher the degree of pixelation. It is recommended to adjust according to actual needs.
4. The component currently does not support online images; local images are required.
