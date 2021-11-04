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
import 'echarts/lib/chart/line'
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
          text: 'Stacked area chart',
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
        legend: {
          left: '0',
        },
        grid: {
          width: '95%',
          left: '40px',
          right: '4%',
          containLabel: false,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.optionData.xAxisData,
          },
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: { show: false },
          },
        ],
        series: this.optionData.series,
      },
    }
  },
}
</script>
