<template>
  <div>
    <b-alert
      variant="primary"
      show
    >
      <div class="alert-body">
        <p>
          <strong>Info: </strong>
          <span>Use this layout to set vertical menu (navigation) default collapsed. Please check the </span>
          <b-link
            class="alert-link"
            href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/guide/layout/page-layout-examples.html#collapsed-menu"
            target="_blank"
          >Layout collapsed menu documentation</b-link>
          <span> for more details.</span>
        </p>
      </div>
    </b-alert>
    <ecommerce />
  </div>
</template>

<script>
import Ecommerce from '@/views/dashboard/ecommerce/Ecommerce.vue'
import { BAlert, BLink } from 'bootstrap-vue'

export default {
  components: {
    BAlert,
    BLink,
    Ecommerce,
  },
  data() {
    return {
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
    }
  },
  created() {
    this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  destroyed() {
    this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', this.isVerticalMenuCollapsed)
  },
}
</script>
