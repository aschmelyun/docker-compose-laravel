<template>
  <b-card-code title="Contained Slider">
    <b-card-text>
      <span>When </span>
      <code>contained</code>
      <span> is set to </span>
      <code>true</code>
      <span>, the edge of the </span>
      <code>dot</code>
      <span> is used to align.</span>
    </b-card-text>

    <!-- contatined -->
    <div class="wrap">
      <vue-slider :direction="direction" />
      <b-card-text>contained: false</b-card-text>
      <vue-slider
        :direction="direction"
        :contained="true"
      />
      <b-card-text>contained: true</b-card-text>
    </div>

    <template #code>
      {{ codeContained }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import { codeContained } from './code'

export default {
  components: {
    BCardText,
    VueSlider,
    BCardCode,
  },
  data() {
    return {
      codeContained,
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

<style lang="scss" >
// container style
.wrap {
  border-left: 1px dashed #ddd;
  border-right: 1px dashed #ddd;
  padding: 10px 0;
}
</style>
