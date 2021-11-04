<template>
  <b-row class="match-height">
    <b-col
      cols="12"
    >
      <p class="mb-2">
        <span>A Vue.js component for ApexCharts. Read full documnetation</span>
        <b-link
          target="_blank"
          href="https://apexcharts.com/docs/installation/"
        >
          here
        </b-link>
      </p>
    </b-col>
    <b-col cols="12">
      <apex-line-area-chart />
    </b-col>
    <b-col cols="12">
      <apex-data-bar-chart />
    </b-col>
    <b-col cols="12">
      <apex-scatter-chart />
    </b-col>
    <b-col cols="12">
      <apex-line-chart />
    </b-col>
    <b-col md="6">
      <apex-bar-chart />
    </b-col>
    <b-col md="6">
      <apex-candlestick-chart />
    </b-col>
    <b-col md="6">
      <apex-heat-map-chart />
    </b-col>
    <b-col md="6">
      <apex-radial-bar-chart />
    </b-col>
    <b-col md="6">
      <apex-radar-chart />
    </b-col>
    <b-col md="6">
      <apex-donut-chart />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BLink } from 'bootstrap-vue'

import ApexLineChart from './ApexLineChart.vue'
import ApexLineAreaChart from './ApexLineAreaChart.vue'
import ApexDataBarChart from './ApexDataBarChart.vue'
import ApexBarChart from './ApexBarChart.vue'
import ApexCandlestickChart from './ApexCandlestickChart.vue'
import ApexScatterChart from './ApexScatterChart.vue'
import ApexHeatMapChart from './ApexHeatMapChart.vue'
import ApexDonutChart from './ApexDonutChart.vue'
import ApexRadialBarChart from './ApexRadialBarChart.vue'
import ApexRadarChart from './ApexRadarChart.vue'

export default {
  components: {
    BRow,
    BCol,
    BLink,

    ApexLineChart,
    ApexLineAreaChart,
    ApexDataBarChart,
    ApexBarChart,
    ApexCandlestickChart,
    ApexScatterChart,
    ApexHeatMapChart,
    ApexDonutChart,
    ApexRadarChart,
    ApexRadialBarChart,
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
@import '~@core/scss/vue/libs/chart-apex.scss';
</style>
