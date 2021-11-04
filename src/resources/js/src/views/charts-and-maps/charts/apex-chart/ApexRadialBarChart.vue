<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title class="mb-sm-0 mb-1">
        Statistics
      </b-card-title>
    </b-card-header>

    <b-card-body>
      <vue-apex-charts
        type="radialBar"
        height="400"
        :options="apexChatData.radialBarChart.chartOptions"
        :series="apexChatData.radialBarChart.series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardTitle, BCardBody, BCardHeader,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardBody,
    BCardHeader,
  },
  data() {
    return {
      apexChatData,
    }
  },
}
</script>
