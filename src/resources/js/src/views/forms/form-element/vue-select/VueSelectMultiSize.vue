<template>
  <b-card-code
    title="Multi size"
  >
    <b-card-text>
      <span>For different sizes of select2, Use classes like </span>
      <code>.select-size-sm</code>
      <span> & </span>
      <code>.select-size-lg</code>
      <span> for Large, small & Extra Small Select respectively.</span>
    </b-card-text>

    <b-row>

      <!-- Small -->
      <b-col cols="12">
        <b-form-group>
          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            :options="option"
            class="select-size-sm"
            multiple
          />
        </b-form-group>
      </b-col>

      <!-- Medium -->
      <b-col cols="12">
        <b-form-group>
          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            :options="option"
            multiple
          />
        </b-form-group>
      </b-col>

      <!-- Large -->
      <b-col cols="12">
        <b-form-group>
          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            :options="option"
            class="select-size-lg"
            multiple
          />
        </b-form-group>
      </b-col>
    </b-row>

    <template #code>
      {{ codeVueMultipleSize }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BCardText,
} from 'bootstrap-vue'

import BCardCode from '@core/components/b-card-code'
import vSelect from 'vue-select'
import { codeVueMultipleSize } from './code'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BCardText,
    BCardCode,
    vSelect,
  },
  data() {
    return {
      selected: { title: 'Square' },
      codeVueMultipleSize,
      option: [{ title: 'Square' }, { title: 'Rectangle' }, { title: 'Rombo' }, { title: 'Romboid' }],
    }
  },
}
</script>
