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

    <b-form-datepicker
      v-model="value"
      :min="min"
      :max="max"
      locale="en"
    />

    <template #code>
      {{ codeMinMax }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeMinMax } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
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
      min: minDate,
      max: maxDate,
      codeMinMax,
    }
  },
}
</script>
