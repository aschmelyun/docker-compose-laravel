<template>
  <b-card-code title="Flat">
    <b-card-text class="mb-0">
      <span>Use </span>
      <code>.btn-flat-{color}</code>
      <span> to create a flat button.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="flat-primary"
      >
        Primary
      </b-button>
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        variant="flat-secondary"
      >
        Secondary
      </b-button>
      <b-button
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        variant="flat-success"
      >
        Success
      </b-button>

      <b-button
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        variant="flat-danger"
      >
        Danger
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        variant="flat-warning"
      >
        Warning
      </b-button>
      <b-button
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        variant="flat-info"
      >
        Info
      </b-button>
      <b-button
        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
        variant="flat-dark"
      >
        Dark
      </b-button>
    </div>

    <template #code>
      {{ codeButtonFlat }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeButtonFlat } from './code'

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
      codeButtonFlat,
    }
  },
}
</script>
