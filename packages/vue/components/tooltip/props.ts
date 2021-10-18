import { PropType } from 'vue'
import { PlacementTypes, TooltipTypes, TriggerTypes } from './type'

export const props = {
  visible: Boolean,
  content: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<TooltipTypes>,
    default: 'default',
  },
  placement: {
    type: String as PropType<PlacementTypes>,
    default: 'top',
  },
  visibleArrow: {
    type: Boolean,
    default: true,
  },
  trigger: {
    type: String as PropType<TriggerTypes>,
    default: 'hover',
  },
  showAfter: {
    type: Number,
    default: 0,
  },
  hideAfter: {
    type: Number,
    default: 0,
  },
  offset: {
    type: Number,
    default: 12,
  },
  portalClass: {
    type: String,
    default: '',
  },
}
