import { defineComponent, computed, Slot } from 'vue'
import { createProvider } from '@fect-ui/vue-hooks'
import { createName, CustomCSSProperties } from '../utils'
import { props } from './props'
import { READONLY_GRID_GROUP_KEY } from './type'
import { Grid } from '../grid'
import { getDynamicStyle, getBasisStyle, getUnitGapStyle, getDynamicLayoutClass } from './style'

import './index.less'

const name = createName('GridGroup')

const getGridStyle = (col: number): CustomCSSProperties => {
  col = Math.abs(col) > 24 ? 24 : col
  const width = 100 / col
  return {
    '--grid-width': `${width}%`,
  }
}

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const { provider } = createProvider(READONLY_GRID_GROUP_KEY)

    const useGrid = computed(() => {
      if (props.col === 0) return false
      return true
    })

    const setGroupStyle = computed(() => {
      const { alignContent, alignItems, direction, justify, gap, col, xs, sm, md, lg, xl } = props
      const basisStyle = getBasisStyle({ alignContent, alignItems, direction, justify })
      const gapStyle = getUnitGapStyle(gap)
      // work with dynamic system
      const style = { ...basisStyle, ...gapStyle }
      if (!useGrid.value) return Object.assign(style, getDynamicStyle({ xs, sm, md, lg, xl }))
      const gridStyle = getGridStyle(col)
      return { ...style, ...gridStyle }
    })

    const setGroupClass = computed(() => {
      const basisClass = 'fect-grid__group'
      const { xs, sm, md, lg, xl } = props
      if (useGrid.value) return ''
      return getDynamicLayoutClass({ xs, sm, md, lg, xl }, basisClass)
    })

    const setWrapperClass = computed(() => {
      const { wrap } = props
      if (!useGrid.value) return `fect-grid__group--${wrap}`
      return 'fect-grid__group--wrap'
    })

    provider({ useGrid })

    const renderGrids = (content: Slot) => {
      const { count } = props
      if (typeof count === 'number') {
        const Grids: Array<JSX.Element | null> = []
        Grids.length = count
        return Grids.fill(null).map((_, idx) => <Grid key={idx}>{content(idx)}</Grid>)
      }
      return count.map((_, idx) => <Grid key={idx}>{content(_)}</Grid>)
    }

    return () => {
      const hasGrid = slots['grid']
      return (
        <div class={`fect-grid__group ${setWrapperClass.value} ${setGroupClass.value}`} style={setGroupStyle.value}>
          {hasGrid ? renderGrids(hasGrid) : slots.default?.()}
        </div>
      )
    }
  },
})
