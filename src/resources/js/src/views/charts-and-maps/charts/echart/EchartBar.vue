<template>
  <b-card title="Data Science">
    <app-echart-bar
      :option-data="option"
    />
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import AppEchartBar from '@core/components/charts/echart/AppEchartBar.vue'

export default {
  components: {
    BCard,
    AppEchartBar,
  },
  data() {
    return {
      option: {
        xAxis: [
          {
            type: 'category',
            data: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
          },
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: { show: false },
          },
        ],
        grid: {
          left: '40px',
          right: '30px',
          bottom: '30px',
        },
        series: [
          {
            name: 'Point One',
            type: 'bar',
            stack: 'advertising',
            data: [220, 232, 201, 334, 290, 230, 220, 360, 80, 130, 310, 460, 110, 80],
            barMaxWidth: '20%',
            barMinWidth: '10px',
          },
          {
            name: 'Point Two',
            type: 'bar',
            stack: 'advertising',
            data: [220, 232, 201, 234, 190, 130, 210, 163, 105, 120, 220, 102, 150, 130],
            barMaxWidth: '20%',
            barMinWidth: '10px',
          },
          {
            name: 'Point Three',
            type: 'bar',
            stack: 'advertising',
            data: [120, 102, 101, 134, 190, 130, 210, 102, 80, 50, 90, 50, 40, 30],
            barMaxWidth: '20%',
            barMinWidth: '10px',
          },
          {
            name: 'Point Four',
            type: 'bar',
            stack: 'advertising',
            data: [350, 432, 301, 392, 90, 230, 310, 130, 50, 250, 50, 120, 50, 110],
            barMaxWidth: '20%',
            barMinWidth: '10px',
            itemStyle: {
              barBorderRadius: [10, 10, 0, 0],
            },
          },
        ],
      },
    }
  },
}
</script>
