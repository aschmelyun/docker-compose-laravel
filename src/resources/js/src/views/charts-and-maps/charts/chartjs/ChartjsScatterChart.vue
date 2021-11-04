<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>
        New Product Data
      </b-card-title>

      <!-- dropdown button -->
      <b-button-group class="mt-1 mt-sm-0">
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >
          Daily
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >
          Monthly
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >
          Yearly
        </b-button>
      </b-button-group>
      <!--/ dropdown button -->
    </b-card-header>

    <!-- chart -->
    <b-card-body>
      <chartjs-component-scatter-chart
        :height="415"
        :data="chartjsData.scatterChart.data"
        :options="chartjsData.scatterChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardTitle, BCardHeader, BButtonGroup, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import ChartjsComponentScatterChart from './charts-components/ChartjsComponentScatterChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentScatterChart,
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BButtonGroup,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      chartjsData,
    }
  },
}
</script>
