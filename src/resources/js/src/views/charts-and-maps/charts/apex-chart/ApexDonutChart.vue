<template>
  <b-card>
    <b-card-title class="mb-1">
      Expense Ratio
    </b-card-title>
    <b-card-sub-title class="mb-2">
      Spending on various categories
    </b-card-sub-title>

    <vue-apex-charts
      type="donut"
      height="350"
      :options="apexChatData.donutChart.chartOptions"
      :series="apexChatData.donutChart.series"
    />
  </b-card>
</template>

<script>
import {
  BCard, BCardTitle, BCardSubTitle,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardSubTitle,
  },
  data() {
    return {
      apexChatData,
    }
  },
}
</script>
