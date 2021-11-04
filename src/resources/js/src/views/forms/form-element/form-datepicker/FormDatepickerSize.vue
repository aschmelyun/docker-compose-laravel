<template>
  <b-card-code title="Control sizing">
    <b-card-text>
      <span>Fancy a smaller or larger </span>
      <code>&lt;b-form-datepicker&gt;</code>
      <span>control? Set the </span>
      <code>size</code>
      <span> prop to </span>
      <code>'sm'</code>
      <span> for a smaller form control, or </span>
      <code>'lg'</code>
      <span> for a larger form form control. Note this does not affect the size of the popup calendar dialog.</span>
    </b-card-text>

    <div>
      <label for="datepicker-sm">Small date picker</label>
      <b-form-datepicker
        id="datepicker-sm"
        size="sm"
        local="en"
        class="mb-2"
        today-variant="danger"
      />
      <label for="datepicker-default">Default date picker</label>
      <b-form-datepicker
        id="datepicker-default"
        local="en"
        class="mb-2"
        today-variant="danger"
      />
      <label for="datepicker-lg">Large date picker</label>
      <b-form-datepicker
        id="datepicker-lg"
        size="lg"
        local="en"
      />
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
  },
  data() {
    return {
      codeSize,
    }
  },
}
</script>
