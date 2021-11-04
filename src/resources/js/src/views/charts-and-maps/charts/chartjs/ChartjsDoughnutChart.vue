<template>
  <b-card title="Sessions By Device">
    <!-- chart -->
    <chartjs-component-doughnut-chart
      :height="275"
      :data="chartjsData.doughnutChart.data"
      :options="chartjsData.doughnutChart.options"
      class="mb-3"
    />
    <!--/ chart -->

    <!-- stocks -->
    <div
      v-for="(stock,index) in stockData"
      :key="stock.device"
      :class="index < stockData.length-1 ? 'mb-1':''"
      class="d-flex justify-content-between"
    >
      <div class="d-flex align-items-center">
        <feather-icon
          :icon="stock.symbol"
          size="16"
          :class="stock.color"
        />
        <span class="font-weight-bold ml-75 mr-25">{{ stock.device }}</span>
        <span>- {{ stock.percentage }}%</span>
      </div>
      <div>
        <span>{{ stock.upDown }}%</span>
        <feather-icon
          :icon="stock.upDown > 0 ? 'ArrowUpIcon':'ArrowDownIcon'"
          :class="stock.upDown > 0 ? 'text-success':'text-danger'"
        />
      </div>
    </div>
    <!--/ stocks -->
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import ChartjsComponentDoughnutChart from './charts-components/ChartjsComponentDoughnutChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentDoughnutChart,
    BCard,
  },
  data() {
    return {
      chartjsData,
      stockData: [
        {
          device: 'Desktop', symbol: 'MonitorIcon', color: 'text-primary', percentage: 80, upDown: 2,
        },
        {
          device: 'Mobile', symbol: 'TabletIcon', color: 'text-warning', percentage: 10, upDown: 8,
        },
        {
          device: 'Tablet', symbol: 'TabletIcon', color: 'text-success', percentage: 10, upDown: -5,
        },
      ],
    }
  },
}
</script>
