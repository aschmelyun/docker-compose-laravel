<template>
  <b-card-code title="Multiple choice checkboxes">

    <!-- custom checkbox -->
    <b-form-group label="Using options array:">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="flavour-1"
        class="demo-inline-spacing"
      />
    </b-form-group>

    <!-- using sub-components -->
    <b-form-group label="Using sub-components:">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        name="flavour-2"
        class="demo-inline-spacing"
      >
        <b-form-checkbox value="orange">
          Orange
        </b-form-checkbox>
        <b-form-checkbox value="apple">
          Apple
        </b-form-checkbox>
        <b-form-checkbox value="pineapple">
          Pineapple
        </b-form-checkbox>
        <b-form-checkbox value="grape">
          Grape
        </b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <b-card-text class="mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>

    <template #code>
      {{ codemultipleChoice }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormGroup, BFormCheckboxGroup, BCardText, BFormCheckbox,
} from 'bootstrap-vue'
import { codemultipleChoice } from './code'

export default {
  components: {
    BFormCheckboxGroup,
    BCardCode,
    BFormCheckbox,
    BFormGroup,
    BCardText,
  },
  data() {
    return {
      selected: [],
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' },
      ],
      codemultipleChoice,
    }
  },
}
</script>
