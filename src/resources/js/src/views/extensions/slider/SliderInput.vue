<template>
  <b-card-code title="Slider With Input">

    <!-- input -->
    <div class="d-flex">
      <b-form-group class="mr-2">
        <b-form-select
          v-model="ldot"
        >
          <b-form-select-option
            v-for="n in 100"
            :key="n"
            :value="n"
          >
            {{ n }}
          </b-form-select-option>
        </b-form-select>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="rdot"
        />
      </b-form-group>
    </div>

    <!-- slider -->
    <vue-slider
      v-model="value"
      :direction="direction"
    />

    <template #code>
      {{ codeInput }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BFormSelect, BFormSelectOption, BFormGroup, BFormInput,
} from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import { codeInput } from './code'

export default {
  components: {
    VueSlider,
    BCardCode,
    BFormSelect,
    BFormGroup,
    BFormInput,
    BFormSelectOption,
  },
  data() {
    return {
      codeInput,
      ldot: 1,
      rdot: 50,
      dir: 'ltr',
    }
  },
  computed: {
    value: {
      get() {
        return [this.ldot, this.rdot]
      },
      set([ldot, rdot]) {
        this.ldot = ldot
        this.rdot = rdot
      },
    },
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
