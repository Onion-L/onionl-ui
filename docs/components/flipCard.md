# FlipCard Flip Card

The FlipCard component provides a flipable card interface, supporting the display of content on both sides.

## Basic Usage

Control the flip state of the card using the `flipped` property, and set the content of both sides using the `front` and `back` properties respectively.

<demo vue="../demo/flipCard/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/flipCard" />

## Properties

| Property Name | Type | Default Value | Description |
|---------------|------|--------------|-------------|
| flipped | `boolean` | `false` | Controls whether the card is flipped |
| class | `string \| object \| array` | - | Custom class |
| front | `Component` | - | Component displayed on the front of the card |
| back | `Component` | - | Component displayed on the back of the card |
