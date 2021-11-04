<template>
  <b-card-code title="Link">
    <b-card-text>
      <span>When the </span>
      <code>href</code>
      <span> is set to any other value (or the </span>
      <code>to</code>
      <span> prop is used), </span>
      <code>role="button"</code>
      <span> will not be added, nor will the keyboard event listeners be enabled.</span>
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

    <!-- buttons -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        href="https://pixinvent.com/"
      >
        String Literal
      </b-button>

      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        target="_blank"
        href="https://pixinvent.com/"
      >
        Open New Tab
      </b-button>
    </div>

    <template #code>
      {{ codeButtonHref }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BAlert, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeButtonHref } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BAlert,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeButtonHref,
    }
  },
}
</script>
