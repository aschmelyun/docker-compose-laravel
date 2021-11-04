<template>
  <div class="p-4">
    <h4 class="mb-2">
      Layout Blank
    </h4>
    <b-alert
      variant="primary"
      show
    >
      <div class="alert-body">
        <p>
          <strong>Info: </strong>
          <span>This layout is used in Authentication &amp; Miscellaneous page. Please check the </span>
          <b-link
            class="alert-link"
            href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/guide/layout/page-layout-examples.html#layout-blank"
            target="_blank"
          >Layout Blank documentation</b-link>
          <span> for more details.</span>
        </p>
      </div>
    </b-alert>
  </div>
</template>

<script>
import { BAlert, BLink } from 'bootstrap-vue'

export default {
  components: {
    BAlert,
    BLink,
  },
}
</script>
