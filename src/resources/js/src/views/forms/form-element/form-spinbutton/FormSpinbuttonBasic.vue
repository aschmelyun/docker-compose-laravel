<template>
  <b-card-code
    title="Basic Spinbutton"
  >
    <b-card-text>
      Spin buttons allow for incrementing or decrementing a numerical value within a range of a minimum and maximum number, with optional step value.
    </b-card-text>

    <div class="mt-2">
      <label for="demo-sb">Spin Button</label>
      <b-form-spinbutton
        id="demo-sb"
        v-model="value"
        min="1"
        max="100"
      />
      <b-card-text class="mt-1">
        Value: {{ value }}
      </b-card-text>

      <b-alert
        class="mb-0"
        show
        variant="success"
      >
        <div class="alert-body">
          The ArrowUp and ArrowDown keys can be used to increment or decrement the value.
        </div>
      </b-alert>
    </div>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BAlert, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BCardText,
    BAlert,
  },
  data() {
    return {
      value: 50,
      codeBasic,
    }
  },
}
</script>
