<template>
  <b-card-code title="Multiple Slider">
    <b-card-text>
      <span>Set multiple value to slider for multiple </span>
      <code>dots</code>
    </b-card-text>

    <!-- sliders -->
    <vue-slider
      v-model="value_2"
      :direction="direction"
      class="mb-2"
    />
    <vue-slider
      v-model="value_3"
      :direction="direction"
      class="mb-2"
    />
    <vue-slider
      v-model="value_4"
      :direction="direction"
    />

    <template #code>
      {{ codeMultiple }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import { codeMultiple } from './code'

export default {
  components: {
    BCardText,
    VueSlider,
    BCardCode,
  },
  data() {
    return {
      codeMultiple,
      value_2: [0, 50],
      value_3: [0, 50, 80],
      value_4: [0, 50, 80, 100],
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
