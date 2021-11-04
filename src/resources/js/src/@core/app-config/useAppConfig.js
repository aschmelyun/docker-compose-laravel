import { computed, watch } from '@vue/composition-api'
import store from '@/store'

export default function usAppConfig() {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  const isVerticalMenuCollapsed = computed({
    get: () => store.state.verticalMenu.isVerticalMenuCollapsed,
    set: val => {
      store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', val)
    },
  })

  // ------------------------------------------------
  // RTL
  // ------------------------------------------------
  const isRTL = computed({
    get: () => store.state.appConfig.layout.isRTL,
    set: val => {
      store.commit('appConfig/TOGGLE_RTL', val)
    },
  })

  // ------------------------------------------------
  // Skin
  // ------------------------------------------------
  const skin = computed({
    get: () => store.state.appConfig.layout.skin,
    set: val => {
      store.commit('appConfig/UPDATE_SKIN', val)
    },
  })

  const skinClasses = computed(() => {
    if (skin.value === 'bordered') return 'bordered-layout'
    if (skin.value === 'semi-dark') return 'semi-dark-layout'

    // Do not return any class for dark layout because dark layout updates class in body
    // Do not return any class for light layout as that is default layout
    return null
  })

  // ------------------------------------------------
  // routerTransition
  // ------------------------------------------------
  const routerTransition = computed({
    get: () => store.state.appConfig.layout.routerTransition,
    set: val => {
      store.commit('appConfig/UPDATE_ROUTER_TRANSITION', val)
    },
  })

  // *===============================================---*
  // *--------- LAYOUT ---------------------------------------*
  // *===============================================---*

  // ------------------------------------------------
  // layoutType
  // ------------------------------------------------

  const layoutType = computed({
    get: () => store.state.appConfig.layout.type,
    set: val => {
      store.commit('appConfig/UPDATE_LAYOUT_TYPE', val)
    },
  })

  // Reset skin if skin is semi-dark and move to horizontal layout
  watch(layoutType, val => {
    if (val === 'horizontal' && skin.value === 'semi-dark') skin.value = 'light'
  })

  // ------------------------------------------------
  // Content Width (Full/Boxed)
  // ------------------------------------------------
  const contentWidth = computed({
    get: () => store.state.appConfig.layout.contentWidth,
    set: val => {
      store.commit('appConfig/UPDATE_CONTENT_WIDTH', val)
    },
  })

  // ------------------------------------------------
  // isNavMenuHidden
  // ------------------------------------------------
  const isNavMenuHidden = computed({
    get: () => store.state.appConfig.layout.menu.hidden,
    set: val => {
      store.commit('appConfig/UPDATE_NAV_MENU_HIDDEN', val)
    },
  })

  // *===============================================---*
  // *--------- NAVBAR ---------------------------------------*
  // *===============================================---*

  const navbarBackgroundColor = computed({
    get: () => store.state.appConfig.layout.navbar.backgroundColor,
    set: val => {
      store.commit('appConfig/UPDATE_NAVBAR_CONFIG', { backgroundColor: val })
    },
  })

  const navbarType = computed({
    get: () => store.state.appConfig.layout.navbar.type,
    set: val => {
      store.commit('appConfig/UPDATE_NAVBAR_CONFIG', { type: val })
    },
  })

  // *===============================================---*
  // *--------- FOOTER ---------------------------------------*
  // *===============================================---*

  const footerType = computed({
    get: () => store.state.appConfig.layout.footer.type,
    set: val => {
      store.commit('appConfig/UPDATE_FOOTER_CONFIG', { type: val })
    },
  })

  return {
    isVerticalMenuCollapsed,
    isRTL,
    skin,
    skinClasses,
    routerTransition,

    // Navbar
    navbarBackgroundColor,
    navbarType,

    // Footer
    footerType,

    // Layout
    layoutType,
    contentWidth,
    isNavMenuHidden,
  }
}
