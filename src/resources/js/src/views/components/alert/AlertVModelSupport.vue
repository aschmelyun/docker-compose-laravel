<template>
  <b-card-code title="v-model support">
    <b-card-text>
      <span>You can use the </span>
      <code>v-model</code>
      <span> directive to create two-way data bindings on the </span>
      <code>show</code>
      <span> prop as in </span>
      <code>v-model="showDismissibleAlert"</code>
      <span> above.</span>
    </b-card-text>

    <div class="demo-spacing-0">
      <!-- alert -->
      <b-alert
        v-model="showDismissibleAlert"
        v-height-fade.appear
        variant="danger"
        dismissible
        class="mb-0"
      >
        <div class="alert-body">
          Dismissible Alert!
        </div>
      </b-alert>

      <!-- button -->
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        class="mt-1"
        @click="showDismissibleAlert = !showDismissibleAlert"
      >
        {{ showDismissibleAlert ? 'Hide' : 'Show' }} dismissible alert
      </b-button>
    </div>

    <template #code>
      {{ codeVsupport }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAlert, BButton, BCardText } from 'bootstrap-vue'
import { heightFade } from '@core/directives/animations'
import Ripple from 'vue-ripple-directive'
import { codeVsupport } from './code'

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
      showDismissibleAlert: false,
      codeVsupport,
    }
  },
}
</script>
