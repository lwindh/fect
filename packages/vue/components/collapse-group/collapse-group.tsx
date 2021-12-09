import { PropType, Ref, watch, defineComponent } from 'vue'
import { createProvider, useState } from '@fect-ui/vue-hooks'
import { createName } from '../utils'
import './index.less'

export const READONLY_COLLAPSE_KEY = 'collapseKey'

export type CollapseProvide = {
  checked: Ref<number[]>
  setCurrentChecked: (index: number) => void
}

const name = createName('CollapseGroup')

export default defineComponent({
  name,
  props: {
    accordion: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: [Array] as PropType<number[]>,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { provider } = createProvider(READONLY_COLLAPSE_KEY)

    const [checked, setChecked] = useState<number[]>(props.modelValue)

    const setCurrentChecked = (idx: number) => {
      const children = checked.value.slice()
      const index = children.indexOf(idx)
      const exist = index !== -1
      if (exist) {
        children.splice(index, 1)
      }
      if (!exist) {
        if (props.accordion) children.length = 0
        children.push(idx)
      }

      setChecked(children)
    }

    provider({ checked, setCurrentChecked })

    watch(checked, (cur) => emit('update:modelValue', cur))

    return () => <div class="fect-collapse__group"> {slots.default?.()}</div>
  }
})
