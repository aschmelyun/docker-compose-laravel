<template>
  <b-card-code title="Horizontal Form With Icons">
    <b-form @submit.prevent>
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="First Name"
            label-for="hi-first-name"
            label-cols-md="4"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="UserIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="hi-first-name"
                placeholder="First Name"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Email"
            label-for="hi-email"
            label-cols-md="4"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="MailIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="hi-email"
                type="email"
                placeholder="Email"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Mobile"
            label-for="hi-number"
            label-cols-md="4"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SmartphoneIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="hi-number"
                type="number"
                placeholder="Mobile"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="hi-password"
            label-cols-md="4"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="LockIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="hi-password"
                type="password"
                placeholder="Password"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col
          md="8"
          offset-md="4"
        >
          <b-form-group>
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
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
      {{ codeHorizontalIcon }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BRow, BCol,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeHorizontalIcon } from './code'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BInputGroup,
    BInputGroupPrepend,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeHorizontalIcon,
    }
  },
}
</script>
