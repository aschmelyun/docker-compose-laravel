<template>
  <b-card-code title="Basic">
    <b-card-text>
      <span>Group a series of buttons together on a single line with </span>
      <code>&lt;b-button-group&gt;</code>
      <span>.</span>
    </b-card-text>

    <b-button-group>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        First
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Second
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Third
      </b-button>
    </b-button-group>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import { BButtonGroup, BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeBasic } from './code'

export default {
  components: {
    BButtonGroup,
    BButton,
    BCardText,
    BCardCode,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeBasic,
    }
  },
}
</script>
