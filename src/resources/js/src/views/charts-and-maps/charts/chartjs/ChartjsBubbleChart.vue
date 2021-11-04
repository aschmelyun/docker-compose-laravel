<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Bubble Chart</b-card-title>

      <!-- status -->
      <div class="d-flex align-items-center flex-wrap">
        <h5 class="font-weight-bolder mb-0 mr-1">
          $ 100,000
        </h5>
        <b-badge variant="light-secondary">
          <feather-icon
            icon="ArrowDownIcon"
            class="text-danger"
            size="18"
          />
          <span class="ml-25">20%</span>
        </b-badge>
      </div>
      <!-- status -->
    </b-card-header>

    <!-- chart -->
    <b-card-body>
      <chartjs-component-bubble-chart
        :height="500"
        :data="chartjsData.bubbleChart.data"
        :options="chartjsData.bubbleChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BCardTitle, BBadge,
} from 'bootstrap-vue'
import ChartjsComponentBubbleChart from './charts-components/ChartjsComponentBubbleChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentBubbleChart,
    BCard,
    BBadge,
    BCardHeader,
    BCardTitle,
    BCardBody,
  },
  data() {
    return {
      chartjsData,
    }
  },
}
</script>
