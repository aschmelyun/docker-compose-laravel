<template>
  <b-card-code title="Placeholder & Initial Open Date">
    <b-card-text>
      <span>Add custom placeholder text to the control, when no date is selected, via the </span>
      <code>placeholder</code>
      <span> prop. </span>
      <span>You can change this behaviour by specifying a date via the </span>
      <code>initial-date</code>
      <span> prop.</span>
    </b-card-text>

    <label for="datepicker-placeholder">Date picker with placeholder</label>
    <b-form-datepicker
      id="datepicker-placeholder"
      placeholder="Choose a date"
      local="en"
      initial-date="2020-06-16"
    />

    <template #code>
      {{ codePlaceholder }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codePlaceholder } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
  },
  data() {
    return {
      codePlaceholder,
    }
  },
}
</script>
