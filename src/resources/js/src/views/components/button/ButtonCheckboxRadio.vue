<template>
  <b-card-code title="Checkbox & radio group">
    <b-row>
      <b-col md="6">

        <!-- checkbox button  -->
        <b-form-group>
          <b-form-checkbox-group
            v-model="selectedCheckbox"
            :options="optionsChekcbox"
            name="buttons-1"
            buttons
            button-variant="primary"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">

        <!-- radio button -->
        <b-form-group>
          <b-form-radio-group
            id="btn-radios-1"
            v-model="selectedRadio"
            button-variant="outline-primary"
            :options="optionsRadio"
            buttons
            name="radios-btn-default"
          />
        </b-form-group>
      </b-col>
    </b-row>

    <template #code>
      {{ codeCheckboxRadio }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormRadioGroup, BFormCheckboxGroup, BFormGroup, BRow, BCol,
} from 'bootstrap-vue'
import { codeCheckboxRadio } from './code'

export default {
  components: {
    BCardCode,
    BFormRadioGroup,
    BFormCheckboxGroup,
    BFormGroup,
    BRow,
    BCol,
  },
  data() {
    return {
      codeCheckboxRadio,
      selectedCheckbox: ['active'],
      optionsChekcbox: [
        { text: 'Active', value: 'active' },
        { text: 'Checkbox', value: 'checkbox' },
        { text: 'Checkbox', value: 'checkbox2' },
      ],
      selectedRadio: 'active',
      optionsRadio: [
        { text: 'Active', value: 'active' },
        { text: 'Radio', value: 'radio' },
        { text: 'Radio', value: 'radio2' },
      ],
    }
  },
}
</script>
