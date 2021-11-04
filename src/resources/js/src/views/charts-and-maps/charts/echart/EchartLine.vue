<template>
  <b-card title="Balance">
    <div class="d-flex justify-content-between flex-wrap">
      <div class="mb-1 mb-sm-0">
        <span class="text-muted">Commercial networks and enterprises</span>
      </div>
      <div class="d-flex align-content-center mb-1 mb-sm-0">
        <h1 class="font-weight-bolder ">
          $ 183,382
        </h1>
        <div class="pt-25 ml-75">
          <b-badge variant="light-secondary">
            <feather-icon
              icon="ArrowDownIcon"
              size="12"
              class="text-danger align-middle"
            />
            <span class="font-weight-bolder align-middle"> 24%</span>
          </b-badge>
        </div>
      </div>
    </div>

    <!-- echart -->
    <app-echart-line :option-data="option" />

  </b-card>
</template>

<script>
import { BCard, BBadge } from 'bootstrap-vue'
import AppEchartLine from '@core/components/charts/echart/AppEchartLine.vue'

export default {
  components: {
    BCard,
    AppEchartLine,
    BBadge,
  },
  data() {
    return {
      option: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],
      },
    }
  },
}
</script>
