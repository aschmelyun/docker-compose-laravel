<template>
  <b-card-code title="Standard (single) select">
    <b-card-text>
      <span>In non </span>
      <code>multiple</code>
      <span> mode, </span>
      <code>&lt;b-form-select&gt;</code>
      <span> returns the a single </span>
      <code>value</code>
      <span> of the currently selected option. </span>
    </b-card-text>

    <div>
      <b-form-select
        v-model="selected"
        :options="options"
      />
      <b-card-text class="mt-1 mb-0">
        Selected: <strong>{{ selected }}</strong>
      </b-card-text>
    </div>

    <template #code>
      {{ codeStandard }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSelect, BCardText } from 'bootstrap-vue'
import { codeStandard } from './code'

export default {
  components: {
    BCardCode,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
      selected: null,
      codeStandard,
      options: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
  },
}
</script>
