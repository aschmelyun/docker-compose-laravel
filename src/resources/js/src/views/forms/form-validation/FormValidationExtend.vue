<template>
  <b-card-code title="Extended">
    <b-card-text>You can extend your custom rule.</b-card-text>

    <b-row>

      <!-- code -->
      <b-col md="6">
        <prism
          language="javascript"
          class="rounded "
        >
          {{ codeCredit }}
        </prism>
      </b-col>

      <!-- ciode -->
      <b-col md="6">
        <prism
          language="javascript"
          class="rounded mb-2"
        >
          {{ codePositive }}
        </prism>
      </b-col>
    </b-row>

    <!-- form -->
    <validation-observer ref="simpleRules">
      <b-form>
        <b-row>
          <b-col md="6">
            <b-form-group label="Credit Card">
              <validation-provider
                #default="{ errors }"
                name="Credit Card"
                rules="required|credit-card"
              >
                <b-form-input
                  v-model="cardNUm"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Credit Card Number"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Enter Only Positive Number">
              <validation-provider
                #default="{ errors }"
                name="Number"
                rules="required|positive"
              >
                <b-form-input
                  v-model="posNum"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Positive Number"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- submit button -->
        <b-form-group>
          <b-button
            type="submit"
            variant="primary"
            @click.prevent="validationForm"
          >
            Submit
          </b-button>
        </b-form-group>
      </b-form>
    </validation-observer>

    <template #code>
      {{ codeExtended }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BButton, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'
import { codeExtended } from './code'

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
    Prism,
  },
  data() {
    return {
      cardNUm: '',
      posNum: '',
      codeExtended,
      codeCredit: `export const credit = extend('credit', {
    validate: validatorCreditCard,
    message: 'Please enter positive number!',
  })

  export const validatorCreditCard = creditnum => {
  /* eslint-disable no-useless-escape */
  const cRegExp = /^(?:3[47][0-9]{13})$/
  /* eslint-enable no-useless-escape */
  const validCreditCard = cRegExp.test(creditnum)
  return validCreditCard
  }`,
      codePositive: `export const positive = extend('positive', {
  validate: validatorPositive,
  message: 'Please enter positive number!',
  })

  export const validatorPositive = value => {
  if (value >= 0) {
    return true
  }
  return false
  }
  `,
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
