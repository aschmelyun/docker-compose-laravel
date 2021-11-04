<template>
  <div>
    <b-alert
      variant="primary"
      show
    >
      <div class="alert-body">
        <p>
          <strong>Info: </strong>
          <span>Please check the </span>
          <b-link
            class="alert-link"
            href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/guide/layout/page-layout-examples.html#boxed-content"
            target="_blank"
          >Boxed Layout documentation</b-link>
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
      contentWidth: this.$store.state.appConfig.layout.contentWidth,
    }
  },
  created() {
    this.$store.commit('appConfig/UPDATE_CONTENT_WIDTH', 'boxed')
  },
  destroyed() {
    this.$store.commit('appConfig/UPDATE_CONTENT_WIDTH', this.contentWidth)
  },
}
</script>
