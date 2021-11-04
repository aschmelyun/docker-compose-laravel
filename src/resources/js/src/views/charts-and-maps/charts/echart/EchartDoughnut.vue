<template>
  <b-card title="Doughnut Chart">
    <div class="pie-text text-center">
      <h2 class="font-weight-bolder">
        $23,994
      </h2>
      <span class="font-weight-bold">Total</span>
    </div>

    <!-- echart -->
    <app-echart-doughnut :series="series" />

  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import AppEchartDoughnut from '@core/components/charts/echart/AppEchartDoughnut.vue'

export default {
  components: {
    BCard,
    AppEchartDoughnut,
  },
  data() {
    return {
      series: [
        {
          name: 'Visit source',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 335, name: 'Point One' },
            { value: 310, name: 'Point Two' },
            { value: 234, name: 'Point Three' },
            { value: 435, name: 'Point Four' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.card-body{
  position: relative;
  .pie-text{
    width: 105px;
    position:absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 44%;
    bottom: 0;
  }
  }
</style>
