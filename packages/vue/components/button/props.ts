import { PropType } from 'vue'
import { NormalSizes, ButtonTypes, LoadingTypes, UnknowProp } from '../utils'

export const props = {
  type: {
    type: String as PropType<ButtonTypes>,
    default: 'default',
  },
  size: {
    type: String as PropType<NormalSizes>,
    default: 'medium',
  },
  ghost: Boolean,
  loading: Boolean,
  shadow: Boolean,
  auto: Boolean,
  disabled: Boolean,
  icon: UnknowProp,
  loadType: {
    type: String as PropType<LoadingTypes>,
    default: 'deafult',
  },
  effect: {
    type: Boolean,
    default: true,
  },
}
