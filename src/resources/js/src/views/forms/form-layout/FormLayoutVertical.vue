<template>
  <b-card-code
    title="Vertical Form"
  >
    <b-form @submit.prevent>
      <b-row>

        <!-- first name -->
        <b-col cols="12">
          <b-form-group
            label="First Name"
            label-for="v-first-name"
          >
            <b-form-input
              id="v-first-name"
              placeholder="First Name"
            />
          </b-form-group>
        </b-col>

        <!-- email -->
        <b-col cols="12">
          <b-form-group
            label="Email"
            label-for="v-email"
          >
            <b-form-input
              id="v-email"
              type="email"
              placeholder="Email"
            />
          </b-form-group>
        </b-col>

        <!-- mobile -->
        <b-col cols="12">
          <b-form-group
            label="Mobile"
            label-for="v-mobile"
          >
            <b-form-input
              id="v-mobile"
              type="number"
              placeholder="Mobile"
            />
          </b-form-group>
        </b-col>

        <!-- password -->
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="v-password"
          >
            <b-form-input
              id="v-password"
              type="password"
              placeholder="Password"
            />
          </b-form-group>
        </b-col>

        <!-- checkbox -->
        <b-col cols="12">
          <b-form-group>
            <b-form-checkbox
              id="checkbox-3"
              name="checkbox-3"
              value="Remember_me"
            >
              Remember me
            </b-form-checkbox>
          </b-form-group>
        </b-col>

        <!-- submit and reset -->
        <b-col cols="12">
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
      {{ codeVertical }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeVertical } from './code'

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
      codeVertical,
    }
  },
}
</script>
