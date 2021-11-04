<template>
  <div>
    <h4 class="card-title">
      VERTICAL SLIDERS
    </h4>
    <p>
      <span>When the value of direction is </span>
      <code>btt</code>
      <span> or </span>
      <code>ttb</code>
      <span>, you need to set the component height</span>
    </p>

    <b-row>

      <!-- default vertical slider -->
      <b-col
        lg="4"
        md="6"
      >
        <b-card-code title="Default Vertical Slider">
          <div class="d-flex justify-content-center">
            <vue-slider
              v-model="value"
              direction="btt"
              :height="200"
              :process="false"
              class="mr-1"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value1"
              direction="btt"
              :height="200"
              :process="false"
              class="mr-1 vue-slider-secondary"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value2"
              direction="btt"
              :height="200"
              :process="false"
              class="mr-1 vue-slider-success"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value3"
              direction="btt"
              :height="200"
              :process="false"
              class="mr-1 vue-slider-warning"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value4"
              direction="btt"
              :height="200"
              :process="false"
              class="mr-1 vue-slider-danger"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value5"
              direction="btt"
              :height="200"
              :process="false"
              class="mr-1 vue-slider-info"
              :tooltip="'none'"
            />
          </div>

          <template #code>
            {{ codeVerticalDefault }}
          </template>
        </b-card-code>
      </b-col>

      <!-- connect to lower -->
      <b-col
        lg="4"
        md="6"
      >
        <b-card-code title="Connect to lower">
          <div class="d-flex justify-content-center">
            <vue-slider
              v-model="value6"
              direction="ttb"
              :height="200"
              class="mr-1"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value7"
              direction="ttb"
              :height="200"
              class="mr-1 vue-slider-secondary"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value8"
              direction="ttb"
              :height="200"
              class="mr-1 vue-slider-success"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value9"
              direction="ttb"
              :height="200"
              class="mr-1 vue-slider-warning"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value10"
              direction="ttb"
              :height="200"
              class="mr-1 vue-slider-danger"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value11"
              direction="ttb"
              :height="200"
              class="mr-1 vue-slider-info"
              :tooltip="'none'"
            />
          </div>

          <template #code>
            {{ codeConntectLower }}
          </template>
        </b-card-code>
      </b-col>

      <!-- connect to uper -->
      <b-col
        lg="4"
        md="6"
      >
        <b-card-code title="Connect to upper">
          <div class="d-flex justify-content-center">
            <vue-slider
              v-model="value12"
              direction="btt"
              :height="200"
              class="mr-1"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value13"
              direction="btt"
              :height="200"
              class="mr-1 vue-slider-secondary"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value14"
              direction="btt"
              :height="200"
              class="mr-1 vue-slider-success"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value15"
              direction="btt"
              :height="200"
              class="mr-1 vue-slider-warning"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value16"
              direction="btt"
              :height="200"
              class="mr-1 vue-slider-danger"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value17"
              direction="btt"
              :height="200"
              class="mr-1 vue-slider-info"
              :tooltip="'none'"
            />
          </div>

          <template #code>
            {{ codeConnectUpper }}
          </template>
        </b-card-code>
      </b-col>

      <!-- Tooltips -->
      <b-col
        lg="4"
        md="6"
      >
        <b-card-code title="Tooltips">
          <div class="d-flex justify-content-center">
            <vue-slider
              v-model="value18"
              direction="btt"
              :tooltip="'always'"
              :height="200"
              class="mr-4"
              :process="false"
            />
            <vue-slider
              v-model="value19"
              direction="btt"
              :height="200"
              :process="false"
              :tooltip="'always'"
              class="mr-4 vue-slider-success"
            />
            <vue-slider
              v-model="value20"
              direction="btt"
              :process="false"
              :tooltip="'always'"
              :height="200"
              class="mr-4 vue-slider-warning"
            />
          </div>

          <template #code>
            {{ codeTooltips }}
          </template>
        </b-card-code>
      </b-col>

      <!-- Direction top to bottom -->
      <b-col
        lg="4"
        md="6"
      >
        <b-card-code title="Direction Top To Bottom">
          <div class="d-flex justify-content-center">
            <vue-slider
              v-model="value21"
              direction="btt"
              :height="200"
              class="mr-4"
              :adsorb="true"
              :tooltip="'none'"
              :interval="20"
              :marks="true"
            />
            <vue-slider
              v-model="value22"
              direction="btt"
              :height="200"
              :adsorb="true"
              :data="data"
              :marks="true"
              class="mr-4 vue-slider-success"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value23"
              direction="btt"
              :height="200"
              :adsorb="true"
              :included="true"
              :marks="marks"
              class="mr-4 vue-slider-warning"
              :tooltip="'none'"
            />
          </div>

          <template #code>
            {{ codeTopBottom }}
          </template>
        </b-card-code>
      </b-col>

      <!-- limit -->
      <b-col
        lg="4"
        md="6"
      >
        <b-card-code title="Limit">
          <div class="d-flex justify-content-center">
            <vue-slider
              v-model="value24"
              direction="btt"
              :height="200"
              :min-range="20"
              :max-range="50"
              class="mr-1"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value25"
              direction="btt"
              :height="200"
              class="mr-1 vue-slider-secondary"
              :tooltip="'none'"
              :fixed="true"
            />
            <vue-slider
              v-model="value26"
              direction="btt"
              :height="200"
              :min-range="20"
              :max-range="50"
              class="mr-1 vue-slider-success"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value27"
              direction="btt"
              :height="200"
              class="mr-1 vue-slider-warning"
              :tooltip="'none'"
              :fixed="true"
            />
            <vue-slider
              v-model="value28"
              direction="btt"
              :height="200"
              :min-range="20"
              :max-range="50"
              class="mr-1 vue-slider-danger"
              :tooltip="'none'"
            />
            <vue-slider
              v-model="value29"
              direction="btt"
              :height="200"
              class="mr-1 vue-slider-info"
              :tooltip="'none'"
              :fixed="true"
            />
          </div>

          <template #code>
            {{ codeLimit }}
          </template>
        </b-card-code>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BRow, BCol } from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'
import {
  codeVerticalDefault, codeConntectLower, codeConnectUpper, codeTooltips, codeTopBottom, codeLimit,
} from './code'

export default {
  components: {
    VueSlider,
    BCardCode,
    BRow,
    BCol,
  },
  data() {
    return {
      value: 60,
      value1: 50,
      value2: 40,
      value3: 60,
      value4: 70,
      value5: 85,
      value6: 60,
      value7: 50,
      value8: 40,
      value9: 60,
      value10: 70,
      value11: 85,
      value12: 60,
      value13: 50,
      value14: 40,
      value15: 60,
      value16: 70,
      value17: 85,
      value18: 60,
      value19: 70,
      value20: 85,
      value21: 60,
      value22: 'a',
      value23: 60,
      value24: [20, 50],
      value25: [40, 80],
      value26: [20, 50],
      value27: [40, 80],
      value28: [20, 50],
      value29: [40, 80],
      data: ['a', 'b', 'c', 'd', 'e'],
      marks: [0, 10, 30, 60, 100],
      codeVerticalDefault,
      codeConntectLower,
      codeTooltips,
      codeConnectUpper,
      codeTopBottom,
      codeLimit,
    }
  },
}
</script>
