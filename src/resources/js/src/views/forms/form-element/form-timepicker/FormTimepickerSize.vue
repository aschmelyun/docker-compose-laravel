<template>
  <b-card-code
    title="Control sizing"
  >
    <b-card-text>
      <span>Fancy a smaller or larger </span>
      <code>&lt;b-form-timepicker&gt;</code>
      <span> control? Set the </span>
      <code>size</code>
      <span> prop to </span>
      <code>'sm'</code>
      <span> for a smaller form control, or </span>
      <code>'lg'</code>
      <span>
        for a larger form form control. Note this does not affect the size of the popup time selection dialog.
      </span>
    </b-card-text>

    <label for="timepicker-sm">Small time picker</label>
    <b-form-timepicker
      id="timepicker-sm"
      size="sm"
      local="en"
      class="mb-2"
    />

    <label for="timepicker-lg">Large time picker</label>
    <b-form-timepicker
      id="timepicker-lg"
      size="lg"
      local="en"
    />

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTimepicker, BCardText } from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BFormTimepicker,
    BCardText,
  },
  data() {
    return {
      codeSize,
    }
  },
}
</script>
