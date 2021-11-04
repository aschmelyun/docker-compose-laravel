<template>
  <b-card-code title="Alert Animation">
    <b-card-text>
      <span>Use the </span>
      <code>hightFaded</code>
      <span> directive to enable animation. By default alerts are not animated.</span>
    </b-card-text>

    <!-- dismissible alert -->
    <b-alert
      v-height-fade
      show
      dismissible
      fade
      class="mb-0"
      variant="primary"
    >
      <div class="alert-body">
        <span>Dismissible Alert!</span>
      </div>
    </b-alert>

    <b-card-text class="pt-2 mb-0">
      <span>If you want to show animation even when alert get rendered. You can use </span>
      <code>appear</code>
      <span> modifier</span>
    </b-card-text>

    <!--  show alert with count-down timer button-->
    <div class="demo-inline-spacing mb-1">
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="showAlert"
      >
        Show alert with count-down timer
      </b-button>

      <!-- show dismissible alert button -->
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="showDismissibleAlert = true"
      >
        Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
      </b-button>
    </div>

    <!-- dismissible Alert -->
    <b-alert
      v-height-fade.appear
      variant="danger"
      dismissible
      fade
      :show="showDismissibleAlert"
      class="mb-0"
      @dismissed="showDismissibleAlert = false"
    >
      <div class="alert-body">
        <span>Dismissible Alert!</span>
      </div>
    </b-alert>

    <b-card-text class="m-0 py-1">
      You can even use this on dismissible alerts.
    </b-card-text>

    <!-- count down dismissible alert  -->
    <b-alert
      v-height-fade.appear
      :show="dismissCountDown"
      dismissible
      fade
      variant="warning"
      class="mb-0"
      @dismiss-count-down="countDownChanged"
    >
      <div class="alert-body">
        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>
      </div>
    </b-alert>

    <template #code>
      {{ codeAnimation }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAlert, BButton, BCardText } from 'bootstrap-vue'
import { heightFade } from '@core/directives/animations'
import Ripple from 'vue-ripple-directive'
import { codeAnimation } from './code'

export default {
  components: {
    BCardCode,
    BAlert,
    BCardText,
    BButton,
  },
  directives: {
    heightFade,
    Ripple,
  },
  data() {
    return {
      dismissSecs: 50,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      codeAnimation,
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
