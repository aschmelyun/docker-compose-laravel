<template>
  <b-card-code
    title="Validation states"
  >
    <b-card-text>
      <code>&lt;b-form-timepicker&gt;</code>
      <span> supports invalid and valid styling via the boolean </span>
      <code>state</code>
      <span> prop. Setting </span>
      <code>state</code>
      <span> to boolean </span>
      <code>false</code>
      <span> will style the input as invalid, while setting it to boolean </span>
      <code>true</code>
      <span> will style it as valid. Setting state to </span>
      <code>null</code>
      <span> will not show any validation state styling (the default).</span>
    </b-card-text>

    <label for="timepicker-invalid">Choose a time (invalid style)</label>
    <b-form-timepicker
      id="datepicker-invalid"
      v-model="selectedTime"
      :state="selectedTime.length > 0? true: false "
      class="mb-2"
    />

    <label for="timepicker-valid">Choose a time (valid style)</label>
    <b-form-timepicker
      id="datepicker-valid"
      :state="true"
    />

    <template #code>
      {{ codeValidation }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTimepicker, BCardText } from 'bootstrap-vue'
import { codeValidation } from './code'

export default {
  components: {
    BCardCode,
    BFormTimepicker,
    BCardText,
  },
  data() {
    return {
      selectedTime: '',
      codeValidation,
    }
  },
}
</script>
