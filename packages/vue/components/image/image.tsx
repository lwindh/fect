import { computed, watchEffect, CSSProperties, defineComponent } from 'vue'
import { useState } from '@fect-ui/vue-hooks'
import { createName, isNumber } from '../utils'
import Skeleton from '../skeleton'
import SkeletonItem from '../skeleton-item'
import './index.less'

const name = createName('Image')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      default: ''
    },
    skeleton: Boolean,
    maxDelay: {
      type: [String, Number],
      default: 3000
    },
    width: {
      type: [Number, String],
      default: 'auto'
    },
    height: {
      type: [Number, String],
      default: 'auto'
    }
  },
  setup(props, { attrs }) {
    const [loading, setLoading] = useState<boolean>(true)
    const [showSkeleton, setShowSkeleton] = useState<boolean>(props.skeleton)

    watchEffect((onInvalidate) => {
      // user may pass  a non-number. In order to avoid program errors, we need to give a default value.
      const delay = isNumber(props.maxDelay) ? Number(props.maxDelay) : 3000

      let timer: number | undefined
      if (showSkeleton.value) {
        setLoading(false)
        timer = window.setTimeout(() => {
          setShowSkeleton(false)
          setLoading(true)
        }, delay)
      }
      onInvalidate(() => {
        timer && window.clearTimeout(timer)
      })
    })

    const setStyle = computed(() => {
      const { width, height } = props
      const style: CSSProperties = {
        width,
        height
      }
      return style
    })

    const slots = {
      // ...setStyle.value ,
      default: () => <img src={props.src} width={props.width} height={props.height} {...attrs} />,
      skeleton: () => <SkeletonItem variable="image" style={{ marginTop: 0, ...setStyle.value }} />
    }

    return () => (
      <div class="fect-image" style={{ ...setStyle.value, overflow: showSkeleton.value ? 'visible' : 'hidden' }}>
        <Skeleton loading={loading.value} v-slots={slots}></Skeleton>
      </div>
    )
  }
})
