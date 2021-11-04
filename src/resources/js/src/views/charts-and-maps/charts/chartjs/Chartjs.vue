<template>
  <b-row class="match-height">
    <b-col
      cols="12"
    >
      <p class="mb-2">
        <span>You can easily create reuseable chart components. </span>
        <b-link
          href="https://vue-chartjs.org/"
          target="_blank"
        >
          vue-chartjs
        </b-link>
        <span> is a wrapper for Chart.js. Read full documnetation </span>
        <b-link
          href="https://vue-chartjs.org/guide/"
          target="_blank"
        >
          here
        </b-link>
      </p>
    </b-col>
    <b-col md="6">
      <chartjs-bar-chart />
    </b-col>
    <b-col md="6">
      <chartjs-horizontal-bar-chart />
    </b-col>
    <b-col cols="12">
      <chartjs-line-chart />
    </b-col>
    <b-col md="6">
      <chartjs-radar-chart />
    </b-col>
    <b-col md="6">
      <chartjs-polar-area-chart />
    </b-col>
    <b-col cols="12">
      <chartjs-bubble-chart />
    </b-col>
    <b-col lg="4">
      <chartjs-doughnut-chart />
    </b-col>
    <b-col lg="8">
      <chartjs-scatter-chart />
    </b-col>
    <b-col cols="12">
      <chartjs-line-area-chart />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BLink } from 'bootstrap-vue'

import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsLineChart from './ChartjsLineChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'

export default {
  components: {
    BRow,
    BCol,
    BLink,

    ChartjsBarChart,
    ChartjsLineChart,
    ChartjsLineAreaChart,
    ChartjsRadarChart,
    ChartjsPolarAreaChart,
    ChartjsDoughnutChart,
    ChartjsHorizontalBarChart,
    ChartjsScatterChart,
    ChartjsBubbleChart,
  },
}
</script>
