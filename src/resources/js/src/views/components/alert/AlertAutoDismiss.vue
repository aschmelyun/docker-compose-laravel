<template>
  <b-card-code
    title="Auto dismissing alerts"
  >
    <b-card-text>
      <span>To create a </span>
      <code>&lt;b-alert&gt;</code>
      <span> that dismisses automatically after a period of time, set the </span>
      <code>show</code>
      <span> prop (or the </span>
      <code>v-model</code>
      <span>) to the number of seconds you would like the </span>
      <code>&lt;b-alert&gt;</code>
      <span> to remain visible for.</span>
    </b-card-text>

    <div class="demo-spacing-0">
      <b-alert
        v-height-fade.appear
        :show="dismissCountDown"
        dismissible
        class="mb-0"
        variant="warning"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        <div class="alert-body">
          <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>
        </div>
      </b-alert>

      <!-- trigger button -->
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        class="mt-75"
        @click="showAlert"
      >
        Show alert with count-down timer
      </b-button>
    </div>

    <template #code>
      {{ codeAutoDismiss }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAlert, BButton, BCardText } from 'bootstrap-vue'
import { heightFade } from '@core/directives/animations'
import Ripple from 'vue-ripple-directive'
import { codeAutoDismiss } from './code'

export default {
  components: {
    BCardCode,
    BAlert,
    BButton,
    BCardText,
  },
  directives: {
    'height-fade': heightFade,
    Ripple,
  },
  data() {
    return {
      dismissSecs: 50,
      dismissCountDown: 0,
      codeAutoDismiss,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>
