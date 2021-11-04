<template>
  <b-card-code title="Validation types">
    <validation-observer ref="simpleRules">
      <b-form>
        <b-row>

          <!--  This field is required-->
          <b-col md="6">
            <b-form-group>
              <label>This field is required</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="First Name"
              >
                <b-form-input
                  v-model="name"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Fist Name"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!--Enter Number between 10 & 20 -->
          <b-col md="6">
            <b-form-group>
              <label>Enter Number between 10 & 20</label>
              <validation-provider
                #default="{ errors }"
                rules="required|between:10,20"
                name="Number between"
              >
                <b-form-input
                  v-model="numberRange"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Enter Number between 10 & 20"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- Must only consist of numbers-->
          <b-col md="6">
            <b-form-group>
              <label>Must only consist of numbers</label>
              <validation-provider
                #default="{ errors }"
                rules="required|integer"
                name="Number"
              >
                <b-form-input
                  v-model="number"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Enter Number Only"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- Must match the specified regular expression : ^([0-9]+)$ - numbers only -->
          <b-col md="6">
            <b-form-group>
              <label>Must match the specified regular expression : ^([0-9]+)$ - numbers only</label>
              <validation-provider
                #default="{ errors }"
                rules="required|regex:^([0-9]+)$"
                name="Regex"
              >
                <b-form-input
                  v-model="numberRegx"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Enter Specified regular expression"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!--  Only alphabetic characters-->
          <b-col md="6">
            <b-form-group>
              <label>Only alphabetic characters</label>
              <validation-provider
                #default="{ errors }"
                rules="required|alpha"
                name="Alpha"
              >
                <b-form-input
                  v-model="Alphabetic"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Enter Character Only"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- Length should not be less than the specified length : 3 -->
          <b-col md="6">
            <b-form-group>
              <label>Length should not be less than the specified length : 3</label>
              <validation-provider
                #default="{ errors }"
                rules="required|min:3"
                name="Min Character"
              >
                <b-form-input
                  v-model="digitValue"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Enter minimum 3 Characters"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!--Password Input Field -->
          <b-col md="6">
            <b-form-group>
              <label>Password Input Field</label>
              <validation-provider
                #default="{ errors }"
                rules="required|password"
                name="password"
                vid="password"
              >
                <b-form-input
                  v-model="passwordValue"
                  type="password"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Password"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- The digits field must be numeric and exactly contain 3 digits -->
          <b-col md="6">
            <b-form-group>
              <label>The digits field must be numeric and exactly contain 3 digits</label>
              <validation-provider
                #default="{ errors }"
                rules="required|digits:3"
                name="Numeric"
              >
                <b-form-input
                  v-model="digitValue2"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Enter Exactyly 3 digit"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!--Repeat password must match  -->
          <b-col md="6">
            <b-form-group>
              <label>Repeat password must match</label>
              <validation-provider
                #default="{ errors }"
                rules="required|confirmed:password"
                name="Confirm Password"
              >
                <b-form-input
                  v-model="passwordCon"
                  type="password"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Repeat Password"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!--Only alphabetic characters, numbers, dashes or underscores -->
          <b-col md="6">
            <b-form-group>
              <label>Only alphabetic characters, numbers, dashes or underscores</label>
              <validation-provider
                #default="{ errors }"
                rules="required|alpha-dash"
                name="All Character"
              >
                <b-form-input
                  v-model="character"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Enter Character, Numbers, Dash, Underscores"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- Must be a valid email -->
          <b-col md="6">
            <b-form-group>
              <label>Must be a valid email</label>
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  v-model="emailValue"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Email"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!--Must be a valid url  -->
          <b-col md="6">
            <b-form-group>
              <label>Must be a valid url</label>
              <validation-provider
                #default="{ errors }"
                name="URL"
                rules="required|url"
              >
                <b-form-input
                  v-model="URL"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Enter Valid URL"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- submit button -->
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
      {{ codeType }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton,
} from 'bootstrap-vue'
import {
  required, email, confirmed, url, between, alpha, integer, password, min, digits, alphaDash, length,
} from '@validations'
import { codeType } from './code'

export default {
  components: {
    BCardCode,
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      name: '',
      passwordValue: '',
      passwordCon: '',
      emailValue: '',
      number: '',
      numberRange: '',
      numberRegx: '',
      URL: '',
      Alphabetic: '',
      digitValue: '',
      digitValue2: '',
      character: '',
      required,
      confirmed,
      password,
      email,
      min,
      integer,
      url,
      alpha,
      between,
      digits,
      length,
      alphaDash,
      codeType,
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
