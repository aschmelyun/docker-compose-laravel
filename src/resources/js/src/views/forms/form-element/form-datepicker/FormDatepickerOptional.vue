<template>
  <b-card-code title="Optional controls">
    <b-card-text>
      <span>Add optional control buttons to the bottom of the calendar popup via the props </span>
      <code>today-button</code>
      <span>,</span>
      <code>reset-button</code>
      <span> and </span>
      <code>close-button</code>
      <span>.</span>
    </b-card-text>

    <label for="datepicker-buttons">Date picker with optional footer buttons</label>
    <b-form-datepicker
      id="datepicker-buttons"
      today-button
      reset-button
      close-button
      locale="en"
      menu-class="w-100"
      calendar-width="100%"
    />

    <template #code>
      {{ codeOptional }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeOptional } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
  },
  data() {
    return {
      codeOptional,
    }
  },
}
</script>
