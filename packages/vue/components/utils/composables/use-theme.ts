/**
 * provide fect-ui default theme system .
 * Author: kanno
 */

import { watch } from 'vue'
import { isBrowser } from '../format'
import { useState } from '@fect-ui/vue-hooks'
export type Theme = 'light-theme' | 'dark-theme'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') || 'light-theme')

  const themeChange = () => setTheme(theme.value === 'light-theme' ? 'dark-theme' : 'light-theme')

  watch(
    theme,
    (pre) => {
      localStorage.setItem('theme', pre)
      if (!isBrowser()) return
      const root = document.querySelector('html') as HTMLElement
      root.setAttribute('class', theme.value)
    },
    { immediate: true }
  )

  return {
    themeChange,
    theme
  }
}
