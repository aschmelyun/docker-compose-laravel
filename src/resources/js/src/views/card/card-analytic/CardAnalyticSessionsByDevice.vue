<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Sessions By Device</b-card-title>
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
        type="donut"
        height="300"
        class="my-1"
        :options="sessionsByDeviceDonut.chartOptions"
        :series="sessionsByDeviceDonut.series"
      />

      <!-- chart info -->
      <div
        v-for="(data,index) in chartData.chartInfo"
        :key="data.name"
        class="d-flex justify-content-between"
        :class="index === chartData.chartInfo.length - 1 ? 'mb-0':'mb-1'"
      >
        <div class="series-info d-flex align-items-center">
          <feather-icon
            :icon="data.icon"
            size="16"
            :class="data.iconColor"
          />
          <span class="font-weight-bolder ml-75 mr-25">{{ data.name }}</span><span>- {{ data.usage }}%</span>
        </div>
        <div>
          <span>{{ data.upDown }}%</span>
          <feather-icon
            :icon="data.upDown > 0 ? 'ArrowUpIcon':'ArrowDownIcon'"
            :class="data.upDown > 0 ? 'text-success':'text-danger'"
            class="mb-25 ml-25"
          />
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
      sessionsByDeviceDonut: {
        series: [58.6, 34.9, 6.5],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          labels: ['Desktop', 'Mobile', 'Tablet'],
          dataLabels: {
            enabled: false,
          },
          legend: { show: false },
          comparedResult: [2, -3, 8],
          stroke: { width: 0 },
          colors: [$themeColors.primary, $themeColors.warning, $themeColors.danger],
        },
      },
    }
  },
  created() {
    this.$http.get('/card/card-analytics/sessions-device').then(res => { this.chartData = res.data })
  },
}
</script>
