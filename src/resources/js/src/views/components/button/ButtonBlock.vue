<template>
  <b-card-code title="Block Level Buttons">
    <b-card-text class="mb-0">
      <span>Create block level buttons — those that span the full width of a parent — by setting the</span>
      <code>block</code>
      <span>prop.</span>
    </b-card-text>

    <b-row>
      <b-col md="6">
        <div class="demo-inline-spacing">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            block
            variant="primary"
          >
            Block level buttton
          </b-button>
        </div>
      </b-col>

      <b-col md="6">
        <div class="demo-inline-spacing">
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            block
            variant="outline-primary"
          >
            Block level buttton
          </b-button>
        </div>
      </b-col>
    </b-row>

    <template #code>
      {{ codeBlockButton }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButton, BCol, BRow, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeBlockButton } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BCol,
    BRow,
  },
  directives: {
    Ripple,
  },
  data() { return { codeBlockButton } },
}
</script>
