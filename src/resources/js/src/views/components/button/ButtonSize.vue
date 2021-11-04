<template>
  <b-card-code
    title="Sizes"
  >
    <b-card-text class="mb-0">
      <span>Fancy larger or smaller buttons? Specify </span>
      <code>lg</code>
      <span> or </span>
      <code>sm</code>
      <span> via the </span>
      <code>size</code>
      <span> prop.</span>
    </b-card-text>

    <b-row>
      <b-col md="6">

        <!-- filled button size -->
        <div class="demo-inline-spacing">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            size="lg"
            variant="primary"
          >
            Large
          </b-button>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
          >
            Default
          </b-button>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            size="sm"
            variant="primary"
          >
            Small
          </b-button>
        </div>
      </b-col>
      <b-col>

        <!-- outline button size -->
        <div class="demo-inline-spacing">
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            size="lg"
            variant="outline-primary"
          >
            Large
          </b-button>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
          >
            Default
          </b-button>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            size="sm"
            variant="outline-primary"
          >
            Small
          </b-button>
        </div>
      </b-col>
    </b-row>

    <template #code>
      {{ codeButtonSize }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButton, BCardText, BRow, BCol,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeButtonSize } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeButtonSize,
    }
  },
}
</script>
