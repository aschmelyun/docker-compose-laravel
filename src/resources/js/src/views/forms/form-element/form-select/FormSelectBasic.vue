<template>
  <b-card-code title="BootstrapVue Select">
    <b-card-text>
      <span>Bootstrap custom </span>
      <code>&lt;select&gt;</code>
      <span> using custom styles. Optionally specify options based on an array, array of objects, or an object.</span>
    </b-card-text>

    <div>
      <b-form-select
        v-model="selected"
        :options="options"
      />
      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-1"
      />
      <div class="mt-1">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </div>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSelect, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Simple Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
      codeBasic,
    }
  },
}
</script>
