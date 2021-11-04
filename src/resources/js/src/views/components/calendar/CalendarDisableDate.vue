<template>
  <b-card-code title="Disabling dates">
    <b-card-text>
      <span>If you need to disable specific dates within the calendar, specify a function reference to the </span>
      <code>date-disabled-fn</code>
      <span> prop. The function is passed two arguments: </span>
      <code>ymd</code>
      <span> The date as a </span>
      <code>YYYY-MM-DD</code>
      <span> string, </span>
      <code>date</code>
      <span> The date as a </span>
      <code>Date</code>
      <span> object</span>
    </b-card-text>

    <div class="d-flex align-items-center justify-content-center">
      <b-calendar
        v-model="value"
        :date-disabled-fn="dateDisabled"
        locale="en"
      />
    </div>

    <template #code>
      {{ codeDisableDate }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCalendar, BCardText } from 'bootstrap-vue'
import { codeDisableDate } from './code'

export default {
  components: {
    BCardCode,
    BCalendar,
    BCardText,
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
