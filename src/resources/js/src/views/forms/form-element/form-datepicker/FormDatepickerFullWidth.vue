<template>
  <b-card-code title="Full width calendar dropdown">
    <b-card-text>
      <span>To create a full width calendar dropdown simply set the </span>
      <code>menu-class</code>
      <span> prop to </span>
      <code>'w-100'</code>
      <span> and set the calendar-width prop to '100%':</span>
    </b-card-text>

    <label for="datepicker-full-width">Choose a date</label>
    <b-form-datepicker
      id="datepicker-full-width"
      v-model="value"
      menu-class="w-100"
      calendar-width="100%"
    />

    <template #code>
      {{ codeFullWith }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeFullWith } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
  },
  data() {
    return {
      value: '',
      codeFullWith,
    }
  },
}
</script>
