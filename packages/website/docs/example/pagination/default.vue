<template>
  <div>
    <fe-pagination v-model="initialPage" count="10"></fe-pagination>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ExPaginationDefault',
  setup() {
    const initialPage = ref(1)
    return { initialPage }
  }
}
</script>
