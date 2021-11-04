<template>
  <b-card-code title="Changing the option field names">
    <b-card-text class="mb-0">
      <span>If you want to customize the field property names (for example using </span>
      <code>name</code>
      <span> field for display </span>
      <code>text</code>
      <span>) you can easily change them by setting the </span>
      <code>text-field, html-field, value-field,</code>
      <span>and</span>
      <code>disabled-field</code>
      <span> props to a string that contains the property name you would like to use:</span>
    </b-card-text>

    <b-form-radio-group
      v-model="selected"
      :options="options"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      class="demo-inline-spacing"
    />

    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>

    <template #code>
      {{ codeFieldNames }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRadioGroup, BCardText } from 'bootstrap-vue'
import { codeFieldNames } from './code'

export default {
  components: {
    BCardCode,
    BFormRadioGroup,
    BCardText,
  },
  data() {
    return {
      selected: 'A',
      options: [
        { item: 'A', name: 'Option A' },
        { item: 'B', name: 'Option B' },
        { item: 'D', name: 'Option C', notEnabled: true },
        { item: { d: 1 }, name: 'Option D' },
      ],
      codeFieldNames,
    }
  },
}
</script>
