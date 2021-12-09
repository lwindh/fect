import { defineComponent, PropType } from 'vue'
import { LoadingTypes } from '../utils'
import Loading from '../loading'

const ButtonLoading = defineComponent({
  props: {
    loadType: {
      type: String as PropType<LoadingTypes>
    }
  },
  setup(props) {
    return () => (
      <div class="fect-button__loading">
        <Loading loadType={props.loadType} color="var(--button-load-color)" />
      </div>
    )
  }
})

export default ButtonLoading
