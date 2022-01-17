import { PropType, watch, defineComponent } from 'vue'
import { useState } from '@fect-ui/vue-hooks'
import { createName } from '../utils'
import { createCollapseContext } from './collapse-context'
import './index.less'

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
    const { provider } = createCollapseContext()

    const [checked, setChecked] = useState<number[]>(props.modelValue)

    const updateCollapseGroupChecked = (idx: number) => {
      setChecked((pre) => {
        const cursor = pre.indexOf(idx)
        const exist = cursor !== -1
        if (exist) return pre.filter((item) => item !== idx)
        if (props.accordion) pre.length = 0
        return [...pre, idx]
      })
    }

    provider({ checked, updateCollapseGroupChecked })

    watch(checked, (cur) => emit('update:modelValue', cur))

    return () => <div class="fect-collapse__group"> {slots.default?.()}</div>
  }
})
