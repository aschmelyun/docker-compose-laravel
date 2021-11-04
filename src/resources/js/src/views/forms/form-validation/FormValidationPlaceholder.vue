<template>
  <b-card-code title="Field Name Placeholder">
    <b-card-text>vee-validate offers simple interpolation mechanism for returned messages, you can use the {_field_} placeholder in your string and it will be replaced with your field name automatically:</b-card-text>

    <!-- form -->
    <validation-observer ref="simpleRules">
      <b-form>
        <b-row>

          <!-- username -->
          <b-col cols="12">
            <b-form-group
              label="Username"
              label-for="username"
            >
              <validation-provider
                #default="{ errors }"
                name="Username"
                rules="required"
              >
                <b-form-input
                  id="username"
                  v-model="username"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Username"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- password -->
          <b-col cols="12">
            <b-form-group
              label="Password"
              label-for="password"
            >
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required"
              >
                <b-form-input
                  id="password"
                  v-model="passValue"
                  type="password"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Password"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- login button -->
          <b-col cols="12">
            <b-button
              variant="primary"
              type="submit"
              @click.prevent="validationForm"
            >
              Login
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>

    <template #code>
      {{ codePlaceholder }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText,
} from 'bootstrap-vue'
import { required } from '@validations'
import { codePlaceholder } from './code'

export default {
  components: {
    BCardCode,
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormGroup,
    BCardText,
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
      codePlaceholder,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('login successfully')
        }
      })
    },
  },
}
</script>
