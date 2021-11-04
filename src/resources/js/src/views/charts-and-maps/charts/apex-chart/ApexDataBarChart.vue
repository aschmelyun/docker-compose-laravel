<template>
  <b-card no-body>
    <b-card-header>
      <!-- title and legend -->
      <b-card-title class="mb-50">
        Data Science
      </b-card-title>
      <!--/ title and legend -->

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

    <b-card-body>
      <vue-apex-charts
        type="bar"
        height="400"
        :options="apexChatData.columnChart.chartOptions"
        :series="apexChatData.columnChart.series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCardTitle,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import flatPickr from 'vue-flatpickr-component'
import apexChatData from './apexChartData'

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    VueApexCharts,
    flatPickr,
    BCardTitle,
  },
  data() {
    return {
      apexChatData,
      rangePicker: ['2019-05-01', '2019-05-10'],
    }
  },
}
</script>
