import type { PropType } from 'vue'
import { CHANGE_EVENT, CLICK_EVENT, MODEL_VALUE_UPDATE } from '@onionl-ui/components/constant'
import { isBoolean } from '@onionl-ui/utils'

export const SwitchProps = {
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'default',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  beforeSwitch: {
    type: Function as PropType<() => Promise<boolean>>,
    default: () => Promise.resolve(true),
  },
}

export const SwitchEmits = {
  [MODEL_VALUE_UPDATE]: (value: boolean) => isBoolean(value),
  [CHANGE_EVENT]: (value: boolean) => isBoolean(value),
  [CLICK_EVENT]: (value: boolean) => isBoolean(value),
}
