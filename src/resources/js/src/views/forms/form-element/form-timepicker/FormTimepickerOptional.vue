<template>
  <b-card-code
    title="Optional controls"
  >
    <b-card-text>
      <span>Add optional control buttons to the bottom of the calendar popup via the props </span>
      <code>now-button</code>
      <span> or </span>
      <code>reset-button</code>
      <span>. The default close button can be removed via the </span>
      <code>no-close-button</code>
      <span> prop.</span>
    </b-card-text>

    <label for="timepicker-buttons">Time picker with optional footer buttons</label>
    <b-form-timepicker
      id="timepicker-buttons"
      now-button
      reset-button
      locale="en"
    />

    <template #code>
      {{ codeOptional }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTimepicker, BCardText } from 'bootstrap-vue'
import { codeOptional } from './code'

export default {
  components: {
    BCardCode,
    BFormTimepicker,
    BCardText,
  },
  data() {
    return {
      codeOptional,
    }
  },
}
</script>
