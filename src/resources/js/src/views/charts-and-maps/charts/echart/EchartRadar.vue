<template>
  <b-card title="Radar Chart">
    <app-echart-radar :option-data="option" />

  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import AppEchartRadar from '@core/components/charts/echart/AppEchartRadar.vue'

export default {
  components: {
    BCard,
    AppEchartRadar,
  },
  data() {
    return {
      option: {
        series: [{
          name: 'Point One vs Point Two',
          type: 'radar',
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: [
            {
              value: [3500, 5000, 7000, 9500, 12000, 40000, 55000, 65000],
              name: 'Point Two',
              itemStyle: {
                color: '#ffe800',
              },
              areaStyle: {
                color: '#ffe800',
                opacity: 0.8,
              },
            },
            {
              value: [4300, 6500, 20000, 25000, 30000, 19000, 30000, 40000],
              name: 'Point One',
              itemStyle: {
                color: '#7367F0',
              },
              areaStyle: {
                color: '#7367F0',
                opacity: 0.8,
              },
            },
          ],
        }],
        indicator: [
          { name: 'One', max: 6500 },
          { name: 'Two', max: 16000 },
          { name: 'Three', max: 30000 },
          { name: 'Four', max: 38000 },
          { name: 'Five', max: 52000 },
          { name: 'Six', max: 75000 },
          { name: 'Sever', max: 65000 },
          { name: 'Eight', max: 85000 },
        ],
      },
    }
  },
}
</script>
