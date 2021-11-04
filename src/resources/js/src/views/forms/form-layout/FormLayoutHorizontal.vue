<template>
  <b-card-code
    title="Horizontal Form"
  >
    <b-form @submit.prevent>
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="First Name"
            label-for="h-first-name"
            label-cols-md="4"
          >
            <b-form-input
              id="h-first-name"
              placeholder="First Name"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Email"
            label-for="h-email"
            label-cols-md="4"
          >
            <b-form-input
              id="h-email"
              type="email"
              placeholder="Email"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Mobile"
            label-for="h-number"
            label-cols-md="4"
          >
            <b-form-input
              id="h-number"
              type="number"
              placeholder="Mobile"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="h-password"
            label-cols-md="4"
          >
            <b-form-input
              id="h-password"
              type="password"
              placeholder="Password"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="8"
          offset-md="4"
        >
          <b-form-group>
            <b-form-checkbox
              id="checkbox-2"
              name="checkbox-2"
              value="Remember_me"
            >
              Remember me
            </b-form-checkbox>
          </b-form-group>
        </b-col>

        <!-- submit and reset -->
        <b-col offset-md="4">
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
      {{ codeHorizontal }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeHorizontal } from './code'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeHorizontal,
    }
  },
}
</script>
