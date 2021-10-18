import { defineComponent } from 'vue'

const ImgSkeleton = defineComponent({
  props: {
    opacity: {
      type: Number,
      default: 0.5,
    },
  },
  setup(props) {
    return () => <div class="skeleton" style={{ opacity: props.opacity }}></div>
  },
})

export default ImgSkeleton
