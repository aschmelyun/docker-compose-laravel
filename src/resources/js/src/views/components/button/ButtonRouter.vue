<template>
  <b-card-code title="Router">
    <b-card-text>
      <span>Refer to the </span>
      <code>Router support</code>
      <span> reference docs for the various supported </span>
      <code>&lt;router-link&gt;</code>
      <span> related props.</span>
    </b-card-text>

    <!-- alert -->
    <b-alert
      variant="warning"
      show
      class="mb-0"
    >
      <div class="alert-body">
        <span><strong>Note:</strong> Onclick of the Link button will redirect you to another page.</span>
      </div>
    </b-alert>

    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        to="/components/breadcrumb"
      >
        String Literal
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="warning"
        :to="{ path: '/components/breadcrumb' }"
      >
        Object Path
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="success"
        :to="{ name: 'components-breadcrumb'}"
      >
        Named Router
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="dark"
        :to="{ path: '/components/breadcrumb', query: { plan: 'private' } }"
      >
        With Query
      </b-button>
    </div>

    <template #code>
      {{ codeButtonRouter }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BAlert, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeButtonRouter } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BAlert,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeButtonRouter,
    }
  },
}
</script>
