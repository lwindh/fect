import { PropType } from 'vue'
import { NormalSizes } from '../utils'

export const props = {
  modelValue: {
    type: [String, Number, Array] as PropType<string | string[]>,
    default: ''
  },
  value: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  multiple: Boolean,
  size: {
    type: String as PropType<NormalSizes>,
    default: 'medium'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  disabled: Boolean
}
