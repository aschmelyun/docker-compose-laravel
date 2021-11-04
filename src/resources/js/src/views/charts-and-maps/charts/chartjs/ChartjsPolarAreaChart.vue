<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>Average Skills</b-card-title>
      <!-- dropdown -->
      <b-dropdown
        dropright
        variant="link"
        toggle-class="p-0"
        no-caret
      >
        <template #button-content>
          <feather-icon
            class="text-body"
            icon="MoreVerticalIcon"
          />
        </template>
        <b-dropdown-item>
          Last 28 Days
        </b-dropdown-item>
        <b-dropdown-item>
          Last Month
        </b-dropdown-item>
        <b-dropdown-item>
          Last Year
        </b-dropdown-item>
      </b-dropdown>
      <!--/ dropdown -->
    </b-card-header>

    <!-- chart -->
    <b-card-body>
      <chartjs-component-polar-area-chart
        :height="350"
        :data="chartjsData.polarChart.data"
        :options="chartjsData.polarChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardTitle, BCardBody, BCardHeader, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import ChartjsComponentPolarAreaChart from './charts-components/ChartjsComponentPolarAreaChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentPolarAreaChart,
    BCard,
    BCardTitle,
    BCardBody,
    BCardHeader,
    BDropdown,
    BDropdownItem,
  },
  data() {
    return {
      chartjsData,
    }
  },
}
</script>
