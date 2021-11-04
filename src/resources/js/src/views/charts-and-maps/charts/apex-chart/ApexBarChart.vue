<template>
  <b-card no-body>
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-sub-title class="mb-25">
          Balance
        </b-card-sub-title>
        <b-card-title class="font-weight-bolder">
          $74,382.72
        </b-card-title>
      </div>
      <!--/ title and subtitle -->

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
        height="350"
        :options="apexChatData.barChart.chartOptions"
        :series="apexChatData.barChart.series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BCardSubTitle, BCardTitle,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import flatPickr from 'vue-flatpickr-component'
import apexChatData from './apexChartData'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardHeader,
    flatPickr,
    BCardBody,
    BCardSubTitle,
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
