<template>
  <b-card-code
    title="Inline and stacked checkboxes"
  >
    <b-card-text>
      <span>Set the prop </span>
      <code>stacked</code>
      <span> on </span>
      <code>&lt;b-form-checkbox-group&gt;</code>
      <span> to place each form control one over the other, or if using individual checkboxes not inside a </span>
      <code>&lt;b-form-checkbox-group&gt;</code>
      <span>, set the </span>
      <code>inline</code>
      <span> prop on </span>
      <code>&lt;b-form-checkbox&gt;</code>
      <span>.</span>
    </b-card-text>

    <div>
      <b-form-group label="Form-checkbox-group inline checkboxes (default)">
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          name="flavour-1a"
          class="demo-inline-spacing"
        />
      </b-form-group>

      <b-form-group label="Form-checkbox-group stacked checkboxes">
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          name="flavour-2a"
          class="demo-inline-spacing"
          stacked
        />
      </b-form-group>

      <b-form-group label="Individual stacked checkboxes (default)">
        <b-form-checkbox
          v-for="option in options"
          :key="option.value"
          v-model="selected"
          :value="option.value"
          name="flavour-3a"
        >
          {{ option.text }}
        </b-form-checkbox>
      </b-form-group>

      <b-form-group label="Individual inline checkboxes">
        <b-form-checkbox
          v-for="option in options"
          :key="option.value"
          v-model="selected"
          :value="option.value"
          name="flavour-4a"
          inline
        >
          {{ option.text }}
        </b-form-checkbox>
      </b-form-group>
    </div>

    <template #code>
      {{ codeInlineStacked }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormCheckboxGroup, BFormCheckbox, BFormGroup, BCardText,
} from 'bootstrap-vue'
import { codeInlineStacked } from './code'

export default {
  components: {
    BFormCheckboxGroup,
    BFormCheckbox,
    BFormGroup,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      codeInlineStacked,
      selected: [],
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' },
      ],
    }
  },
}
</script>
