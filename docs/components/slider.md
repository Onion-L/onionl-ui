# Slider

The slider component allows users to select a value within a fixed range.

## Basic Usage

Select a value by dragging the slider.

<demo vue="../demo/slider/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/slider" />

## Dual Range

<demo vue="../demo/slider/DualRangeSlider.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/slider"/>

## Attributes

| Attribute Name | Description | Type | Default Value |
|---------------|-------------|------|----------------|
| modelValue | Bound value | `number` | `0` |
| min | Minimum value | `number` | `0` |
| max | Maximum value | `number` | `100` |
| step | Step size | `number` | `1` |
| vertical | Whether to use vertical mode | `boolean` | `false` |
| disabled | Whether to disable the slider | `boolean` | `false` |
