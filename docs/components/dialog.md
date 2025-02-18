# Dialog

The dialog component is used for popup-style interactions, supporting custom content and layout.

## Basic Usage

The basic dialog includes a mask layer, content area, and close operation.

<demo github="https://github.com/Onion-L/onionl-ui/tree/docs/packages/components/dialog" vue="../demo/dialog/basic.vue" />

## Component Structure

The Dialog component consists of the following parts:
- `<ol-dialog>`: Dialog container
- `<ol-dialog-card>`: Card-style content container
  - Inherits the structure of the Card component (Header/Content/Footer)

## Parameter Configuration

| Parameter Name | Description | Type | Default Value |
|---------------|-------------|------|----------------|
| show | Controls display | boolean | false |
| mask | Displays mask | boolean | true |
| maskClickClose | Closes on mask click | boolean | true |

## Events
- `close`: Triggered when the dialog is closed
