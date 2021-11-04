<template>
  <b-card-code title="Radio group options array">
    <b-card-text class="mb-0">
      <code>options</code>
      <span> can be an array of strings or objects. Available fields: </span>
      <code>value</code>
      <span> The selected value which will be set on </span>
      <code>v-model</code>
      <span>, </span>
      <code>disabled</code>
      <span> Disables item for selection, </span>
      <code>text</code>
      <span> Display text, or </span>
      <code>html</code>
      <span> Display basic inline html</span>
    </b-card-text>

    <b-form-radio-group
      v-model="selected"
      :options="options"
      class="demo-inline-spacing mb-1"
      value-field="value"
      text-field="text"
      disabled-field="disabled"
    />

    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>

    <template #code>
      {{ codeArray }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRadioGroup, BCardText } from 'bootstrap-vue'
import { codeArray } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormRadioGroup,
  },
  data() {
    return {
      selected: 'first',
      options: [
        { text: 'Item 1', value: 'first', disabled: false },
        { text: 'Item 2', value: 'second', disabled: false },
        { html: '<b>Item</b> 3', value: 'third', disabled: true },
        { text: 'Item 4', value: 'Item 4', disabled: false },
        { text: 'Item 5', value: 'E', disabled: false },
      ],
      codeArray,
    }
  },
}
</script>
