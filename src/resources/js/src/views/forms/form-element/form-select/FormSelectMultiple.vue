<template>
  <b-card-code title="Multiple select support">
    <b-card-text>
      <span>Enable multiple select mode by setting the prop </span>
      <code>multiple</code>
      <span>, and control how many rows are displayed in the multiple select list-box by setting </span>
      <code>select-size</code>
      <span> to the number of rows to display. The default is to let the browser use its default (typically 4). </span>
    </b-card-text>

    <b-form-select
      v-model="selected"
      :options="options"
      multiple
      :select-size="4"
    />
    <div class="mt-1">
      Selected: <strong>{{ selected }}</strong>
    </div>

    <template #code>
      {{ codeMultiple }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSelect, BCardText } from 'bootstrap-vue'
import { codeMultiple } from './code'

export default {
  components: {
    BCardCode,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
      selected: ['b'],
      codeMultiple,
      options: [
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true },
        { value: 'e', text: 'This is option e' },
        { value: 'f', text: 'This is option f' },
        { value: 'g', text: 'This is option g' },
      ],
    }
  },
}
</script>
