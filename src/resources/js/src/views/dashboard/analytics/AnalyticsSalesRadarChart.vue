<template>
  <b-card
    v-if="data"
    no-body
  >
    <b-card-header class="align-items-baseline">
      <div>
        <b-card-title>Sales</b-card-title>
        <b-card-text class="mb-0">
          Last 6 months
        </b-card-text>
      </div>
      <b-dropdown
        variant="link"
        no-caret
        right
        class="chart-dropdown"
        toggle-class="p-0"
      >
        <template #button-content>
          <feather-icon
            icon="MoreVerticalIcon"
            size="18"
            class="text-body cursor-pointer"
          />
        </template>
        <b-dropdown-item href="#">
          Last 28 Days
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Month
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Year
        </b-dropdown-item>
      </b-dropdown>
    </b-card-header>

    <b-card-body>
      <div class="d-inline-flex align-items-center mr-2">
        <feather-icon
          icon="CircleIcon"
          class="text-primary mr-50"
        />
        <span>Sales</span>
      </div>
      <div class="d-inline-flex align-items-center">
        <feather-icon
          icon="CircleIcon"
          class="text-info mr-50"
        />
        <span>Visits</span>
      </div>

      <!-- apex chart -->
      <vue-apex-charts
        type="radar"
        height="275"
        :options="statisticsRadar.chartOptions"
        :series="data.series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardBody, BCardText, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'

export default {
  components: {
    VueApexCharts,
    BDropdown,
    BDropdownItem,
    BCardText,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      statisticsRadar: {
        chartOptions: {
          chart: {
            height: 300,
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
