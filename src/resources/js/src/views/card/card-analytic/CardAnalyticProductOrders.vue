<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Product Orders</b-card-title>
      <b-dropdown
        text="Last 7 Days"
        variant="transparent"
        class="chart-dropdown "
        right
        no-caret
        toggle-class="p-0"
        size="sm"
      >
        <b-dropdown-item
          v-for="day in chartInfo.lastDays"
          :key="day"
        >
          {{ day }}
        </b-dropdown-item>
      </b-dropdown>
    </b-card-header>

    <b-card-body>

      <!-- apex chart -->
      <vue-apex-charts
        type="radialBar"
        height="325"
        :options="productOrdersRadialBar.chartOptions"
        :series="productOrdersRadialBar.series"
      />

      <!-- chart info -->
      <div
        v-for="(data,key,index) in chartInfo.chartInfo"
        :key="key"
        class="d-flex justify-content-between"
        :class="index === Object.keys(chartInfo.chartInfo).length - 1 ? '':'mb-1'"
      >
        <div class="series-info d-flex align-items-center">
          <feather-icon
            icon="CircleIcon"
            size="16"
            :class="key === 'finished' ? 'text-primary': key==='pending'?'text-warning':'text-danger'"
          />
          <span class="font-weight-bold text-capitalize ml-75">{{ key }}</span>
        </div>

        <span>{{ data }}</span>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BDropdown, BDropdownItem, BCardBody,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardHeader,
    BCardTitle,
    BDropdown,
    BDropdownItem,
    BCardBody,
  },
  data() {
    return {
      chartInfo: {},
      productOrdersRadialBar: {
        series: [70, 52, 26],
        chartOptions: {
          labels: ['Finished', 'Pending', 'Rejected'],
          plotOptions: {
            radialBar: {
              size: 150,
              hollow: {
                size: '20%',
              },
              track: {
                strokeWidth: '100%',
                margin: 15,
              },
              dataLabels: {
                value: {
                  fontSize: '1rem',
                  colors: '#5e5873',
                  fontWeight: '500',
                  offsetY: 5,
                },
                total: {
                  show: true,
                  label: 'Total',
                  fontSize: '1.286rem',
                  colors: '#5e5873',
                  fontWeight: '500',

                  formatter() {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 42459
                  },
                },
              },
            },
          },
          colors: [$themeColors.primary, $themeColors.warning, $themeColors.danger],
          stroke: {
            lineCap: 'round',
          },
          chart: {
            height: 355,
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1,
            },
          },
        },
      },
    }
  },
  created() {
    this.$http.get('/card/card-analytics/product-orders').then(res => { this.chartInfo = res.data })
  },
}
</script>
