<template>
  <b-card-code title="Date string format">
    <b-card-text>
      <span>To change format options of the displayed date text inside the component, e.g. in the header or placeholder,
        set the
      </span>
      <code>date-format-options</code>
      <span> prop to an object containing the requested format properties for the</span>
      <code>Intl.DateTimeFormat</code>
      <span> object.</span>
    </b-card-text>

    <div>
      <label for="datepicker-dateformat1">Custom date format</label>
      <b-form-datepicker
        id="datepicker-dateformat1"
        :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
        locale="en"
      />

      <label
        class="mt-2"
        for="datepicker-dateformat2"
      >Short date format</label>
      <b-form-datepicker
        id="datepicker-dateformat2"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        locale="en"
      />
    </div>

    <template #code>
      {{ codeString }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeString } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
  },
  data() {
    return {
      codeString,
    }
  },
}
</script>
