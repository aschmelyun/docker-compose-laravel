<template>
  <b-card-code title="Filled">
    <b-card-text class="mb-0">
      Bootstrap includes six predefined button styles, each serving its own semantic purpose.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Primary
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="secondary"
      >
        Secondary
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="success"
      >
        Success
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="danger"
      >
        Danger
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="warning"
      >
        Warning
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="info"
      >
        Info
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="dark"
      >
        Dark
      </b-button>
    </div>

    <template #code>
      {{ codeButtonFilled }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeButtonFilled } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeButtonFilled,
    }
  },
}
</script>
