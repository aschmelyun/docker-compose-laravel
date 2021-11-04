<template>
  <b-card-code title="Default">
    <b-card-text>Alerts are available for any length of text, as well as an optional dismiss button (and optional auto-dismissing).</b-card-text>

    <div class="demo-spacing-0">
      <b-alert
        variant="primary"
        show
      >
        <div class="alert-body">
          <span><strong>Good Morning!</strong> Start your day with some alerts.</span>
        </div>
      </b-alert>
    </div>

    <template #code>
      {{ codeAlertDefaut }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAlert, BCardText } from 'bootstrap-vue'
import { codeAlertDefaut } from './code'

export default {
  components: {
    BCardCode,
    BAlert,
    BCardText,
  },
  data() { return { codeAlertDefaut } },
}
</script>
