<template>
  <b-card title="Horizontal Bar Chart">
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
            type: 'value',
          },
        ],
        yAxis: [
          {
            type: 'category',
            data: ['Sunday, 17', 'Saturday, 16', 'Friday, 15', 'Thursday, 14', 'wednesday, 13', 'Tuesday, 12', 'Monday,11'],
            splitLine: { show: false },
          },
        ],
        grid: {
          left: '100px',
          right: '30px',
          bottom: '30px',
        },
        series: [
          {
            name: 'Point One',
            type: 'bar',
            stack: 'advertising',
            data: [120, 132, 101, 134, 150, 130, 120],
            barWidth: '30%',
          },
          {
            name: 'Point Two',
            type: 'bar',
            stack: 'advertising',
            data: [120, 132, 101, 134, 90, 30, 110],
            barWidth: '30%',
          },
          {
            name: 'Point Three',
            type: 'bar',
            stack: 'advertising',
            data: [50, 82, 81, 84, 100, 100, 110],
            barWidth: '30%',
          },
          {
            name: 'Point Four',
            type: 'bar',
            stack: 'advertising',
            data: [150, 132, 101, 92, 90, 130, 310],
            barWidth: '30%',
            itemStyle: {
              barBorderRadius: [0, 10, 10, 0],
            },
          },
        ],
      },
    }
  },
}
</script>
