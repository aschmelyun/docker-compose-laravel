<template>
  <b-card title="Data Science">
    <app-echart-stacked-area
      :option-data="option"
    />
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import AppEchartStackedArea from '@core/components/charts/echart/AppEchartStackedArea.vue'

export default {
  components: {
    BCard,
    AppEchartStackedArea,
  },
  data() {
    return {
      option: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: [
          {
            name: 'Point One',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            lineStyle: {
              width: 0,
            },
            data: [220, 332, 281, 334, 290, 430, 310, 350, 510, 550, 720, 650, 760, 850],
          },
          {
            name: 'Point Two',
            type: 'line',
            stack: 'Total',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [220, 282, 191, 534, 290, 430, 350, 300, 580, 463, 380, 600, 560, 840],
          },
          {
            name: 'Point Three',
            type: 'line',
            stack: 'Total',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [750, 232, 601, 154, 390, 330, 410, 510, 420, 320, 580, 690, 650, 800],
          },
        ],
      },
    }
  },
}
</script>
