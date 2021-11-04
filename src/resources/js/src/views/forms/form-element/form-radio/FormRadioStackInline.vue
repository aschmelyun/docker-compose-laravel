<template>
  <b-card-code
    title="Inline or stacked radios"
  >
    <b-card-text>
      <span>By default </span>
      <code>&lt;b-form-radio-group&gt;</code>
      <span> generates inline radio inputs, while </span>
      <code>&lt;b-form-radio&gt;</code>
      <span> generates stacked radios. Set the prop </span>
      <code>stacked</code>
      <span> on </span>
      <code>&lt;b-form-radio-group&gt;</code>
      <span> to make the radios appear one over the other, or when using radios not in a group, set the </span>
      <code>inline</code>
      <span> prop on </span>
      <code>b-form-radio</code>
      <span> to true to render them inline.</span>
    </b-card-text>

    <div>
      <b-form-group label="Inline radios (default)">
        <b-form-radio-group
          v-model="selected"
          :options="options"
          class="demo-inline-spacing"
          name="radio-inline"
        />
      </b-form-group>

      <b-form-group label="Stacked radios">
        <b-form-radio-group
          v-model="selected"
          :options="options"
          name="radios-stacked"
          stacked
        />
      </b-form-group>

      <b-card-text class="mt-1 mb-0">
        Selected: <strong>{{ selected }}</strong>
      </b-card-text>
    </div>

    <template #code>
      {{ codeInlineStack }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRadioGroup, BFormGroup, BCardText } from 'bootstrap-vue'
import { codeInlineStack } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormRadioGroup,
    BFormGroup,
  },
  data() {
    return {
      selected: 'first',
      options: [
        { text: 'First radio', value: 'first' },
        { text: 'Second radio', value: 'second' },
        { text: 'Third radio', value: 'third' },
      ],
      codeInlineStack,
    }
  },
}
</script>
