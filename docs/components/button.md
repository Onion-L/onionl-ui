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
Buttons can be used as links. Use the `to` attribute to specify the link address, or use the `link` attribute to style the button as a link.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/link.vue"  />

## Disabled State
Buttons can be set to a disabled state using the `disabled` attribute.

<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/disabled.vue"  />

## Icon Button
Buttons can contain only icons. Use the `icon` attribute to set an icon, supporting all Material Icons.

:::tip
To use icons, you need to install the Mono Icons icon set first
:::
<demo github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/button" vue="../demo/button/icon.vue"  />

## Attributes

| Attribute | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| size | Button size, can be `sm`, `md`, `lg` or a number | `string \| number` | `md` |
| link | Whether to use link style | `boolean` | `false` |
| to | Route target, supports vue-router's to attribute | `string \| RouteLocationRaw` | - |
| icon | Icon name, supports Material Icons | `string` | - |
| disabled | Whether the button is disabled | `boolean` | `false` |
