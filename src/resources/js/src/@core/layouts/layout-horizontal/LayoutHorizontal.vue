<template>
  <div
    class="horizontal-layout"
    :class="[layoutClasses]"
    :data-col="isNavMenuHidden ? '1-column' : null"
    style="height:inherit"
  >

    <!-- NAVBAR -->
    <b-navbar
      :style="{
        backgroundColor: navbarType === 'static' && scrolledTo && skin === 'light' ? 'white' : null,
        boxShadow: navbarType === 'static' && scrolledTo ? 'rgba(0, 0, 0, 0.05) 0px 4px 20px 0px' : null,
      }"
      :toggleable="false"
      class="header-navbar navbar-shadow align-items-center navbar-brand-center navbar-fixed"
      :class="{'fixed-top': $store.getters['app/currentBreakPoint'] !== 'xl'}"
    >
      <slot
        name="navbar"
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
      >
        <app-navbar-horizontal-layout-brand />
        <app-navbar-horizontal-layout :toggle-vertical-menu-active="toggleVerticalMenuActive" />
      </slot>
    </b-navbar>
    <!--/ NAVBAR -->

    <div class="horizontal-menu-wrapper">
      <div
        v-if="!isNavMenuHidden"
        class="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-shadow menu-border d-none d-xl-block"
        :class="[navbarMenuTypeClass]"
      >
        <horizontal-nav-menu />
      </div>

      <!-- Vertical Nav Menu -->
      <vertical-nav-menu
        :is-vertical-menu-active="isVerticalMenuActive"
        :toggle-vertical-menu-active="toggleVerticalMenuActive"
        class="d-block d-xl-none"
         :navMenuItems="verticalNavMenuItems"
      >
        <template #header="slotProps">
          <slot
            name="vertical-menu-header"
            v-bind="slotProps"
          />
        </template>
      </vertical-nav-menu>
    <!-- /Vertical Nav Menu -->
    </div>

    <!-- Vertical Nav Menu Overlay -->
    <div
      class="sidenav-overlay"
      :class="overlayClasses"
      @click="isVerticalMenuActive = false"
    />
    <!-- /Vertical Nav Menu Overlay -->

    <!-- CONTENT -->
    <!-- CONTENT TYPE: Left -->
    <transition
      :name="routerTransition"
      mode="out-in"
    >
      <component
        :is="layoutContentRenderer"
        :key="layoutContentRenderer === 'layout-content-renderer-left' ? $route.meta.navActiveLink || $route.name : null"
      >
        <template
          v-for="(index, name) in $scopedSlots"
          v-slot:[name]="data"
        >
          <slot
            :name="name"
            v-bind="data"
          />
        </template>
      </component>
    </transition>
    <!--/ Content -->
    <!--/ CONTENT -->

    <!-- Footer -->
    <footer
      class="footer footer-light"
      :class="[footerTypeClass]"
    >
      <slot name="footer">
        <app-footer />
      </slot>
    </footer>

    <slot name="customizer" />
  </div>
</template>

<script>
import AppBreadcrumb from '@core/layouts/components/AppBreadcrumb.vue'
import AppNavbarHorizontalLayout from '@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue'
import AppNavbarHorizontalLayoutBrand from '@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue'
import AppFooter from '@core/layouts/components/AppFooter.vue'
import useAppConfig from '@core/app-config/useAppConfig'
import { BNavbar } from 'bootstrap-vue'
import { useScrollListener } from '@core/comp-functions/misc/event-listeners'
import verticalNavMenuItems from '@/navigation/vertical'

import { onUnmounted } from '@vue/composition-api'

// Content Renderer
import LayoutContentRendererDefault from '@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue'
import LayoutContentRendererLeft from '@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue'
import LayoutContentRendererLeftDetached from '@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue'
import useLayoutHorizontal from './useLayoutHorizontal'
import HorizontalNavMenu from './components/horizontal-nav-menu/HorizontalNavMenu.vue'

// Vertical Menu
/* eslint-disable import/order */
import VerticalNavMenu from '@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue'
import useVerticalLayout from '@core/layouts/layout-vertical/useVerticalLayout'
import mixinLayoutHorizontal from './mixinLayoutHorizontal'
/* eslint-enable import/order */

export default {
  components: {
    AppBreadcrumb,
    AppNavbarHorizontalLayout,
    AppNavbarHorizontalLayoutBrand,
    AppFooter,
    HorizontalNavMenu,

    BNavbar,

    // Content Renderer
    LayoutContentRendererDefault,
    LayoutContentRendererLeft,
    LayoutContentRendererLeftDetached,

    // Vertical Menu
    VerticalNavMenu,
  },
  mixins: [mixinLayoutHorizontal],
  computed: {
    layoutContentRenderer() {
      const rendererType = this.$route.meta.contentRenderer
      if (rendererType === 'sidebar-left') return 'layout-content-renderer-left'
      if (rendererType === 'sidebar-left-detached') return 'layout-content-renderer-left-detached'
      return 'layout-content-renderer-default'
    },
  },
  setup() {
    const {
      skin,
      navbarType,
      footerType,
      routerTransition,
      isNavMenuHidden,
    } = useAppConfig()

    // Vertical Menu
    const {
      isVerticalMenuActive, toggleVerticalMenuActive, overlayClasses, resizeHandler,
    } = useVerticalLayout(navbarType, footerType)

    // Resize handler
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    onUnmounted(() => {
      window.removeEventListener('resize', resizeHandler)
    })

    const {
      navbarMenuTypeClass,
      layoutClasses,
      footerTypeClass,
    } = useLayoutHorizontal(navbarType, footerType, isVerticalMenuActive)

    // Scroll Listener
    const { scrolledTo } = useScrollListener()

    return {
      // skin
      skin,

      // Layout
      layoutClasses,

      // Navbar
      navbarType,
      navbarMenuTypeClass,

      // Menu Hidden
      isNavMenuHidden,

      // Router Transition
      routerTransition,

      // Footer
      footerTypeClass,

      // Scroll Listeners
      scrolledTo,

      // Vertical Menu
      isVerticalMenuActive,
      toggleVerticalMenuActive,
      overlayClasses,
      verticalNavMenuItems,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/themes/bordered-layout.scss";
</style>
