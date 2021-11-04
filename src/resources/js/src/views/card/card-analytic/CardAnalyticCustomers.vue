<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Customers</b-card-title>
      <b-dropdown
        text="Last 7 Days"
        variant="transparent"
        class="chart-dropdown "
        right
        no-caret
        toggle-class="p-0 mb-25"
        size="sm"
      >
        <b-dropdown-item
          v-for="day in chartData.lastDays"
          :key="day"
        >
          {{ day }}
        </b-dropdown-item>
      </b-dropdown>
    </b-card-header>

    <b-card-body>

      <!-- apex chart -->
      <vue-apex-charts
        type="pie"
        height="325"
        class="mt-2 mb-1"
        :options="customersPie.chartOptions"
        :series="customersPie.series"
      />

      <!-- list group -->
      <div class="pt-25">
        <div
          v-for="(data,index) in chartData.listData"
          :key="index"
          class="d-flex justify-content-between"
          :class="index === Object.keys(chartData.listData).length - 1 ? '':'mb-1'"
        >
          <div class="series-info">
            <feather-icon
              :icon="data.icon"
              size="16"
              class="mr-50"
              :class="data.iconColor"
            />
            <span class="font-weight-bolder">{{ data.text }}</span>
          </div>
          <span>{{ data.result }}</span>
        </div>
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
    BCard,
    BCardHeader,
    BCardTitle,
    BDropdown,
    BDropdownItem,
    BCardBody,
    VueApexCharts,
  },
  data() {
    return {
      chartData: {},
      customersPie: {
        series: [690, 258, 149],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          labels: ['New', 'Returning', 'Referrals'],
          dataLabels: {
            enabled: false,
          },
          legend: { show: false },
          stroke: {
            width: 4,
          },
          colors: [$themeColors.primary, $themeColors.warning, $themeColors.danger],
        },
      },
    }
  },
  created() {
    this.$http.get('/card/card-analytics/customers').then(res => { this.chartData = res.data })
  },
}
</script>
