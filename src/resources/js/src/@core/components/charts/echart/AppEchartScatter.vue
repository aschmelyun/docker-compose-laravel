<template>
  <e-charts
    ref="line"
    :options="option"
    theme="theme-color"
    auto-resize
  />
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/scatter'
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
        grid: {
          width: '95%',
          left: '30px',
          right: '40px',
          containLabel: false,
        },
        legend: {
          enable: true,
          left: '0',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          boundaryGap: false,
          scale: true,
          splitNumber: 10,
          min: 0,
        },
        yAxis: {
          splitLine: { show: false },
          scale: true,
        },
        series: this.optionData.series,
      },
    }
  },
}
</script>
