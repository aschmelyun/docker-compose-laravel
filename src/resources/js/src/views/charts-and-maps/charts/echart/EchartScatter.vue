<template>
  <b-card title="New Technologies Data">

    <!-- switch buttons -->
    <div class="switch-button float-sm-right">
      <b-form-group>
        <b-form-radio-group
          id="btn-radios-1"
          v-model="selected"
          button-variant="outline-primary"
          :options="radioOption"
          buttons
          size="sm"
          name="radios-btn-default"
        />
      </b-form-group>
    </div>

    <!-- echart -->
    <app-echart-scatter :option-data="option" />
  </b-card>
</template>

<script>
import { BCard, BFormRadioGroup, BFormGroup } from 'bootstrap-vue'
import AppEchartScatter from '@core/components/charts/echart/AppEchartScatter.vue'

export default {
  components: {
    BCard,
    AppEchartScatter,
    BFormRadioGroup,
    BFormGroup,
  },
  data() {
    return {
      selected: 'radio1',
      radioOption: [
        { text: 'Daily', value: 'radio1' },
        { text: 'Monthly', value: 'radio2' },
        { text: 'Yearly', value: 'radio4' },
      ],
      option: {
        series: [
          {
            name: 'iPhone',
            symbolSize: 10,
            data: [[72, 225], [81, 270], [90, 230], [103, 305], [103, 245], [108, 275], [110, 290], [111, 315], [109, 350], [116, 340], [113, 260], [117, 275], [117, 295], [126, 280], [127, 340], [133, 330],
            ],
            type: 'scatter',
          },
          {
            name: 'Samsung Note',
            symbolSize: 10,
            data: [[13, 95], [22, 105], [17, 115], [19, 130], [21, 125], [35, 125], [13, 155], [21, 165], [25, 155], [18, 190], [26, 180], [43, 180], [53, 202], [61, 165], [67, 225],
            ],
            type: 'scatter',
            itemStyle: {
              color: '#FF9F43',
            },
          },
          {
            name: 'OnePlus',
            symbolSize: 10,
            data: [[70, 195], [72, 270], [98, 255], [100, 215], [87, 240], [94, 280], [99, 300], [102, 290], [110, 275], [111, 250], [94, 280], [92, 340], [100, 335], [108, 330]],
            type: 'scatter',
            itemStyle: {
              color: '#00CFE8',
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
// switchbutton position
.switch-button{
  position: relative;
  z-index: 1;
}

@media (min-width: 576px){
  html[dir="rtl"]{
    .switch-button{
      float: right !important;
    }
  }
}
</style>
