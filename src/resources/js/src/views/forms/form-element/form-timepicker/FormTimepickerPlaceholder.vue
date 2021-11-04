<template>
  <b-card-code
    title="Placeholder"
  >
    <b-card-text>
      <span>Add custom placeholder text to the control, when no date is selected, via the </span>
      <code>placeholder</code>
      <span> prop. If a placeholder is not provided, the value of the </span>
      <code>label-no-time-selected</code>
      <span> prop is used.</span>
    </b-card-text>

    <label for="timepicker-placeholder">Time picker with placeholder</label>
    <b-form-timepicker
      id="timepicker-placeholder"
      placeholder="Choose a time"
      local="en"
    />

    <template #code>
      {{ codePlaceholder }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTimepicker, BCardText } from 'bootstrap-vue'
import { codePlaceholder } from './code'

export default {
  components: {
    BCardCode,
    BFormTimepicker,
    BCardText,
  },
  data() {
    return {
      codePlaceholder,
    }
  },
}
</script>
