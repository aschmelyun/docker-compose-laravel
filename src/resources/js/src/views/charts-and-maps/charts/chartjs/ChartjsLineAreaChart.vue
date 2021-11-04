<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Data Science</b-card-title>

      <!-- datepicker -->
      <div class="d-flex align-items-center">
        <feather-icon
          icon="CalendarIcon"
          size="16"
        />
        <flat-pickr
          v-model="rangePicker"
          :config="{ mode: 'range'}"
          class="form-control flat-picker bg-transparent border-0 shadow-none"
          placeholder="YYYY-MM-DD"
        />
      </div>
      <!-- datepicker -->
    </b-card-header>

    <!-- chart -->
    <b-card-body>
      <chartjs-component-line-chart
        :height="450"
        :data="chartjsData.lineAreaChart.data"
        :options="chartjsData.lineAreaChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardBody, BCardHeader, BCardTitle } from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import ChartjsComponentLineChart from './charts-components/ChartjsComponentLineChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentLineChart,
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    flatPickr,
  },
  data() {
    return {
      chartjsData,
      rangePicker: ['2019-05-01', '2019-05-10'],
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
