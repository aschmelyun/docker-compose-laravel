<template>
  <b-card-code title="Basic Inputs">
    <b-row>
      <b-col
        md="6"
        xl="4"
        class="mb-1"
      >

        <!-- basic -->
        <b-form-group
          label="Basic Input"
          label-for="basicInput"
        >
          <b-form-input
            id="basicInput"
            placeholder="Enter Email"
          />
        </b-form-group>
      </b-col>

      <b-col
        md="6"
        xl="4"
        class="mb-1"
      >
        <!-- input text with help -->
        <b-form-group>
          <label for="InputHelp">Input text with help</label>
          <small class="text-muted"> eg. <i>someone@example.com</i></small>
          <b-form-input id="InputHelp" />
        </b-form-group>
      </b-col>

      <b-col
        md="6"
        xl="4"
        class="mb-1"
      >
        <!-- disabled input -->
        <b-form-group
          label="Disabled Input"
          label-for="disabledInput"
        >
          <b-form-input
            id="disabledInput"
            disabled
          />
        </b-form-group>
      </b-col>

      <b-col
        md="6"
        xl="4"
      >
        <!-- with helper text -->
        <b-form-group
          label="With Helper Text"
          label-for="helperInput"
          description="Find helper text here for given textbox."
        >
          <b-form-input
            id="helperInput"
            placeholder="Name"
          />
        </b-form-group>
      </b-col>
      <b-col
        md="6"
        xl="4"
      >
        <!-- readonly input -->
        <b-form-group
          label="Readonly Input"
          label-for="readOnlyInput"
        >
          <b-form-input
            id="readOnlyInput"
            value="You can't update me :P"
            readonly
          />
        </b-form-group>
      </b-col>

      <b-col
        md="6"
        xl="4"
      >
        <!-- static text -->
        <b-form-group
          label="Readonly Static Text"
          label-for="plainTextInput"
        >
          <b-form-input
            id="plainTextInput"
            plaintext
            value="email@pixinvent.com"
          />
        </b-form-group>
      </b-col>
    </b-row>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormInput, BRow, BCol, BFormGroup,
} from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
  },
  data() {
    return {
      codeBasic,
    }
  },
}
</script>
