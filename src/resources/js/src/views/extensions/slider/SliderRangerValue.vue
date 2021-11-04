<template>
  <b-card-code title="Range of values">
    <b-card-text>
      <span>Use </span>
      <code>min</code>
      <span> and </span>
      <code>max</code>
      <span> with </span>
      <code>&lt;vue-slider&gt;</code>
      <span> for range slider.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value"
      :min="0"
      :max="1"
      :direction="direction"
      :interval="0.01"
    />

    <template #code>
      {{ codeRange }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import { codeRange } from './code'

export default {
  components: {
    BCardText,
    VueSlider,
    BCardCode,
  },
  data() {
    return {
      codeRange,
      value: 0.3,
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
