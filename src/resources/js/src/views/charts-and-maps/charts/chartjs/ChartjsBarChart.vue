<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Latest Statistics</b-card-title>
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
      <chartjs-component-bar-chart
        :height="400"
        :data="chartjsData.latestBarChart.data"
        :options="chartjsData.latestBarChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardBody, BCardTitle } from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import ChartjsComponentBarChart from './charts-components/ChartjsComponentBarChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BCardTitle,
    flatPickr,
    ChartjsComponentBarChart,
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
