<template>
  <b-card-code title="RTL Slider">
    <b-card-text>
      <span>Use </span>
      <code>direction="rtl"</code>
      <span> prop with </span>
      <code>&lt;vue-slider&gt;</code>
      <span> component for rtl.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value"
      direction="rtl"
    />

    <template #code>
      {{ codeRTL }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import VueSlider from 'vue-slider-component'
import { codeRTL } from './code'

export default {
  components: {
    BCardText,
    VueSlider,
    BCardCode,
  },
  data() {
    return {
      codeRTL,
      value: 50,
    }
  },
}
</script>
