<template>
  <b-card-code title="Disable dates">
    <b-card-text>
      <span>If you need to disable specific dates within the date picker, specify a function reference to the </span>
      <code>date-disabled-fn</code>
      <span> prop.</span>
    </b-card-text>

    <b-form-datepicker
      v-model="value"
      :date-disabled-fn="dateDisabled"
      locale="en"
    />

    <template #code>
      {{ codeDisableDate }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeDisableDate } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
  },
  data() {
    return {
      value: '',
      codeDisableDate,
    }
  },
  methods: {
    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()

      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 6 || day === 13
    },
  },
}
</script>
