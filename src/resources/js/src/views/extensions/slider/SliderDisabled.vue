<template>
  <b-card-code title="Disabled Slider">
    <b-card-text>
      <span>You can disable the entire component with </span>
      <code>disabled</code>
      <span> or disable the slider separately with </span>
      <code>dot-options</code>
    </b-card-text>

    <!--disabled slider -->
    <vue-slider
      v-model="value1"
      :disabled="true"
      class="mb-2"
      :direction="direction"
    />

    <!-- disabled dot -->
    <vue-slider
      v-model="value2"
      :dot-options="dotOptions"
      :order="false"
      :direction="direction"
    />

    <template #code>
      {{ codeDisabled }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import { codeDisabled } from './code'

export default {
  components: {
    BCardText,
    VueSlider,
    BCardCode,
  },
  data() {
    return {
      codeDisabled,
      dir: 'ltr',
      value1: 0,
      value2: [0, 50],
      dotOptions: [{
        disabled: false,
      }, {
        disabled: true,
      }],
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
