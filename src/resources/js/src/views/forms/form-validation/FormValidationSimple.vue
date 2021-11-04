<template>
  <b-card-code
    title="Simple Form Validation"
  >
    <b-card-text>
      <span>To add validation to any input filed just wrap that field in </span>
      <code>ValidationProvider</code>
      <span> component. Next, add your validation using </span>
      <code>rules</code>
      <span> prop.</span>
    </b-card-text>

    <b-card-text>
      <span>You can get errors of this field using </span>
      <code>slot.</code>
    </b-card-text>

    <!-- form -->
    <validation-observer ref="simpleRules">
      <b-form>
        <b-row>
          <b-col md="6">
            <b-form-group>
              <validation-provider
                #default="{ errors }"
                name="First Name"
                rules="required"
              >
                <b-form-input
                  v-model="name"
                  :state="errors.length > 0 ? false:null"
                  placeholder="First Name"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group>
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  v-model="emailValue"
                  :state="errors.length > 0 ? false:null"
                  type="email"
                  placeholder="Email"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-button
              variant="primary"
              type="submit"
              @click.prevent="validationForm"
            >
              Submit
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>

    <template #code>
      {{ codeSimple }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { codeSimple } from './code'

export default {
  components: {
    BCardCode,
    ValidationProvider,
    ValidationObserver,
    BCardText,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      emailValue: '',
      name: '',
      codeSimple,
      required,
      email,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
}
</script>
