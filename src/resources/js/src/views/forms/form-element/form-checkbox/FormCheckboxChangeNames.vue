<template>
  <b-card-code title="Changing the option field names">
    <b-card-text>
      <span>If you want to customize the field property names (for example using </span>
      <code>name</code>
      <span> field for display </span>
      <code>text</code>
      <span> ) you can easily change them by setting the </span>
      <code>text-field</code>
      <span> , </span>
      <code>html-field</code>
      <span> , </span>
      <code>value-field</code>
      <span> , and </span>
      <code>disabled-field</code>
      <span> props to a string that contains the property name you would like to use:</span>
    </b-card-text>

    <b-form-checkbox-group
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
      {{ codeChangeNames }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormCheckboxGroup, BCardText } from 'bootstrap-vue'
import { codeChangeNames } from './code'

export default {
  components: {
    BFormCheckboxGroup,
    BCardText,
    BCardCode,
  },
  data() {
    return {
      codeChangeNames,
      selected: [],
      options: [
        { item: 'A', name: 'Option A' },
        { item: 'B', name: 'Option B' },
        { item: 'D', name: 'Option C', notEnabled: true },
        { item: { d: 1 }, name: 'Option D' },
      ],
    }
  },
}
</script>
