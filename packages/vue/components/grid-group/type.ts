import { ComputedRef } from 'vue'
import { tuple } from '../utils'

const justifyTypes = tuple('flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly')

const alignTypes = tuple('flex-start', 'center', 'flex-end', 'stretch', 'baseline')

const alignContentTypes = tuple('stretch', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around')

const directionTypes = tuple('row', 'row-reverse', 'column', 'column-reverse')

const wrapTypes = tuple('nowrap', 'wrap', 'wrap-reverse')

export const gridTypes = tuple('xs', 'sm', 'md', 'lg', 'xl')

export type JustifyTypes = typeof justifyTypes[number]

export type AlignTypes = typeof alignTypes[number]

export type AlignContentTypes = typeof alignContentTypes[number]

export type WrapTypes = typeof wrapTypes[number]

export type DirectionTypes = typeof directionTypes[number]

export type GridTypes = typeof gridTypes[number]

export const READONLY_GRID_GROUP_KEY = Symbol('grdiGroup')

export type GridGroupProvide = {
  useGrid: ComputedRef<boolean>
}
