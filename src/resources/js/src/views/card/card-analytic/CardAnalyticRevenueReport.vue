<template>
  <b-card
    no-body
    class="card-revenue-budget"
  >
    <b-row class="mx-0">
      <b-col
        md="8"
        class="revenue-report-wrapper"
      >
        <div class="d-sm-flex justify-content-between align-items-center mb-3">
          <h4 class="card-title mb-50 mb-sm-0">
            Revenue Report
          </h4>
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center mr-2">
              <span class="bullet bullet-primary svg-font-small-3 mr-50 cursor-pointer" />
              <span>Earning</span>
            </div>
            <div class="d-flex align-items-center">
              <span class="bullet bullet-warning svg-font-small-3 mr-50 cursor-pointer" />
              <span>Expense</span>
            </div>
          </div>
        </div>

        <!-- chart -->
        <vue-apex-charts
          id="revenue-report-chart"
          type="bar"
          height="230"
          :options="revenueReport.chartOptions"
          :series="revenueReport.series"
        />
      </b-col>

      <b-col
        md="4"
        class="budget-wrapper"
      >
        <b-dropdown
          text="2020"
          size="sm"
          class="budget-dropdown"
          variant="outline-primary"
        >
          <b-dropdown-item
            v-for="year in revenue_report.years"
            :key="year"
          >
            {{ year }}
          </b-dropdown-item>
        </b-dropdown>

        <h2 class="mb-25">
          ${{ revenue_report.price }}
        </h2>
        <div class="d-flex justify-content-center">
          <span class="font-weight-bolder mr-25">Budget:</span>
          <span>56,800</span>
        </div>
        <vue-apex-charts
          id="budget-chart"
          type="line"
          height="80"
          :options="budgetChart.options"
          :series="budgetChart.series"
        />

        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          Increase Budget
        </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BDropdown, BDropdownItem, BButton,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    VueApexCharts,
    BDropdown,
    BDropdownItem,
    BCard,
    BButton,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      revenue_report: {},
      revenueReport: {
        series: [
          {
            name: 'Earning',
            data: [95, 177, 284, 256, 105, 63, 168, 218, 72],
          },
          {
            name: 'Expense',
            data: [-145, -80, -60, -180, -100, -60, -85, -75, -100],
          },
        ],
        chartOptions: {
          chart: {
            stacked: true,
            type: 'bar',
            toolbar: { show: false },
          },
          grid: {
            padding: {
              top: -20,
              bottom: -10,
            },
            yaxis: {
              lines: { show: false },
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            labels: {
              style: {
                colors: '#b9b9c3',
                fontSize: '0.86rem',
              },
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          colors: [$themeColors.primary, $themeColors.warning],
          plotOptions: {
            bar: {
              columnWidth: '17%',
              endingShape: 'rounded',
            },
            distributed: true,
          },
          yaxis: {
            labels: {
              style: {
                colors: '#b9b9c3',
                fontSize: '0.86rem',
              },
            },
          },
        },
      },

      // budget chart
      budgetChart: {
        series: [
          {
            data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62],
          },
          {
            data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27],
          },
        ],
        options: {
          chart: {
            height: 80,
            toolbar: { show: false },
            zoom: { enabled: false },
            type: 'line',
            sparkline: { enabled: true },
          },
          stroke: {
            curve: 'smooth',
            dashArray: [0, 5],
            width: [2],
          },
          colors: [$themeColors.primary, '#dcdae3'],
          tooltip: {
            enabled: false,
          },
        },
      },
    }
  },
  created() {
    this.$http.get('/card/card-analytics/revenue-report').then(res => { this.revenue_report = res.data })
  },
}
</script>
