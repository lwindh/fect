import { computed, PropType, defineComponent } from 'vue'
import { hasEmptry, createName, UnknowProp, NormalSizes } from '../utils'
import './index.less'

const name = createName('Switch')

interface SwitchEventTarget {
  checked: unknown // may be any value
}

export interface SwitchEvent {
  target: SwitchEventTarget
  stopPropagation: () => void
  preventDefault: () => void
  nativeEvent: Event
}

export default defineComponent({
  name,
  props: {
    modelValue: UnknowProp,
    checkedValue: {
      type: UnknowProp,
      default: true,
    },
    inactiveValue: {
      type: UnknowProp,
      default: false,
    },
    size: {
      type: String as PropType<NormalSizes>,
      default: 'medium',
    },
    disabled: Boolean,
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const isChecked = () => props.modelValue === props.checkedValue

    const changeHandler = (e: Event) => {
      const reverse = isChecked() ? props.inactiveValue : props.checkedValue
      emit('update:modelValue', reverse)
      const selfEvent: SwitchEvent = {
        target: {
          checked: props.modelValue,
        },
        stopPropagation: e.stopPropagation,
        preventDefault: e.preventDefault,
        nativeEvent: e,
      }
      emit('change', selfEvent)
    }

    const switchHandler = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      const { modelValue, disabled } = props
      const isEmpty = hasEmptry(modelValue)
      if (isEmpty || disabled) return
      changeHandler(e)
    }

    const setClass = computed(() => {
      const names: string[] = []
      props.size && names.push(props.size)
      props.disabled && names.push('disabled')
      isChecked() && names.push('checked')
      return names.join(' ')
    })

    return () => (
      <label class={`fect-switch ${setClass.value}`} onClick={switchHandler}>
        <input
          class={`fect-switch__checkbox ${props.size}`}
          type="checkBox"
          checked={isChecked()}
          disabled={props.disabled}
          onChange={changeHandler}
        />
        <div class={`fect-switch__slider ${setClass.value}`}></div>
      </label>
    )
  },
})
