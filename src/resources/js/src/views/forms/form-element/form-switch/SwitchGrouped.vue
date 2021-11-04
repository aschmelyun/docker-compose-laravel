<template>
  <b-card-code title="Grouped switch ">
    <b-card-text>
      <span>Render groups of checkboxes with the look of a switches by setting the prop switches on </span>
      <code>&lt;b-form-checkbox-group&gt;</code>.
    </b-card-text>

    <div>
      <b-form-group label="Inline switch style checkboxes">
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          switches
          class="demo-inline-spacing"
        />
      </b-form-group>
      <b-form-group label="Stacked (vertical) switch style checkboxes">
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          switches
          stacked
        />
      </b-form-group>
    </div>

    <b-card-text class="mb-0">
      {{ selected }}
    </b-card-text>

    <template #code>
      {{ codeGroupArray }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormCheckboxGroup, BCardText, BFormGroup } from 'bootstrap-vue'
import { codeGroupArray } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormGroup,
    BFormCheckboxGroup,
  },
  data() {
    return {
      options: [
        { text: 'Red', value: 'red' },
        { text: 'Green', value: 'green' },
        { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
        { text: 'Blue', value: 'blue' },
      ],
      selected: [],
      codeGroupArray,
    }
  },
}
</script>
