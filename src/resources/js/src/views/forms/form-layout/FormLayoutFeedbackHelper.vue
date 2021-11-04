<template>
  <b-card-code title="Form Feedback helpers">
    <b-form @submit.prevent>
      <b-row>
        <!-- username -->
        <b-col cols="12">
          <b-form-group
            label="Username"
            label-for="fh-usename"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="UserIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="fh-usename"
                placeholder="Username"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <!-- email -->
        <b-col cols="12">
          <b-form-group
            label="Email"
            label-for="fh-email"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="MailIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="fh-email"
                type="email"
                placeholder="Email"
              />
            </b-input-group>
            <b-form-text class="text-danger">
              Enter a Valid Email
            </b-form-text>
          </b-form-group>
        </b-col>

        <!-- password -->
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="fh-password"
          >
            <b-input-group
              class="input-group-merge"
              :class="validation ? 'is-valid' : 'is-invalid'"
            >
              <b-input-group-prepend is-text>
                <feather-icon icon="LockIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="fh-password"
                v-model="userId"
                type="password"
                :state="validation"
                placeholder="Password"
              />
            </b-input-group>
            <b-form-invalid-feedback :state="validation">
              Your password must be 8-20 characters long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validation">
              Looks Good.
            </b-form-valid-feedback>
          </b-form-group>
        </b-col>

        <!-- occupation -->
        <b-col cols="12">
          <b-form-group label="Occupation">
            <b-input-group
              class="input-group-merge"
              :class="validationOccupation ? 'is-valid' : 'is-invalid'"
            >
              <b-input-group-prepend is-text>
                <feather-icon icon="LockIcon" />
              </b-input-group-prepend>
              <b-form-input
                v-model="occupationID"
                list="input-list"
                placeholder="Occupation"
                :state="validationOccupation"
              />
            </b-input-group>
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
              id="checkbox-8"
              name="checkbox-8"
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
            @click="reset"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>

    <template #code>
      {{ codeFeedbackHelper }}
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
  BFormInvalidFeedback,
  BInputGroup,
  BInputGroupPrepend,
  BFormValidFeedback,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeFeedbackHelper } from './code'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
    BFormCheckbox,
    BForm,
    BFormText,
    BButton,
    BFormDatalist,
    BFormInvalidFeedback,
    BFormValidFeedback,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],
      userId: '',
      occupationID: '',
      codeFeedbackHelper,
    }
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13
    },
    validationOccupation() {
      return this.occupationID.length > 1
    },
  },
  methods: {
    reset() {
      this.userId = ''
      this.occupationID = ''
    },
  },
}
</script>
