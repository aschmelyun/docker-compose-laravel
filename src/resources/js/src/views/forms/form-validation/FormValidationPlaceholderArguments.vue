<template>
  <b-card-code title="Arguments Placeholders">
    <b-card-text>vee-validate interpolation can parse placeholders that match the rule parameters, so to define such a message for the min rule you can use a {length} placeholder in the error message like this:</b-card-text>

    <!-- form -->
    <validation-observer ref="simpleRules">
      <b-form>
        <b-row>

          <!-- password -->
          <b-col cols="12">
            <b-form-group
              label="Password"
              label-for="a-password"
            >
              <validation-provider
                #default="{ errors }"
                name="Password"
                vid="Password"
                rules="required|min:8|password"
              >
                <b-form-input
                  id="a-password"
                  v-model="username"
                  :state="errors.length > 0 ? false:null"
                  type="password"
                  placeholder="Password"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- confirm password -->
          <b-col cols="12">
            <b-form-group
              label="Confirm Password"
              label-for="ac-password"
            >
              <validation-provider
                #default="{ errors }"
                name="Confirm Password"
                rules="required|confirmed:Password"
              >

                <b-form-input
                  id="ac-password"
                  v-model="passValue"
                  :state="errors.length > 0 ? false:null"
                  type="password"
                  placeholder="Confirm Password"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- reset button -->
          <b-col cols="12">
            <b-button
              variant="primary"
              type="submit"
              @click.prevent="validationForm"
            >
              Reset
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>

    <template #code>
      {{ codePlaceholderArgument }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText,
} from 'bootstrap-vue'
import {
  required, min, confirmed,
} from '@validations'
import { codePlaceholderArgument } from './code'

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
      passValue: '',
      username: '',
      required,
      min,
      confirmed,
      codePlaceholderArgument,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('password reset!')
        }
      })
    },
  },
}
</script>
