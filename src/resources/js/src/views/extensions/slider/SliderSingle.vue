<template>
  <b-card-code title="Single Slider">
    <vue-slider
      v-model="value"
      :direction="direction"
    />

    <template #code>
      {{ codeSingle }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import { codeSingle } from './code'

export default {
  components: {
    VueSlider,
    BCardCode,
  },
  data() {
    return {
      codeSingle,
      value: 50,
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
