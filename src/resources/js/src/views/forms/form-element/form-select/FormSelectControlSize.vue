<template>
  <b-card-code
    title="Control sizing"
  >
    <b-card-text>
      <span>Set the form-control text size using the </span>
      <code>size</code>
      <span> prop to </span>

      <code>sm</code>
      <span> or </span>
      <code>lg</code>
      <span> for small or large respectively.</span>
    </b-card-text>

    <div>
      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
      />
      <b-form-select
        v-model="selected"
        :options="options"
        size="lg"
        class="mt-1"
      />
      <div class="mt-1">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </div>

    <template #code>
      {{ codeControlSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSelect, BCardText } from 'bootstrap-vue'
import { codeControlSize } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormSelect,
  },
  data() {
    return {
      selected: null,
      codeControlSize,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Simple Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
  },
}
</script>
