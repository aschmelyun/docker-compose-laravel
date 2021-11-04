<template>
  <b-card-code title="Sizing Options">
    <b-card-text>
      <span>Set heights using the </span>
      <code>size</code>
      <span> prop to </span>
      <code>sm</code>
      <span> or </span>
      <code>lg</code>
      <span> for small or large respectively.</span>
    </b-card-text>

    <div>
      <b-row>

        <!-- large -->
        <b-col cols="12">
          <b-form-group
            label="Large"
            label-for="largeInput"
          >
            <b-form-input
              id="largeInput"
              size="lg"
              placeholder="Large Input"
            />
          </b-form-group>
        </b-col>

        <!-- default -->
        <b-col cols="12">
          <b-form-group
            label="Default"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Normal Input"
            />
          </b-form-group>
        </b-col>

        <!-- small -->
        <b-col cols="12">
          <b-form-group
            label="Small"
            label-for="smallInput"
          >
            <b-form-input
              id="smallInput"
              size="sm"
              placeholder="Small Input"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormInput, BRow, BCol, BCardText, BFormGroup,
} from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BFormGroup,
    BCardText,
    BRow,
    BCol,
  },
  data() {
    return {
      codeSize,
    }
  },
}
</script>
