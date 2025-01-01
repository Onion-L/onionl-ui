 # Button

The Button component is a fundamental interactive component used to trigger actions. Onionl UI provides buttons in various sizes and types to meet different scenario needs.

## Basic Usage

Button styles can be defined through the `size` and `type` properties.

### Size
Buttons come in 7 preset sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`. The default size is `md`.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/size.vue"  />

### Type
There are three types of buttons: `primary`, `secondary`, and `outline`. The default type is `primary`.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/basic.vue"  />

## Link Button
Buttons can be used as links. Use the `to` property to specify the link address, or use the `link` property to style the button as a link.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/link.vue"  />

## Disabled State
Buttons can be set to a disabled state using the `disabled` property.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/disabled.vue"  />

## Icon Button
Buttons can contain only icons. Use the `icon` property to set an icon, supporting all Material Icons.

:::tip
To use icons, you need to install the Mono Icons icon set first
:::
<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/icon.vue"  />

## Customization
Besides preset sizes, you can pass in numbers to customize button sizes. The default range is 1-20, which can be modified by setting the range field in the component preset.
```JavaScript
    onionlUIPreset({ range: 25 }),
```

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/custom.vue"  />

## Properties

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| size | Button size, can be `sm`, `md`, `lg` or a number | `string \| number` | `md` |
| link | Whether to use link style | `boolean` | `false` |
| to | Route target, supports vue-router's to property | `string \| RouteLocationRaw` | - |
| icon | Icon name, supports Material Icons | `string` | - |
| disabled | Whether the button is disabled | `boolean` | `false` |
