# Input

Basic form input component that supports prefix, suffix icons, and other features.

## Basic Usage

<demo vue="../demo/input/basic.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## Icon

Set the prefix and suffix icons of the input box through the `prefix` and `suffix` properties.

<demo vue="../demo/input/icon.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## Password

Create a password input box by setting `type="password"`.

<demo vue="../demo/input/password.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## Disabled State
Set the input box to a disabled state by setting the `disabled` attribute.

<demo vue="../demo/input/disabled.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## Formatted Input

Format the input content by setting the `mask` attribute. For example, it can be used to format phone numbers, dates, etc. (Setting the `mask` attribute requires setting `type='text'`).

<demo vue="../demo/input/mask.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

### Regular Expressions

You can limit the format of the input content using regular expressions. For example, the following example limits the input to only numbers starting with 1-6 and up to 6 digits.

<demo vue="../demo/input/mask-regex.vue" github="https://github.com/Onion-L/onionl-ui/tree/main/packages/components/input" />

## Attributes

| Attribute Name      | Description           | Type                | Default Value  |
|-------------------|-----------------------|---------------------|---------------|
| type               | Input box type        | `'text' \| 'password'`| `'text'`      |
| placeholder        | Input box placeholder text | `string`            | `-`          |
| disabled           | Whether to disable    | `boolean`           | `false`      |
| prefix             | Prefix icon           | `string`            | `-`          |
| suffix             | Suffix icon           | `string`            | `-`          |
| mask               | Input formatting rule | `string`            | `-`          |
| modelValue         | Bound value           | `string \| number`  | `-`          |
