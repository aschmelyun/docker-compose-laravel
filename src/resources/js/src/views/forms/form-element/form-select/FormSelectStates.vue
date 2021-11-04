<template>
  <b-card-code
    title="Contextual states"
  >
    <b-card-text>
      <span>Bootstrap includes validation styles for </span>
      <code>valid</code>
      <span> and </span>
      <code>invalid</code>
      <span> states on most form controls.</span>
    </b-card-text>

    <b-card-text>
      <span>To apply one of the contextual state icons on </span>
      <code>&lt;b-form-select&gt;</code>
      <span>, set the </span>
      <code>state</code>
      <span> prop to </span>
      <code>false</code>
      <span> (for invalid), </span>
      <code>true</code>
      <span> (for valid), or </span>
      <code>null</code>
      <span> (no validation state).</span>
    </b-card-text>

    <b-form-select
      v-model="selected"
      :options="options"
      :state="selected === null ? false : true"
    />
    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>

    <template #code>
      {{ codeStates }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSelect, BCardText } from 'bootstrap-vue'
import { codeStates } from './code'

export default {
  components: {
    BCardCode,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
      selected: null,
      codeStates,
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
