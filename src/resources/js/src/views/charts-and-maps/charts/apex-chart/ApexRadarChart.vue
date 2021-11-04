<template>
  <b-card title="Mobile Comparison">
    <vue-apex-charts
      type="radar"
      height="400"
      :options="apexChatData.radarChart.chartOptions"
      :series="apexChatData.radarChart.series"
    />
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default {
  components: {
    BCard,
    VueApexCharts,
  },
  data() {
    return {
      apexChatData,
    }
  },
}
</script>
