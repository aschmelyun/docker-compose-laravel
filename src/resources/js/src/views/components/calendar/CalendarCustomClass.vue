<template>
  <b-card-code
    title="Adding CSS classes to specific dates"
  >
    <b-card-text>
      <span>If you need to highlight a specific date or dates, set the </span>
      <code>date-info-fn</code>
      <span>
        prop to a reference to a function that returns a CSS class string (or array of strings) to apply to the date's
        cell. The function is passed two arguments:
      </span>
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
        :date-info-fn="dateClass"
        locale="en"
      />
    </div>

    <template #code>
      {{ codeCustomClass }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCalendar, BCardText } from 'bootstrap-vue'
import { codeCustomClass } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BCalendar,
  },
  data() {
    return {
      value: '',
      codeCustomClass,
    }
  },
  methods: {
    dateClass(ymd, date) {
      const day = date.getDate()
      return day >= 10 && day <= 20 ? 'table-primary' : ''
    },
  },
}
</script>
