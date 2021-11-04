<template>
  <b-card-code title="Gradient">
    <b-card-text class="mb-0">
      <span>use </span>
      <code>variant="gradient-{color}"</code>
      <span> prop create gradient buttons.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button variant="gradient-primary">
        Primary
      </b-button>
      <b-button variant="gradient-secondary">
        Secondary
      </b-button>
      <b-button variant="gradient-success">
        Success
      </b-button>
      <b-button variant="gradient-danger">
        Danger
      </b-button>
      <b-button variant="gradient-warning">
        Warning
      </b-button>
      <b-button variant="gradient-info">
        Info
      </b-button>
      <b-button variant="gradient-dark">
        Dark
      </b-button>
    </div>

    <template #code>
      {{ codeButtonGradient }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeButtonGradient } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
  },
  data() {
    return {
      codeButtonGradient,
    }
  },
}
</script>
