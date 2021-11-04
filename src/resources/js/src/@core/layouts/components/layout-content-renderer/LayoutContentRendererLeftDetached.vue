<template>
  <div
    class="app-content content"
    :class="[{'show-overlay': $store.state.app.shallShowOverlay}, $route.meta.contentClass]"
  >
    <div class="content-overlay" />
    <div class="header-navbar-shadow" />
    <transition
      :name="routerTransition"
      mode="out-in"
    >
      <div
        class="content-wrapper clearfix"
        :class="contentWidth === 'boxed' ? 'container p-0' : null"
      >
        <slot name="breadcrumb">
          <app-breadcrumb />
        </slot>
        <div class="content-detached content-right">
          <div class="content-wrapper">
            <div class="content-body">
              <slot />
            </div>
          </div>
        </div>
        <portal-target
          name="content-renderer-sidebar-detached-left"
          slim
        />
      </div>
    </transition>
  </div>
</template>

<script>
import AppBreadcrumb from '@core/layouts/components/AppBreadcrumb.vue'
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  components: {
    AppBreadcrumb,
  },
  setup() {
    const { routerTransition, contentWidth } = useAppConfig()

    return {
      routerTransition, contentWidth,
    }
  },
}
</script>

<style>

</style>
