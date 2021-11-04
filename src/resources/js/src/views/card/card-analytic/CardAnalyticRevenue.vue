<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Revenue</b-card-title>
      <feather-icon
        icon="SettingsIcon"
        size="18"
        class="text-muted cursor-pointer"
      />
    </b-card-header>

    <b-card-body class="pb-0">
      <div class="d-flex justify-content-start mb-3">
        <div class="mr-2">
          <b-card-text class="mb-50">
            This Month
          </b-card-text>
          <h3 class="font-weight-bolder">
            <sup class="font-medium-1">$ </sup>
            <span class="text-primary">{{ revenue.thisMonth }}</span>
          </h3>
        </div>
        <div>
          <b-card-text class="mb-50">
            Last Month
          </b-card-text>
          <h3 class="font-weight-bolder">
            <sup class="font-medium-1">$ </sup>
            <span>{{ revenue.lastMonth }}</span>
          </h3>
        </div>
      </div>

      <!-- apex chart -->
      <vue-apex-charts
        type="line"
        height="240"
        :options="revenueComparisonLine.chartOptions"
        :series="revenueComparisonLine.series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardBody, BCardText,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'

export default {
  components: {
    VueApexCharts,
    BCardText,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
  },
  data() {
    return {
      revenue: {},
      revenueComparisonLine: {
        series: [
          {
            name: 'This Month',
            data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600],
          },
          {
            name: 'Last Month',
            data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            type: 'line',
            offsetX: -10,
          },
          stroke: {
            curve: 'smooth',
            dashArray: [0, 12],
            width: [4, 3],
          },
          legend: {
            show: false,
          },
          colors: ['#d0ccff', '#ebe9f1'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              inverseColors: false,
              gradientToColors: [$themeColors.primary, '#ebe9f1'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100],
            },
          },
          markers: {
            size: 0,
            hover: {
              size: 5,
            },
          },
          xaxis: {
            labels: {
              style: {
                colors: '#b9b9c3',
                fontSize: '1rem',
              },
            },
            axisTicks: {
              show: false,
            },
            categories: ['01', '05', '09', '13', '17', '21', '26', '31'],
            axisBorder: {
              show: false,
            },
            tickPlacement: 'on',
          },
          yaxis: {
            tickAmount: 5,
            labels: {
              style: {
                colors: '#b9b9c3',
                fontSize: '1rem',
              },
              formatter(val) {
                return val > 999 ? `${(val / 1000).toFixed(0)}k` : val
              },
            },
          },
          grid: {
            borderColor: '#e7eef7',
            padding: {
              top: -20,
              bottom: -10,
              left: 20,
            },
          },
          tooltip: {
            x: { show: false },
          },
        },
      },
    }
  },
  created() {
    this.$http.get('/card/card-analytics/revenue').then(res => { this.revenue = res.data })
  },
}
</script>
