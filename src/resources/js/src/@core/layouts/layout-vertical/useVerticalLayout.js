import { ref, computed, watch } from '@vue/composition-api'
import store from '@/store'

export default function useVerticalLayout(navbarType, footerType) {
  const isVerticalMenuActive = ref(true)
  const toggleVerticalMenuActive = () => {
    isVerticalMenuActive.value = !isVerticalMenuActive.value
  }

  const currentBreakpoint = ref('xl')

  const isVerticalMenuCollapsed = computed(() => store.state.verticalMenu.isVerticalMenuCollapsed)

  const layoutClasses = computed(() => {
    const classes = []

    if (currentBreakpoint.value === 'xl') {
      classes.push('vertical-menu-modern')
      classes.push(isVerticalMenuCollapsed.value ? 'menu-collapsed' : 'menu-expanded')
    } else {
      classes.push('vertical-overlay-menu')
      classes.push(isVerticalMenuActive.value ? 'menu-open' : 'menu-hide')
    }

    // Navbar
    classes.push(`navbar-${navbarType.value}`)

    // Footer
    if (footerType.value === 'sticky') classes.push('footer-fixed')
    if (footerType.value === 'static') classes.push('footer-static')
    if (footerType.value === 'hidden') classes.push('footer-hidden')

    return classes
  })

  // ------------------------------------------------
  // Resize handler for Breakpoint
  // ------------------------------------------------
  watch(currentBreakpoint, val => {
    isVerticalMenuActive.value = val === 'xl'
  })

  const resizeHandler = () => {
    // ? This closes vertical menu when title bar is shown/hidden in mobile browsers.
    // ? We will watch for breakpoint to overcome this issue
    // isVerticalMenuActive.value = window.innerWidth >= 1200

    // ! You can use store getter to get breakpoint
    if (window.innerWidth >= 1200) currentBreakpoint.value = 'xl'
    else if (window.innerWidth >= 992) currentBreakpoint.value = 'lg'
    else if (window.innerWidth >= 768) currentBreakpoint.value = 'md'
    else if (window.innerWidth >= 576) currentBreakpoint.value = 'sm'
    else currentBreakpoint.value = 'xs'
  }

  const overlayClasses = computed(() => {
    if (currentBreakpoint.value !== 'xl' && isVerticalMenuActive.value) return 'show'
    return null
  })

  const navbarTypeClass = computed(() => {
    if (navbarType.value === 'sticky') return 'fixed-top'
    if (navbarType.value === 'static') return 'navbar-static-top'
    if (navbarType.value === 'hidden') return 'd-none'
    return 'floating-nav'
  })

  const footerTypeClass = computed(() => {
    if (footerType.value === 'static') return 'footer-static'
    if (footerType.value === 'hidden') return 'd-none'
    return ''
  })

  return {
    isVerticalMenuActive,
    toggleVerticalMenuActive,
    isVerticalMenuCollapsed,
    layoutClasses,
    overlayClasses,
    navbarTypeClass,
    footerTypeClass,
    resizeHandler,
  }
}
