<template>
  <b-card-code title="Form text & Datalist helper">
    <b-form @submit.prevent>
      <b-row>

        <!-- username -->
        <b-col cols="12">
          <b-form-group
            label="Username"
            label-for="h-username"
          >
            <b-form-input
              id="h-username"
              placeholder="Username"
            />
          </b-form-group>
        </b-col>

        <!-- email -->
        <b-col cols="12">
          <b-form-group
            label="Email"
            label-for="d-email"
          >
            <b-form-input
              id="d-email"
              type="email"
              placeholder="Email"
            />
            <b-form-text>Enter a Valid Email</b-form-text>
          </b-form-group>
        </b-col>

        <!-- password -->
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="d-password"
          >
            <b-form-input
              id="d-password"
              type="password"
              placeholder="Password"
            />
            <b-form-text>Your password must be 8-20 characters long.</b-form-text>
          </b-form-group>
        </b-col>

        <!-- occupation -->
        <b-col cols="12">
          <b-form-group
            label="Occupation"
            label-for="h-occupation"
          >
            <b-form-input
              id="h-occupation"
              list="input-list"
              placeholder="Occupation"
            />
            <b-form-datalist
              id="input-list"
              :options="options"
            />
          </b-form-group>
        </b-col>

        <!-- checkbox -->
        <b-col cols="12">
          <b-form-group>
            <b-form-checkbox
              id="checkbox-9"
              name="checkbox-9"
              value="Remember_me"
            >
              Remember me
            </b-form-checkbox>
          </b-form-group>
        </b-col>

        <!-- submit and reset -->
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Submit
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-secondary"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>

    <template #code>
      {{ codeHelper }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
  BFormText,
  BFormDatalist,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeHelper } from './code'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BFormText,
    BButton,
    BFormDatalist,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],
      codeHelper,
    }
  },
}
</script>
