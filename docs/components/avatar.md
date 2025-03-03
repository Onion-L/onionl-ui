 # Avatar

The Avatar component is used to represent people or entities by displaying images, initials, or icons.

## Basic Usage

Avatar styles can be defined through the `size`, `shape`, `backgroundColor`, `borderRadius`, `fallbackText`, and `icon` properties.

### Size
Avatars come in 7 preset sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`. The default size is `md`.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/size.vue"  />

### Shape
There are two types of Avatars: `circle`, and `square`. The default type is `circle`.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/shape.vue"  />

### Background Color
The `backgroundColor` attribute allows you to set the background color of the avatar.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/backgroundColor.vue"  />

### Border Radius
The `borderRadius` attribute allows you to set the border radius of the avatar.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/borderRadius.vue"  />

### Fallback Text
The `fallbackText` attribute allows you to display a fallback text if the image fails to load.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/fallback.vue"  />

### Icon
The `icon` attribute allows you to display an icon instead of an image.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/icon.vue"  />

### Outlined
The `outlined` attribute allows you to display an outlined avatar.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/outline.vue"  />

## Attributes

| Attribute | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| src | Image URL | `string` | `-` |
| alt | Alternative text for image | `string` | `-` |
| initials | Initials to show when no image | `string` | `-` |
| icon | Icon name to display | `string` | `-` |
| fallbackContent | Fallback content | `string` | `-` |
| size | Avatar size, can be `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl` | `string \| number` | `md` |
| shape | Avatar shape, can be `circle` or `square` | `string` | `circle` |
| backgroundColor | Background color | `string` | `#101` |
| borderRadius | Custom border radius | `string / number` | `-` |
| outlined | Whether avatar is outlined | `boolean` | `false` |
| outlineColor | Outline color | `string` | `#ccc` |
| outlineWidth | Outline width | `number` | `3` |
| outlineStyle | Outline style, can be `solid` or `gradient` | `string` | `solid` |
| outlineGradient | Outline gradient | `string` | `linear-gradient(45deg, #3b82f6, #8b5cf6)` |
| clickable | Whether avatar is interactive | `boolean` | `false` |
| ariaLabel | ARIA label for accessibility | `string` | `-` |

### Events

| Name | Description | Parameters |
|------|-------------|------------|
| click | Triggered when clicked (only if clickable is true) | (event: MouseEvent) |
| error | Triggered when image fails to load | - |
