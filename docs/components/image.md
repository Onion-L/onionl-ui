# Image

The `Image` component is used to display images and supports various fitting modes. Below is an example of how to use the `Image` component.

## Usage Example

<demo vue="../demo/image/fit.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/image" />

## Default Slot

The `OlImage` component supports a default slot, allowing customization of the display content in error states.

<demo vue="../demo/image/error.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/image" />

## Lazy Loading

The `OlImage` component supports lazy loading. By setting the `loading` attribute to `'lazy'`, images are loaded only when they enter the viewport, improving page performance.

<demo vue="../demo/image/lazy.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/image" />

## Properties

| Property Name | Description       | Type                | Default Value |
|---------------|-------------------|---------------------|---------------|
| src           | Image source URL  | `string`            | `-`           |
| fit           | Image fit mode    | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'fill'`     |
| loading       | Image loading mode| `'eager' \| 'lazy'` | `'eager'`     |
| alt           | Image alt text    | `string`            | `-`           |

## Slots

| Slot Name   | Description                        |
|-------------|------------------------------------|
| error       | Content displayed when image fails to load |
| placeholder | Content displayed while image is loading |
