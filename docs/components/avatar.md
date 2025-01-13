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
The `backgroundColor` property allows you to set the background color of the avatar.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/backgroundColor.vue"  />

### Border Radius
The `borderRadius` property allows you to set the border radius of the avatar.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/borderRadius.vue"  />

### Fallback Text
The `fallbackText` property allows you to display a fallback text if the image fails to load.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/fallback.vue"  />

### Icon
The `icon` property allows you to display an icon instead of an image.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/icon.vue"  />

### Outlined
The `outlined` property allows you to display an outlined avatar.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/outline.vue"  />

## Customization
Besides preset sizes, you can pass in numbers to customize Avatar sizes. The default range is 1-20, which can be modified by setting the range field in the component preset.
```JavaScript
    onionlUIPreset({ range: 25 }),
```

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/avatar" vue="../demo/avatar/custom.vue"  />

## Properties

| Property | Description | Type | Accepted Values | Default |
|----------|-------------|------|-----------------|---------|
| src | Image URL | string | - | - |
| alt | Alternative text for image | string | - | - |
| initials | Initials to show when no image | string | - | - |
| icon | Icon name to display | string | - | - |
| fallbackContent | Fallback content | string | - | - |
| size | Avatar size | string | 'xs' / 'sm' / 'md' / 'lg' / 'xl' / '2xl' / '3xl' / number | 'md' |
| shape | Avatar shape | string | 'circle' / 'square' | 'circle' |
| backgroundColor | Background color | string | - | '#101' |
| borderRadius | Custom border radius | string / number | - | - |
| outlined | Whether avatar is outlined | boolean | true / false | false |
| outlineColor | Outline color | string | - | '#ccc' |
| outlineWidth | Outline width | number | - | 3 |
| outlineStyle | Outline style | string | 'solid' / 'gradient' | 'solid' |
| outlineGradient | Outline gradient | string | - | 'linear-gradient(45deg, #3b82f6, #8b5cf6)' |
| clickable | Whether avatar is interactive | boolean | true / false | false |
| ariaLabel | ARIA label for accessibility | string | - | - |

### Events

| Name | Description | Parameters |
|------|-------------|------------|
| click | Triggered when clicked (only if clickable is true) | (event: MouseEvent) |
| error | Triggered when image fails to load | - |
