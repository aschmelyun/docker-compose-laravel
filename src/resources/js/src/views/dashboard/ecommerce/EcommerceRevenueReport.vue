<template>
  <b-card
    v-if="data"
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
            <div class="d-flex align-items-center ml-75">
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
          :series="data.revenueReport.series"
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
            v-for="year in data.years"
            :key="year"
          >
            {{ year }}
          </b-dropdown-item>
        </b-dropdown>

        <h2 class="mb-25">
          ${{ data.price }}
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
          :series="data.budgetChart.series"
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
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      revenue_report: {},
      revenueReport: {
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
                colors: '#6E6B7B',
                fontSize: '0.86rem',
                fontFamily: 'Montserrat',
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
                colors: '#6E6B7B',
                fontSize: '0.86rem',
                fontFamily: 'Montserrat',
              },
            },
          },
        },
      },
      // budget chart
      budgetChart: {
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
}
</script>
