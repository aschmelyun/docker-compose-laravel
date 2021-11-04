<template>
  <b-card-code title="Vue-Select">
    <b-row>
      <!-- basic select -->
      <b-col md="6">
        <h6>Basic Select</h6>
        <b-card-text>
          <code>vue-select</code>
          <span> accepts arrays of primitive values or objects to use as </span>
          <code>options</code>
          <span> through the options prop:</span>
        </b-card-text>

        <b-form-group>
          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            :options="option"
          />
        </b-form-group>
      </b-col>

      <!-- select with icon -->
      <b-col md="6">
        <h6>Select with Icon</h6>
        <b-card-text>
          <span>The current option within the dropdown, contained within </span><code>&lt;li&gt;</code>
          <span>.</span>
          <code>option {Object}</code>
          <span> - The currently iterated option from </span>
          <code>filteredOptions</code>
        </b-card-text>

        <b-form-group>
          <v-select
            v-model="selected1"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="books"
            label="title"
          >
            <template #option="{ title, icon }">
              <feather-icon
                :icon="icon"
                size="16"
                class="align-middle mr-50"
              />
              <span> {{ title }}</span>
            </template>
          </v-select>
        </b-form-group>
      </b-col>
    </b-row>

    <template #code>
      {{ codeVueBasic }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BCardText,
} from 'bootstrap-vue'

import BCardCode from '@core/components/b-card-code'
import vSelect from 'vue-select'
import { codeVueBasic } from './code'

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
      codeVueBasic,
      selected: { title: 'Square' },
      selected1: {
        title: 'Aperture',
        icon: 'ApertureIcon',
      },
      option: [{ title: 'Square' }, { title: 'Rectangle' }, { title: 'Rombo' }, { title: 'Romboid' }],
      books: [
        {
          title: 'Aperture',
          icon: 'ApertureIcon',
        },
        {
          title: 'Codepen',
          icon: 'CodepenIcon',
        },
        {
          title: 'Globe ',
          icon: 'GlobeIcon',
        },
        {
          title: 'Instagram ',
          icon: 'InstagramIcon',
        },
      ],
    }
  },
}
</script>
