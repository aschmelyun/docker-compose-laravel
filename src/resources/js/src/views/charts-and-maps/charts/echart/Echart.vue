<template>
  <b-row>
    <b-col cols="12">
      <echart-line />
    </b-col>
    <b-col cols="12">
      <echart-stacked-area />
    </b-col>
    <b-col cols="12">
      <echart-area />
    </b-col>
    <b-col cols="12">
      <echart-bar />
    </b-col>
    <b-col cols="12">
      <echart-bar-Horizontal />
    </b-col>
    <b-col md="6">
      <echart-doughnut />
    </b-col>
    <b-col md="6">
      <echart-radar />
    </b-col>
    <b-col cols="12">
      <echart-scatter />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import EchartLine from './EchartLine.vue'
import EchartStackedArea from './EchartStackedArea.vue'
import EchartArea from './EchartArea.vue'
import EchartBar from './EchartBar.vue'
import EchartBarHorizontal from './EchartBarHorizontal.vue'
import EchartDoughnut from './EchartDoughnut.vue'
import EchartRadar from './EchartRadar.vue'
import EchartScatter from './EchartScatter.vue'

export default {
  components: {
    BRow,
    BCol,

    EchartLine,
    EchartStackedArea,
    EchartArea,
    EchartBar,
    EchartBarHorizontal,
    EchartDoughnut,
    EchartRadar,
    EchartScatter,
  },
}
</script>
