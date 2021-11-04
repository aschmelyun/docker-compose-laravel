import { onBeforeUnmount } from '@vue/composition-api'
import userAppConfig from '@core/app-config/useAppConfig'

/**
 * Collapse vertical menu when route is visited and restore the state on route leave
 */
export const useCollapseMenuOnVisit = () => {
  const { isVerticalMenuCollapsed } = userAppConfig()
  const wasVerticalMenuCollapsed = isVerticalMenuCollapsed.value

  if (!wasVerticalMenuCollapsed.value) {
    isVerticalMenuCollapsed.value = true
  }

  // Restore the original collapse value
  onBeforeUnmount(() => {
    isVerticalMenuCollapsed.value = wasVerticalMenuCollapsed
  })
}

export const _ = null
