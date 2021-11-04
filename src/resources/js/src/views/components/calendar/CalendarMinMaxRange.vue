<template>
  <b-card-code title="Minimum and maximum dates">
    <b-card-text>
      <span>Restrict the calendar range via the </span>
      <code>min</code>
      <span> and </span>
      <code>max</code>
      <span> props. The props accept a date string in the format of </span>
      <code>YYYY-MM-DD</code>
      <span> or a </span>
      <code>Date</code>
      <span> object.</span>
    </b-card-text>

    <div class="d-flex align-items-center justify-content-center">
      <b-calendar
        v-model="value"
        :min="min"
        :max="max"
        locale="en"
      />
    </div>

    <template #code>
      {{ codeMinMaxRange }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCalendar, BCardText } from 'bootstrap-vue'
import { codeMinMaxRange } from './code'

export default {
  components: {
    BCardCode,
    BCalendar,
    BCardText,
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    maxDate.setDate(15)

    return {
      value: '',
      codeMinMaxRange,
      min: minDate,
      max: maxDate,
    }
  },
}
</script>
