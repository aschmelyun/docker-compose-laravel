<template>
  <b-card-code
    title="Round buttons"
  >
    <b-card-text class="mb-0">
      <span>Use a prop</span>
      <code>pill</code>
      <span>to create round button.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        pill
      >
        Primary
      </b-button>
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        variant="outline-secondary"
        pill
      >
        Secondary
      </b-button>
      <b-button
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        variant="outline-success"
        pill
      >
        Success
      </b-button>
      <b-button
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        variant="outline-danger"
        pill
      >
        Danger
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        variant="outline-warning"
        pill
      >
        Warning
      </b-button>
      <b-button
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        variant="outline-info"
        pill
      >
        Info
      </b-button>
      <b-button
        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
        variant="outline-dark"
        pill
      >
        Dark
      </b-button>
    </div>

    <template #code>
      {{ codeButtonRounded }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeButtonRounded } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() { return { codeButtonRounded } },
}
</script>
