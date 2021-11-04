<template>
  <b-card-code title="Slider behavior">

    <!-- default slider -->
    <h6>Default</h6>
    <b-card-text>It is the default behavior of slider.</b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value"
      :direction="direction"
    />

    <!-- drang and click slider -->
    <h6 class="mt-2">
      Drag on Click
    </h6>
    <b-card-text>
      <span>When </span>
      <code>drag-on-click</code>
      <span> is set to </span>
      <code>true</code>
      <span>, can drag the slider directly when pressing the process.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value1"
      :direction="direction"
      :drag-on-click="true"
    />

    <!-- process not filled slider -->
    <h6 class="mt-2">
      Process not filled
    </h6>
    <b-card-text>
      <span>User </span>
      <code>process</code>
      <span> prop false for unfill the processbar.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value2"
      :direction="direction"
      :process="false"
    />

    <!-- min and max slider -->
    <h6 class="mt-2">
      Min & Max
    </h6>
    <b-card-text>
      <span>Use </span>
      <code>min-range</code>
      <span> and </span>
      <code>max-range</code>
      <span> prop to limit the slider.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value3"
      :min-range="10"
      :direction="direction"
      :max-range="50"
    />

    <!-- fixed slider  -->
    <h6 class="mt-2">
      Fixed
    </h6>
    <b-card-text>
      <span>Use </span>]
      <code>fixed</code>
      <span> prop to fixed the slider.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value4"
      :direction="direction"
      :fixed="true"
    />

    <template #code>
      {{ codebehavior }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import { codebehavior } from './code'

export default {
  components: {
    VueSlider,
    BCardText,
    BCardCode,
  },
  data() {
    return {
      codebehavior,
      value: 10,
      value1: 30,
      value2: 50,
      value3: [10, 40],
      value4: [10, 50],
      dir: 'ltr',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
