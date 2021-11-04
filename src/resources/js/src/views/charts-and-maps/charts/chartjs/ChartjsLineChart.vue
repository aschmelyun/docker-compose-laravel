<template>
  <b-card no-body>
    <b-card-header>
      <div>
        <b-card-title class="mb-1">
          Statistics
        </b-card-title>
        <b-card-sub-title>Commercial networks and enterprises</b-card-sub-title>
      </div>
    </b-card-header>

    <!-- chart -->
    <b-card-body>
      <chartjs-component-line-chart
        :height="400"
        :data="chartjsData.lineChart.data"
        :options="chartjsData.lineChart.options"
        :plugins="plugins"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BCardSubTitle, BCardTitle,
} from 'bootstrap-vue'
import ChartjsComponentLineChart from './charts-components/ChartjsComponentLineChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BCardSubTitle,
    BCardTitle,
    ChartjsComponentLineChart,
  },
  data() {
    return {
      chartjsData,
      plugins: [
        // to add spacing between legends and chart
        {
          beforeInit(chart) {
            /* eslint-disable func-names, no-param-reassign */
            chart.legend.afterFit = function () {
              this.height += 20
            }
            /* eslint-enable */
          },
        },
      ],
    }
  },
}
</script>
