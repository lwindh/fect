const path = import.meta.globEager('../../docs/zh-cn/components/*.md')
const guide = import.meta.globEager('../../docs/zh-cn/guide/*.md')
import { collectRoute, RouteTempalte } from './basic-route'

const guideRoutes = collectRoute(guide)

const compoentRoutes = collectRoute(path)

export const zhRoutes = RouteTempalte(compoentRoutes, guideRoutes, 'zh-cn')
