<template>
  <b-card-code title="Adsorb Slider">
    <b-card-text>
      <span>When </span>
      <code>adsorb</code>
      <span> is set to </span>
      <code>true</code>
      <span>, the slider automatically adsorb to the nearest value.</span>
    </b-card-text>

    <div>
      <vue-slider
        v-model="value1"
        :adsorb="true"
        :interval="10"
        :marks="true"
        class="mb-3"
        :direction="direction"
      />
      <vue-slider
        v-model="value2"
        :adsorb="true"
        :data="data"
        :marks="true"
        class="mb-3"
        :direction="direction"
      />
      <vue-slider
        v-model="value3"
        :adsorb="true"
        :marks="marks"
        :included="true"
        class="mb-2"
        :direction="direction"
      />
    </div>

    <template #code>
      {{ codeAdsorb }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import { codeAdsorb } from './code'

export default {
  components: {
    BCardText,
    VueSlider,
    BCardCode,
  },
  data() {
    return {
      codeAdsorb,
      value1: 20,
      value2: 'c',
      value3: 60,
      data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      marks: [0, 10, 30, 60, 100],
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
