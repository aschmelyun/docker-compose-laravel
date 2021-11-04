import { ref } from '@vue/composition-api'
import useAppConfig from '@core/app-config/useAppConfig'

export default function useAppCustomizer() {
  // Customizer
  const isCustomizerOpen = ref(false)

  // Skin
  const skinOptions = [
    { text: 'Light', value: 'light' },
    { text: 'Bordered', value: 'bordered' },
    { text: 'Dark', value: 'dark' },
    { text: 'Semi Dark', value: 'semi-dark' },
  ]

  // Content Width Options
  const contentWidthOptions = [
    { text: 'Full  Width', value: 'full' },
    { text: 'Boxed', value: 'boxed' },
  ]

  // Router Transition
  const routerTransitionOptions = [
    { title: 'Zoom Fade', value: 'zoom-fade' },
    { title: 'Fade', value: 'fade' },
    { title: 'Fade Bottom', value: 'fade-bottom' },
    { title: 'Slide Fade', value: 'slide-fade' },
    { title: 'Zoom Out', value: 'zoom-out' },
    { title: 'None', value: 'none' },
  ]

  // Router Transition
  const layoutTypeOptions = [
    { text: 'Vertical', value: 'vertical' },
    { text: 'Horizontal', value: 'horizontal' },
  ]

  // Navbar
  const navbarColors = ['', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']

  // Navbar Types
  const navbarTypes = [
    { text: 'Floating', value: 'floating' },
    { text: 'Sticky', value: 'sticky' },
    { text: 'Static', value: 'static' },
    { text: 'Hidden', value: 'hidden' },
  ]

  // Footer Types
  const footerTypes = [
    { text: 'Sticky', value: 'sticky' },
    { text: 'Static', value: 'static' },
    { text: 'Hidden', value: 'hidden' },
  ]

  // eslint-disable-next-line object-curly-newline
  const {
    isRTL,
    skin,
    contentWidth,
    routerTransition,
    layoutType,
    isNavMenuHidden,
    isVerticalMenuCollapsed,
    navbarBackgroundColor,
    navbarType,
    footerType,
  } = useAppConfig()

  return {
    // Customizer
    isCustomizerOpen,

    // Vertical Menu
    isVerticalMenuCollapsed,

    // Skin
    skin,
    skinOptions,

    // Content Width
    contentWidth,
    contentWidthOptions,

    // RTL
    isRTL,

    // routerTransition
    routerTransition,
    routerTransitionOptions,

    // Layout Type
    layoutType,
    layoutTypeOptions,

    // NavMenu Hidden
    isNavMenuHidden,

    // Navbar
    navbarColors,
    navbarTypes,
    navbarBackgroundColor,
    navbarType,

    // Footer
    footerTypes,
    footerType,
  }
}
