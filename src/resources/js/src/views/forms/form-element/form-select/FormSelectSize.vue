<template>
  <b-card-code title="Select sizing (displayed rows)">
    <b-card-text>
      <span>You can use the </span>
      <code>select-size</code>
      <span> prop to switch the custom select into a select list-box, rather than a dropdown. Set the </span>
      <code>select-size</code>
      <span> prop to a numerical value greater than 1 to control how many rows of options are visible.</span>
    </b-card-text>

    <div>
      <b-form-select
        v-model="selected"
        :options="options"
        :select-size="4"
      />
      <b-card-text class="mt-1 mb-0">
        Selected: <strong>{{ selected }}</strong>
      </b-card-text>
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSelect, BCardText } from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
      selected: null,
      codeSize,
      options: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is option a' },
        { value: 'b', text: 'Default Selected Option b' },
        { value: 'c', text: 'This is option c' },
        { value: 'd', text: 'This one is disabled', disabled: true },
        { value: 'e', text: 'This is option e' },
        { value: 'e', text: 'This is option f' },
      ],
    }
  },
}
</script>
