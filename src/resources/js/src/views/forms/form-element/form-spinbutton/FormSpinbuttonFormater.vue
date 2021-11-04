<template>
  <b-card-code
    title="Spinbutton with Formater"
  >
    <b-card-text>
      <span>To provide a formatter function, set the prop </span>
      <code>formatter-fn</code>
      <span> to a method reference.</span>
    </b-card-text>

    <div>
      <label for="sb-days">Spin button with formatter</label>
      <b-form-spinbutton
        id="sb-days"
        v-model="value"
        :formatter-fn="dayFormatter"
        min="0"
        max="6"
        wrap
      />
      <b-card-text class="mt-1 mb-0">
        Value: {{ value }}
      </b-card-text>
    </div>

    <template #code>
      {{ codeFormater }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BCardText } from 'bootstrap-vue'
import { codeFormater } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardText,
    BCardCode,
  },
  data() {
    return {
      value: 0,
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      codeFormater,
    }
  },
  methods: {
    dayFormatter(value) {
      return this.days[value]
    },
  },
}
</script>
