<template>
  <b-card no-body>
    <b-card-header class="align-items-baseline pb-1">
      <div>
        <b-card-title class="mb-25">
          Sales
        </b-card-title>
        <b-card-text class="mb-0">
          Last 6 months
        </b-card-text>
      </div>
      <feather-icon
        icon="MoreVerticalIcon"
        size="18"
        class="cursor-pointer"
      />
    </b-card-header>

    <b-card-body>
      <div class="d-inline-flex align-items-center mr-2">
        <feather-icon
          icon="CircleIcon"
          class="text-primary mr-50"
        />
        <h6 class="mb-0">
          Sales
        </h6>
      </div>
      <div class="d-inline-flex align-items-center">
        <feather-icon
          icon="CircleIcon"
          class="text-info mr-50"
        />
        <h6 class="mb-0">
          Visits
        </h6>
      </div>

      <!-- apex chart -->
      <vue-apex-charts
        type="radar"
        height="300"
        :options="statisticsRadar.chartOptions"
        :series="statisticsRadar.series"
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
      statisticsRadar: {
        series: [
          {
            name: 'Sales',
            data: [90, 50, 86, 40, 100, 20],
          },
          {
            name: 'Visit',
            data: [70, 75, 70, 76, 20, 85],
          },
        ],
        chartOptions: {
          chart: {
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 8,
              left: 1,
              top: 1,
              opacity: 0.2,
            },
            toolbar: {
              show: false,
            },
            offsetY: 5,
          },
          stroke: {
            width: 0,
          },
          dataLabels: {
            background: {
              foreColor: ['#ebe9f1'],
            },
          },
          legend: { show: false },
          colors: [$themeColors.primary, $themeColors.info],
          plotOptions: {
            radar: {
              polygons: {
                strokeColors: ['#ebe9f1', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
                connectorColors: 'transparent',
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [$themeColors.primary, $themeColors.info],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100],
            },
          },
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          markers: {
            size: 0,
          },
          yaxis: {
            show: false,
          },
          grid: {
            show: false,
            padding: {
              bottom: -27,
            },
          },
        },
      },
    }
  },
}
</script>
