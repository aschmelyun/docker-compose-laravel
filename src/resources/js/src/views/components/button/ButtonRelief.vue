<template>
  <div>
    <b-card-code
      title="Relief"
    >
      <b-card-text class="mb-0">
        <span>Use </span>
        <code>.btn-relief-{color}</code>
        <span> to create a relief button.</span>
      </b-card-text>

      <div class="demo-inline-spacing">
        <b-button variant="relief-primary">
          Primary
        </b-button>
        <b-button variant="relief-secondary">
          Secondary
        </b-button>
        <b-button variant="relief-success">
          Success
        </b-button>
        <b-button variant="relief-danger">
          Danger
        </b-button>
        <b-button variant="relief-warning">
          Warning
        </b-button>
        <b-button variant="relief-info">
          Info
        </b-button>
        <b-button variant="relief-dark">
          Dark
        </b-button>
      </div>

      <template #code>
        {{ codeButtonRelief }}
      </template>
    </b-card-code>
  </div>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeButtonRelief } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
  },
  data() {
    return {
      codeButtonRelief,
    }
  },
}
</script>
