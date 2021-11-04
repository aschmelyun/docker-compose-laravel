// eslint-disable-next-line object-curly-newline
import { ref, watch, inject, computed } from '@vue/composition-api'
import store from '@/store'
import { isNavGroupActive } from '@core/layouts/utils'

export default function useVerticalNavMenuGroup(item) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  const isVerticalMenuCollapsed = computed(() => store.state.verticalMenu.isVerticalMenuCollapsed)

  watch(isVerticalMenuCollapsed, val => {
    /* eslint-disable no-use-before-define */
    // * Handles case if routing is done outside of vertical menu
    // i.e. From Customizer Collapse or Using Link
    if (!isMouseHovered.value) {
      if (val) isOpen.value = false
      else if (!val && isActive.value) isOpen.value = true
    }
    /* eslint-enable */
  })

  // ------------------------------------------------
  // isMouseHovered
  // ------------------------------------------------
  const isMouseHovered = inject('isMouseHovered')

  // Collapse menu when menu is collapsed and show on open
  watch(isMouseHovered, val => {
    if (isVerticalMenuCollapsed.value) {
      // * we have used `val && val && isActive.value` to only open active menu on mouseEnter and close all menu on mouseLeave
      // * If we don't use `isActive.value` with `val` it can open other groups which are not active as well
      // eslint-disable-next-line no-use-before-define
      isOpen.value = val && isActive.value
    }
  })

  // ------------------------------------------------
  // openGroups
  // ------------------------------------------------
  const openGroups = inject('openGroups')

  // Collapse other groups if one group is opened
  watch(openGroups, currentOpenGroups => {
    const clickedGroup = currentOpenGroups[currentOpenGroups.length - 1]

    // If current group is not clicked group or current group is not active => Proceed with closing it
    // eslint-disable-next-line no-use-before-define
    if (clickedGroup !== item.title && !isActive.value) {
      // If clicked group is not child of current group
      // eslint-disable-next-line no-use-before-define
      if (!doesHaveChild(clickedGroup)) isOpen.value = false
    }
  })

  // ------------------------------------------------
  // isOpen
  // ------------------------------------------------
  const isOpen = ref(false)
  watch(isOpen, val => {
    // if group is opened push it to the array
    if (val) openGroups.value.push(item.title)
  })

  const updateGroupOpen = val => {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val
  }

  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  const isActive = ref(false)
  watch(isActive, val => {
    /*
      If menu is collapsed and not hovered(optional) then don't open group
    */
    if (val) {
      if (!isVerticalMenuCollapsed.value) isOpen.value = val
    } else {
      isOpen.value = val
    }
  })

  const updateIsActive = () => {
    isActive.value = isNavGroupActive(item.children)
  }

  // ------------------------------------------------
  // Other Methods
  // ------------------------------------------------

  const doesHaveChild = title => item.children.some(child => child.title === title)

  return {
    isOpen,
    isActive,
    updateGroupOpen,
    openGroups,
    isMouseHovered,
    updateIsActive,
  }
}
