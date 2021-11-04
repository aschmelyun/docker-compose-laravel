<template>
  <b-card no-body>
    <b-card-header class="align-items-baseline">
      <div>
        <b-card-title class="mb-25">
          Sales
        </b-card-title>
        <b-card-text class="mb-0">
          2020 Total Sales: 12.84k
        </b-card-text>
      </div>
      <feather-icon
        icon="SettingsIcon"
        size="18"
        class="text-muted cursor-pointer"
      />
    </b-card-header>

    <b-card-body class="pb-0">

      <!-- apex chart -->
      <vue-apex-charts
        type="line"
        height="240"
        :options="salesLine.chartOptions"
        :series="salesLine.series"
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
    BCard,
    BCardHeader,
    BCardText,
    BCardTitle,
    BCardBody,
  },
  data() {
    return {
      salesLine: {
        series: [
          {
            name: 'Sales',
            data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            type: 'line',
            dropShadow: {
              enabled: true,
              top: 18,
              left: 2,
              blur: 5,
              opacity: 0.2,
            },
            offsetX: -10,
          },
          stroke: {
            curve: 'smooth',
            width: 4,
          },
          grid: {
            borderColor: '#ebe9f1',
            padding: {
              top: -20,
              bottom: 5,
              left: 20,
            },
          },
          legend: {
            show: false,
          },
          colors: ['#df87f2'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              inverseColors: false,
              gradientToColors: [$themeColors.primary],
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
              offsetY: 5,
              style: {
                colors: '#b9b9c3',
                fontSize: '0.857rem',
              },
            },
            axisTicks: {
              show: false,
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
                fontSize: '0.857rem',
              },
              formatter(val) {
                return val > 999 ? `${(val / 1000).toFixed(1)}k` : val
              },
            },
          },
          tooltip: {
            x: { show: false },
          },
        },
      },
    }
  },
}
</script>
