# Marquee

The marquee component is used to create a looping scrolling text or content display effect.

## Basic Usage

Pass the content to be scrolled through the default slot.

<demo vue="../demo/marquee/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/marquee" />

## Vertical Scrolling

Setting the `vertical` attribute can achieve vertical scrolling.

<demo vue="../demo/marquee/vertical.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/marquee" />

## Properties

| Property | Description | Type | Default |
|--------|------|------|---------|
| duration | Time required for one scroll (seconds) | `number` | `20` |
| reverse | Whether to scroll in reverse | `boolean` | `false` |
| gap | Spacing between scrolling content | `string` | `'8px'` |
| height | Component height | `string` | `'100%'` |
| vertical | Whether to scroll vertically | `boolean` | `false` |
