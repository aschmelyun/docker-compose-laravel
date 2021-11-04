<template>
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      shape="square"
      finish-button-text="Submit"
      back-button-text="Previous"
      class="mb-3"
      @on-complete="formSubmitted"
    >

      <!-- accoint details tab -->
      <tab-content
        title="Account Details"
        :before-change="validationForm"
      >
        <validation-observer
          ref="accountRules"
          tag="form"
        >
          <b-row>
            <b-col
              cols="12"
              class="mb-2"
            >
              <h5 class="mb-0">
                Account Details
              </h5>
              <small class="text-muted">
                Enter Your Account Details.
              </small>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Username"
                label-for="name"
              >
                <validation-provider
                  #default="{ errors }"
                  name="username"
                  rules="required"
                >
                  <b-form-input
                    id="name"
                    v-model="name"
                    :state="errors.length > 0 ? false:null"
                    placeholder="johndoe"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Email"
                label-for="email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="email"
                    v-model="emailValue"
                    type="email"
                    :state="errors.length > 0 ? false:null"
                    placeholder="john.doe@email.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Password"
                label-for="password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="Password"
                  rules="required|password"
                >
                  <b-form-input
                    id="password"
                    v-model="PasswordValue"
                    type="password"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Password"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Confirm Password"
                label-for="c-password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Password Confirm"
                  rules="required|confirmed:Password"
                >
                  <b-form-input
                    id="c-password"
                    v-model="passwordCon"
                    type="password"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Re-type Password"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
        </validation-observer>
      </tab-content>

      <!-- personal details tab -->
      <tab-content
        title="Personal Info"
        :before-change="validationFormInfo"
      >
        <validation-observer
          ref="infoRules"
          tag="form"
        >
          <b-row>
            <b-col
              cols="12"
              class="mb-2"
            >
              <h5 class="mb-0">
                Personal Info
              </h5>
              <small class="text-muted">Enter Your Personal Info.</small>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="First Name"
                label-for="first-name"
              >
                <validation-provider
                  #default="{ errors }"
                  name="First Name"
                  rules="required"
                >
                  <b-form-input
                    id="first-name"
                    v-model="first_name"
                    placeholder="John"
                    :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Last Name"
                label-for="last-name"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Last Name"
                  rules="required"
                >
                  <b-form-input
                    id="last-name"
                    v-model="last_name"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Doe"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <validation-provider
                #default="{ errors }"
                name="Country"
                rules="required"
              >
                <b-form-group
                  label="Country"
                  label-for="country"
                  :state="errors.length > 0 ? false:null"
                >
                  <v-select
                    id="country"
                    v-model="selectedContry"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="countryName"
                    :selectable="option => ! option.value.includes('select_value')"
                    label="text"
                  />
                  <b-form-invalid-feedback :state="errors.length > 0 ? false:null">
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="6">
              <validation-provider
                #default="{ errors }"
                name="Language"
                rules="required"
              >
                <b-form-group
                  label="Language"
                  label-for="language"
                  :state="errors.length > 0 ? false:null"
                >
                  <v-select
                    id="language"
                    v-model="selectedLanguage"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="languageName"
                    :selectable="option => ! option.value.includes('nothing_selected')"
                    label="text"
                  />
                  <b-form-invalid-feedback :state="errors.length > 0 ? false:null">
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
        </validation-observer>
      </tab-content>

      <!-- address  -->
      <tab-content
        title="Address"
        :before-change="validationFormAddress"
      >
        <validation-observer
          ref="addressRules"
          tag="form"
        >
          <b-row>
            <b-col
              cols="12"
              class="mb-2"
            >
              <h5 class="mb-0">
                Address
              </h5>
              <small class="text-muted">Enter Your Address.</small>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Address"
                label-for="address"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Address"
                  rules="required"
                >
                  <b-form-input
                    id="address"
                    v-model="address"
                    :state="errors.length > 0 ? false:null"
                    placeholder="98 Borough bridge Road, Birmingham"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Landmark"
                label-for="landmark"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Landmark"
                  rules="required"
                >
                  <b-form-input
                    id="landmark"
                    v-model="landMark"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Borough bridge"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Pincode"
                label-for="pincode"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Pincode"
                  rules="required"
                >
                  <b-form-input
                    id="pincode"
                    v-model="pincode"
                    :state="errors.length > 0 ? false:null"
                    type="number"
                    placeholder="658921"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="City"
                label-for="city"
              >
                <validation-provider
                  #default="{ errors }"
                  name="City"
                  rules="required"
                >
                  <b-form-input
                    id="city"
                    v-model="city"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Birmingham"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
        </validation-observer>
      </tab-content>

      <!-- social link -->
      <tab-content
        title="Social Links"
        :before-change="validationFormSocial"
      >
        <validation-observer
          ref="socialRules"
          tag="form"
        >
          <b-row>
            <b-col
              cols="12"
              class="mb-2"
            >
              <h5 class="mb-0">
                Social Links
              </h5>
              <small class="text-muted">Enter Your Social Links</small>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Twitter"
                label-for="twitter"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Twitter"
                  rules="required|url"
                >
                  <b-form-input
                    id="twitter"
                    v-model="twitterUrl"
                    :state="errors.length > 0 ? false:null"
                    placeholder="https://twitter.com/abc"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Facebook"
                label-for="facebook"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Facebook"
                  rules="required|url"
                >
                  <b-form-input
                    id="facebook"
                    v-model="facebookUrl"
                    :state="errors.length > 0 ? false:null"
                    placeholder="https://facebook.com/abc"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Google+"
                label-for="google-plus"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Google+"
                  rules="required|url"
                >
                  <b-form-input
                    id="google-plus"
                    v-model="googleUrl"
                    :state="errors.length > 0 ? false:null"
                    placeholder="https://plus.google.com/abc"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="LinkedIn"
                label-for="linked-in"
              >
                <validation-provider
                  #default="{ errors }"
                  name="LinkedIn"
                  rules="required|url"
                >
                  <b-form-input
                    id="linked-in"
                    v-model="linkedinUrl"
                    :state="errors.length > 0 ? false:null"
                    placeholder="https://linkedin.com/abc"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
        </validation-observer>
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { codeIcon } from './code'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    vSelect,
    BFormInvalidFeedback,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
      selectedContry: '',
      selectedLanguage: '',
      name: '',
      emailValue: '',
      PasswordValue: '',
      passwordCon: '',
      first_name: '',
      last_name: '',
      address: '',
      landMark: '',
      pincode: '',
      twitterUrl: '',
      facebookUrl: '',
      googleUrl: '',
      linkedinUrl: '',
      city: '',
      required,
      email,
      codeIcon,
      countryName: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Russia', text: 'Russia' },
        { value: 'Canada', text: 'Canada' },
        { value: 'China', text: 'China' },
        { value: 'United States', text: 'United States' },
        { value: 'Brazil', text: 'Brazil' },
        { value: 'Australia', text: 'Australia' },
        { value: 'India', text: 'India' },
      ],
      languageName: [
        { value: 'nothing_selected', text: 'Nothing Selected' },
        { value: 'English', text: 'English' },
        { value: 'Chinese', text: 'Mandarin Chinese' },
        { value: 'Hindi', text: 'Hindi' },
        { value: 'Spanish', text: 'Spanish' },
        { value: 'Arabic', text: 'Arabic' },
        { value: 'Malay', text: 'Malay' },
        { value: 'Russian', text: 'Russian' },
      ],
    }
  },
  methods: {
    formSubmitted() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Form Submitted',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
    },
    validationForm() {
      return new Promise((resolve, reject) => {
        this.$refs.accountRules.validate().then(success => {
          if (success) {
            resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    validationFormInfo() {
      return new Promise((resolve, reject) => {
        this.$refs.infoRules.validate().then(success => {
          if (success) {
            resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    validationFormAddress() {
      return new Promise((resolve, reject) => {
        this.$refs.addressRules.validate().then(success => {
          if (success) {
            resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    validationFormSocial() {
      return new Promise((resolve, reject) => {
        this.$refs.socialRules.validate().then(success => {
          if (success) {
            resolve(true)
          } else {
            reject()
          }
        })
      })
    },
  },
}
</script>
