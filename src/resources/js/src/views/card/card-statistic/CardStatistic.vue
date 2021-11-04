<template>
  <div>
    <!-- Miscellaneous Charts -->
    <b-row class="match-height">
      <b-col
        lg="2"
        cols="6"
      >
        <card-statistic-order-chart />
      </b-col>
      <b-col
        lg="2"
        cols="6"
      >
        <card-statistic-profit-chart />
      </b-col>
      <b-col
        lg="8"
        cols="12"
      >
        <card-statistics-group />
      </b-col>
    </b-row>
    <!--/ Miscellaneous Charts -->

    <!-- Stats Card Vertical -->
    <b-row class="match-height">
      <b-col
        xl="2"
        md="4"
        sm="6"
      >
        <statistic-card-vertical
          icon="EyeIcon"
          statistic="36.9k"
          statistic-title="Views"
          color="info"
        />
      </b-col>
      <b-col
        xl="2"
        md="4"
        sm="6"
      >
        <statistic-card-vertical
          color="warning"
          icon="MessageSquareIcon"
          statistic="12k"
          statistic-title="Comments"
        />
      </b-col>
      <b-col
        xl="2"
        md="4"
        sm="6"
      >
        <statistic-card-vertical
          color="danger"
          icon="ShoppingBagIcon"
          statistic="97.8k"
          statistic-title="Orders"
        />
      </b-col>
      <b-col
        xl="2"
        md="4"
        sm="6"
      >
        <statistic-card-vertical
          color="primary"
          icon="HeartIcon"
          statistic="26.8"
          statistic-title="Favorited"
        />
      </b-col>
      <b-col
        xl="2"
        md="4"
        sm="6"
      >
        <statistic-card-vertical
          color="success"
          icon="AwardIcon"
          statistic="689"
          statistic-title="Reviews"
        />
      </b-col>
      <b-col
        xl="2"
        md="4"
        sm="6"
      >
        <statistic-card-vertical
          hide-chart
          color="danger"
          icon="TruckIcon"
          statistic="2.1k"
          statistic-title="Returns"
        />
      </b-col>
    </b-row>

    <!-- Stats Card Horizontal -->
    <b-row>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          icon="CpuIcon"
          statistic="86%"
          statistic-title="CPU Usage"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          icon="ServerIcon"
          color="success"
          statistic="1.2gb"
          statistic-title="Memory Usage"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          icon="ActivityIcon"
          color="danger"
          statistic="0.1%"
          statistic-title="Downtime Ratio"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          icon="AlertOctagonIcon"
          color="warning"

          statistic="13"
          statistic-title="Issues Found"
        />
      </b-col>
    </b-row>

    <!-- Stats Card w/ Area Chart -->
    <b-row>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="subscribersGained.analyticsData"
          icon="UsersIcon"
          :statistic="kFormatter(subscribersGained.analyticsData.subscribers)"
          statistic-title="Subscribers Gained"
          :chart-data="subscribersGained.series"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="revenueGenerated.analyticsData"
          icon="CreditCardIcon"
          color="success"
          :statistic="kFormatter(revenueGenerated.analyticsData.revenue)"
          statistic-title="Revenue Generated"
          :chart-data="revenueGenerated.series"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="quarterlySales.analyticsData"
          icon="ShoppingCartIcon"
          color="danger"
          :statistic="kFormatter(quarterlySales.analyticsData.sales)"
          statistic-title="Quarterly Sales"
          :chart-data="quarterlySales.series"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="ordersRecevied.analyticsData"
          icon="PackageIcon"
          color="warning"
          :statistic="kFormatter(ordersRecevied.analyticsData.orders)"
          statistic-title="Orders Received"
          :chart-data="ordersRecevied.series"
        />
      </b-col>
    </b-row>

    <!-- Stats Card w/ line chart -->
    <b-row>
      <b-col
        md="4"
        sm="6"
      >
        <statistic-card-with-line-chart
          icon="MonitorIcon"
          statistic="78.9k"
          statistic-title="Site Traffic"
          :chart-data="siteTraffic.series"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <statistic-card-with-line-chart
          icon="UserCheckIcon"
          color="success"
          statistic="659.8k"
          statistic-title="Active Users"
          :chart-data="activeUsers.series"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <statistic-card-with-line-chart
          icon="MailIcon"
          color="warning"
          statistic="28.7k"
          statistic-title="Newsletter"
          :chart-data="newsletter.series"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import StatisticCardVertical from '@core/components/statistics-cards/StatisticCardVertical.vue'
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'
import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import StatisticCardWithLineChart from '@core/components/statistics-cards/StatisticCardWithLineChart.vue'
import { kFormatter } from '@core/utils/filter'
import CardStatisticOrderChart from './CardStatisticOrderChart.vue'
import CardStatisticProfitChart from './CardStatisticProfitChart.vue'
import CardStatisticsGroup from './CardStatisticsGroup.vue'

export default {
  components: {
    BRow,
    BCol,
    StatisticCardVertical,
    StatisticCardHorizontal,
    StatisticCardWithAreaChart,
    StatisticCardWithLineChart,
    CardStatisticOrderChart,
    CardStatisticProfitChart,
    CardStatisticsGroup,
  },
  data() {
    return {
      // Area charts
      subscribersGained: {},
      revenueGenerated: {},
      quarterlySales: {},
      ordersRecevied: {},

      // Line Charts
      siteTraffic: {},
      activeUsers: {},
      newsletter: {},
    }
  },
  created() {
    // Subscribers gained
    this.$http.get('/card/card-statistics/subscribers')
      .then(response => { this.subscribersGained = response.data })

    // Revenue Generated
    this.$http.get('/card/card-statistics/revenue')
      .then(response => { this.revenueGenerated = response.data })

    // Sales
    this.$http.get('/card/card-statistics/sales')
      .then(response => { this.quarterlySales = response.data })

    // Orders
    this.$http.get('/card/card-statistics/orders')
      .then(response => { this.ordersRecevied = response.data })

    // Site Traffic gained
    this.$http.get('/card/card-statistics/site-traffic')
      .then(response => { this.siteTraffic = response.data })

    // Active Users
    this.$http.get('/card/card-statistics/active-users')
      .then(response => { this.activeUsers = response.data })

    // Newsletter
    this.$http.get('/card/card-statistics/newsletter')
      .then(response => { this.newsletter = response.data })
  },
  methods: {
    kFormatter,
  },
}
</script>
