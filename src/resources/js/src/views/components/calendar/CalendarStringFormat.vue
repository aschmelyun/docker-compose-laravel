<template>
  <b-card-code title="Date string format">
    <b-card-text>
      <span>To change format options of the displayed date text inside the component, e.g. in the header, set the
      </span>
      <code>date-format-options</code>
      <span> prop to an object containing the requested format properties for the </span>
      <code>Intl.DateTimeFormat</code>
      <span> object (see also Internationalization).</span>
    </b-card-text>

    <b-row class="text-center">
      <b-col md="6">
        <h6>Custom date format:</h6>
        <b-calendar
          :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
          locale="en"
          class="mb-1 mb-md-0"
        />
      </b-col>
      <b-col md="6">
        <h6>Short date format:</h6>
        <b-calendar
          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          locale="en"
        />
      </b-col>
    </b-row>

    <template #code>
      {{ codeFormat }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BCalendar, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import { codeFormat } from './code'

export default {
  components: {
    BCardCode,
    BCalendar,
    BCardText,
    BRow,
    BCol,
  },
  data() {
    return {
      codeFormat,
    }
  },
}
</script>
