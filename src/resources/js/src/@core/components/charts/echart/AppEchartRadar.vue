<template>
  <e-charts
    ref="line"
    autoresize
    :options="option"
    theme="theme-color"
    auto-resize
  />
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/radar'
import theme from './theme.json'

ECharts.registerTheme('theme-color', theme)

export default {
  components: {
    ECharts,
  },
  props: {
    optionData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      option: {
        title: {
          text: 'Basic radar chart',
        },
        tooltip: {},
        legend: {
          data: ['Point One', 'Point Two'],
          bottom: '0',
          left: '0',
        },
        radar: {
          name: {
            textStyle: {
              color: '#626262',
              fontWeight: 'bold',
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: this.optionData.indicator,
          splitArea: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: [
                '#eeeeee',
              ],
            },
          },
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
            },
          },
        },
        series: this.optionData.series,
      },
    }
  },
}
</script>
