export const codeIcon = `
<template>
  <form-wizard
    color="#5A8DEE"
    :title="null"
    :subtitle="null"
    finish-button-text="Submit"
    @on-complete="formSubmitted"
  >
    <tab-content icon="bx bx-file-blank">
      <b-row>
        <b-col cols="12">
          <h6 class="py-50">
            Enter Your Personal Details
          </h6>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="firstName">First Name</label>
            <b-form-input
              id="firstName"
              type="text"
              placeholder="Enter Your First Name"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="lastName">Last Name</label>
            <b-form-input
              id="lastName"
              type="text"
              placeholder="Enter Your Last Name"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="email">Email</label>
            <b-form-input
              id="email"
              type="email"
              placeholder="Enter Your Email"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="phone">Phone</label>
            <b-form-input
              id="phone"
              type="number"
              placeholder="Enter Your Phone Number"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="age">Age</label>
            <b-form-input
              id="age"
              type="number"
              placeholder="Enter Your Age"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label>Gender</label>
            <div class="radio">
              <b-form-radio
                v-model="gender"
                class="p-0"
                name="some-radios"
                value="A"
                plain
                inline
              >
                Male
              </b-form-radio>
              <b-form-radio
                v-model="gender"
                name="some-radios"
                value="B"
                plain
                inline
              >
                Female
              </b-form-radio>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
    </tab-content>
    <tab-content icon="bx bxs-truck">
      <b-row>
        <b-col cols="12">
          <h6 class="py-50">
            Enter Your Location
          </h6>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="AddresLine1">Address Line 1</label>
            <b-form-input
              id="AddresLine1"
              type="text"
              placeholder="Enter House no./ Flate no."
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="AddresLine2">Address Line 2</label>
            <b-form-input
              id="AddresLine2"
              type="text"
              placeholder="Enter Society name/ Area name"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="landmark">Landmark</label>
            <b-form-input
              id="landmark"
              type="text"
              placeholder="Enter A Landmark"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="town-city">Town/City</label>
            <b-form-input
              id="town-city"
              type="text"
              placeholder="Enter Town/City"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="pincode">Pincode</label>
            <b-form-input
              id="pincode"
              type="number"
              placeholder="Enter Your Pincode"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="state">State</label>
            <b-form-input
              id="state"
              type="text"
              placeholder="Enter Your State"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label for="country">Country</label>
            <b-form-select
              v-model="selected"
              :options="options"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="6"
          class="d-flex align-items-center"
        >
          <b-form-group>
            <div class="checkbox">
              <b-form-checkbox
                plain
                value="A"
                class="ml-0"
              >
                Permanent Delivery address
              </b-form-checkbox>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
    </tab-content>
    <tab-content icon="bx bx-home">
      <b-row>
        <b-col cols="12">
          <h6 class="py-50">
            Enter Your Payment Methods
          </h6>
        </b-col>
        <b-col cols="12">
          <b-form-group>
            <div class="d-flex justify-content-between flex-wrap align-items-center">
              <div class="vs-radio-con vs-radio-primary">
                <b-img
                  :src="require('@/assets/images/images/pages/bank.png')"
                  height="40"
                  class="d-inline-block"
                />
                <span>Card 12XX XXXX XXXX 0000</span>
              </div>
              <div class="card-holder-name">
                John Doe
              </div>
              <div class="card-expiration-date">
                11/2020
              </div>
              <div>
                <label>Enter CVV</label>
                <b-form-input
                  type="password"
                  placeholder="Enter Your CVV no."
                />
              </div>
            </div>
          </b-form-group>
          <hr>
        </b-col>
        <b-col cols="12 pl-0">
          <b-form-group>
            <div class="radio">
              <b-form-radio-group
                :options="radioOption"
                name="radios-stacked"
                plain
                stacked
              />
            </div>
          </b-form-group>
          <hr class="ml-1">
        </b-col>
        <b-col
          cols="12"
          class="d-flex align-items-center"
        >
          <div class="paypal cursor-pointer d-flex align-items-center">
            <div class="radio">
              <b-form-radio
                class="p-0"
                name="some-radios"
                value="A"
                plain
              >
                <b-img
                  :src="require('@/assets/images/images/pages/PayPal_logo.png')"
                  alt="PayPal Logo"
                />
              </b-form-radio>
            </div>
          </div>
          <div class="googlepay cursor-pointer pl-1 d-flex align-items-center">
            <div class="radio">
              <b-form-radio
                class="p-0"
                name="some-radios"
                value="B"
                plain
              >
                <b-img
                  :src="require('@/assets/images/images/pages/google-pay.png')"
                  height="30"
                  alt="google Logo"
                />
              </b-form-radio>
            </div>
          </div>
        </b-col>
        <b-col md="6">
          <hr>

          <label>Enter Your Promocode</label>
          <b-form-input
            type="text"
            placeholder="Enter Your Promocode"
          />
        </b-col>
      </b-row>
    </tab-content>
  </form-wizard>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormRadio,
  BFormCheckbox,
  BFormSelect,
  BImg,
  BFormRadioGroup,
} from 'bootstrap-vue'

export default {
  components: {
    FormWizard,
    TabContent,
    AppCard,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BFormCheckbox,
    BFormSelect,
    BImg,
    BFormRadioGroup,
  },
  data: () => ({
    selected: null,
    gender: 'A',
    options: [
      { value: null, text: 'Please select an option' },
      { value: 'a', text: 'This is First option' },
      { value: 'b', text: 'Selected Option' },
      { value: { C: '3PO' }, text: 'This is an option with object value' },
      { value: 'd', text: 'This one is disabled', disabled: true },
    ],
    radioOption: [
      { text: 'Credit / Debit / ATM Card', value: 'first' },
      { text: 'Net Banking', value: 'second' },
      { text: 'EMI (Easy Installment)', value: 'third' },
      { text: 'Cash On Delivery', value: 'fourth' },
    ],
    radioOption2: [
      { text: '', value: 'paypal' },
      { text: '', value: 'gpay' },
    ],
  }),
  methods: {
    formSubmitted() {
      // eslint-disable-next-line
      alert('Form submitted!')
    },
  },
}
</script>
`
export const codeIconInfo = `
<template>
  <form-wizard
    color="#5A8DEE"
    :title="null"
    :subtitle="null"
    finish-button-text="Submit"
    @on-complete="formSubmitted"
   >
    <tab-content
      title="BASIC DETAILS"
      icon="bx bx-user"
    >
      <b-row>
        <b-col cols="12">
          <h6 class="py-50">
            Basic Details
          </h6>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label>First Name</label>
            <b-form-input placeholder="Enter Your First Name" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label>Last Name</label>
            <b-form-input placeholder="Enter Your Last Name" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label>Email</label>
            <b-form-input
              type="email"
              placeholder="Enter Your Email"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label>Password</label>
            <b-form-input
              type="password"
              placeholder="Enter Your Password"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col cols="12">
          <h6 class="py-50">
            Contact Details
          </h6>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>Address Line 1</label>
            <b-form-input placeholder="Enter Your House no./ Flate no." />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>Address Line 2</label>
            <b-form-input placeholder="Enter Your Society name / Area name" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>Landmark</label>
            <b-form-input placeholder="Enter a Landmark" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>City</label>
            <b-form-input placeholder="Enter Your City" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>State</label>
            <b-form-input placeholder="Enter Your State" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>Country</label>
            <b-form-input placeholder="Enter Your Country" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>Age</label>
            <b-form-input
              type="number"
              placeholder="Enter Your Current Age"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>Phone</label>
            <b-form-input
              type="number"
              placeholder="+123456789"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>Gender</label>
            <div class="radio">
              <b-form-radio
                v-model="gender"
                class="p-0"
                name="some-radios"
                value="A"
                plain
                inline
              >
                Male
              </b-form-radio>
              <b-form-radio
                v-model="gender"
                name="some-radios"
                value="B"
                plain
                inline
              >
                Female
              </b-form-radio>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col cols="12">
          <h6 class="py-50">
            Id Proof
          </h6>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Passport</label>
            <b-form-file placeholder="Choose File" />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>National ID</label>
            <b-form-file placeholder="Choose File" />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>BIRTH CERTIFICATE </label>
            <b-form-file placeholder="Choose File" />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>DRIVING LICENCE </label>
            <b-form-file placeholder="Choose File" />
          </b-form-group>
        </b-col>
      </b-row>
    </tab-content>
    <tab-content
      title="TERM AND CONDITIONS"
      icon="bx bx-briefcase"
    >
      <b-row>
        <b-col cols="12">
          <h6 class="py-50">
            Terms and conditions
          </h6>
        </b-col>
        <b-col cols="12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum culpa repellendus laborum maxime
            dignissimos dolor excepturi iusto nemo aspernatur? Qui modi inventore reprehenderit, nostrum quaerat
            libero maiores consequuntur illo veritatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, culpa obcaecati. Qui accusantium sit
            error, dolorem alias incidunt est. Laborum, atque ipsum debitis obcaecati dolor illo magni provident harum
            vitae?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit omnis, doloribus autem, non quam
            quibusdam harum accusamus voluptatem in perspiciatis consequuntur sint nam debitis sapiente ex, optio
            totam delectus quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis placeat in quisquam
            dolorum numquam, rerum expedita corporis eveniet quas nostrum, quia veritatis neque quos sint sit
            exercitationem obcaecati perferendis magnam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur laudantium voluptatibus
            impedit unde. Error eius consequuntur tenetur unde molestias esse doloribus animi, temporibus placeat
            eaque laborum, maiores, ex quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            suscipit placeat accusamus voluptas odio est ea accusantium dignissimos et officia, cupiditate aperiam
            atque facilis? Adipisci earum fuga illo odit reiciendis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores nihil necessitatibus sequi placeat tenetur, perspiciatis, excepturi dolor,
            consectetur assumenda amet accusantium velit fuga numquam tempore repellendus voluptatem vitae.
            Voluptatem, hic.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis vero, reprehenderit beatae
            necessitatibus dignissimos animi distinctio illo porro fuga maxime nemo voluptate aspernatur tempore?
            Incidunt consectetur dignissimos blanditiis. Corporis. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. At, dolore omnis! Architecto dolorem non, earum pariatur, molestias voluptatem saepe voluptatibus
            praesentium expedita cum quae et assumenda. Voluptas debitis praesentium quis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cumque veniam ipsa saepe sint necessitatibus incidunt nihil totam delectus,
            dolor omnis itaque libero sed molestiae assumenda non repellat, rerum, eius quia. lorem
          </p>
          <strong>Read all term and conditions carefully.</strong>
        </b-col>
        <b-col cols="12">
          <b-form-group>
            <b-form-radio
              name="terms"
              stacked
            >
              <span class="text-success">I read all term and conditions and i Agree.</span>
            </b-form-radio>
            <b-form-radio
              name="terms"
              stacked
            >
              <span class="text-danger">I am not Agree with it.</span>
            </b-form-radio>
          </b-form-group>
        </b-col>
      </b-row>
    </tab-content>
    <tab-content
      title="NOMINEE"
      icon="bx bx-group"
    >
      <b-row>
        <b-col cols="12">
          <h6 class="py-50">
            Enter Nominate Details
          </h6>
        </b-col>
        <b-col cols="12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad, consectetur animi magni magnam nihil
            error, quaerat pariatur dolores unde quod sequi modi temporibus libero eos consequuntur ab maxime alias!
          </p>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>NOMINATION NAME</label>
            <b-form-input placeholder="Nomination Name" />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>NOMINEE'S RELATION</label>
            <b-form-input placeholder="Relation" />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Nominee Age</label>
            <b-form-input placeholder="Age" />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Nominee Documents</label>
            <b-form-file placeholder="Choose File" />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <h6 class="py-50">
            Terms and conditions for nominee
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit sunt facilis, exercitationem
            placeat in maiores, ullam doloribus aperiam sint culpa, quo ducimus tempore perferendis ipsum laborum
            officia ut dignissimos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae quibusdam enim neque animi fugiat harum
            tempora ipsum excepturi, cupiditate illum hic dignissimos, quaerat dolore! Minus rem sed accusamus
            corrupti?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae quibusdam enim neque animi fugiat harum
            tempora ipsum excepturi, cupiditate illum hic dignissimos, quaerat dolore! Minus rem sed accusamus
            corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit sunt facilis,
            exercitationem placeat in maiores, ullam doloribus aperiam sint culpa, quo ducimus tempore perferendis
            ipsum laborum officia ut dignissimos!
          </p>
        </b-col>
      </b-row>
    </tab-content>
  </form-wizard>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BFormInput, BFormRadio, BFormFile,
} from 'bootstrap-vue'

export default {
  components: {
    FormWizard,
    TabContent,
    AppCard,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BFormFile,
  },
  data: () => ({
    gender: 'A',
  }),
  methods: {
    formSubmitted() {
      // eslint-disable-next-line
      alert('Form submitted!')
    },
  },
}
</script>
`

export const codeValidation = `
<template>
  <form-wizard
    color="#5A8DEE"
    :title="null"
    :subtitle="null"
    finish-button-text="Submit"
    @on-complete="formSubmitted"
    >
    <tab-content
      title="Baisc Information"
      icon="bx bx-user"
      :before-change="validateStep1"
    >
      <ValidationObserver ref="ruleStep1">
        <b-form>
          <b-row>
            <b-col md="6">
              <b-form-group>
                <label>First Name</label>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="First Name"
                  rules="required"
                >
                  <b-form-input
                    v-model="firstName"
                    placeholder="Enter Your First Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </ValidationProvider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label>Last Name</label>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Last Name"
                  rules="required"
                >
                  <b-form-input
                    v-model="lastName"
                    placeholder="Enter Your Last Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </ValidationProvider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label>Email</label>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Email"
                  rules="required"
                >
                  <b-form-input
                    v-model="email"
                    placeholder="Enter Your Email"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </ValidationProvider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label>City</label>
                <b-form-select
                  v-model="selected"
                  :options="options"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </ValidationObserver>
    </tab-content>
    <tab-content
      title="Job Details"
      icon="bx bx-briefcase"
      :before-change="validateStep2"
    >
      <ValidationObserver ref="ruleStep2">
        <b-form>
          <b-row>
            <b-col md="6">
              <b-form-group>
                <label>PROPOSAL TITLE</label>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Proposal"
                  rules="required"
                >
                  <b-form-input
                    v-model="proposal"
                    placeholder="Enter Your Proposel Title"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </ValidationProvider>
              </b-form-group>
              <b-form-group>
                <label>JOB TITLE</label>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Job"
                  rules="required"
                >
                  <b-form-input
                    v-model="job"
                    placeholder="Enter Your Job Title"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </ValidationProvider>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label>
                  SHORT DESCRIPTION
                </label>
                <b-form-textarea
                  rows="5"
                  placeholder="Please Enter Short Description"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </ValidationObserver>
    </tab-content>
    <tab-content
      title="Event Details"
      icon="bx bx-group"
      :before-change="validateStep3"
    >
      <ValidationObserver ref="ruleStep3">
        <b-form>
          <b-row>
            <b-col md="6">
              <label>Event Name</label>
              <ValidationProvider
                v-slot="{ errors }"
                name="Event"
                rules="required"
              >
                <b-form-input
                  v-model="event"
                  placeholder="Enter Event Name"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </ValidationProvider>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label>EVENT LOCATION </label>
                <b-form-select
                  v-model="selected"
                  :options="options"
                />
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <label>EVENT STATUS</label>
                <b-form-select
                  v-model="selected2"
                  :options="eventStatus"
                />
              </b-form-group>
            </b-col>
            <b-col md="6">
              <label>REQUIREMENTS </label>
              <b-form-group>
                <div class="checkbox">
                  <b-form-checkbox
                    plain
                    value="Staffing"
                    class="ml-0"
                    inline
                  >
                    Staffing
                  </b-form-checkbox>
                  <b-form-checkbox
                    plain
                    value="Catering"
                    class="ml-0"
                    inline
                  >
                    Catering
                  </b-form-checkbox>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </ValidationObserver>
    </tab-content>
  </form-wizard>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BRow, BCol, BFormGroup, BFormInput, BFormSelect, BForm, BFormTextarea, BFormCheckbox,
} from 'bootstrap-vue'
import { required } from '@validations'

export default {
  components: {
    FormWizard,
    TabContent,
    AppCard,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BForm,
    BFormTextarea,
    BFormCheckbox,

    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    selected: 'new york',
    selected2: 'planning',
    firstName: '',
    lastName: '',
    emailValue: '',
    proposal: '',
    job: '',
    email: '',
    event: '',
    required,
    options: [
      { value: 'new york', text: 'New York' },
      { value: 'chicago', text: 'Chicago' },
      { value: 'san francisco', text: 'San Francisco' },
      { value: 'Boston', text: 'Boston' },
    ],
    eventStatus: [
      { value: 'planning', text: 'Planning' },
      { value: 'inprogress', text: 'In Progress' },
      { value: 'Finished', text: 'Finished' },
    ],
  }),
  methods: {
    formSubmitted() {
      // eslint-disable-next-line
      alert('Form submitted!')
    },
    validateStep1() {
      return new Promise((resolve, reject) => {
        this.$refs.ruleStep1.validate().then((success) => {
          if (success) {
            resolve(true)
          } else {
            reject(new Error('Currect all value'))
          }
        })
      })
    },
    validateStep2() {
      return new Promise((resolve, reject) => {
        this.$refs.ruleStep2.validate().then((success) => {
          if (success) {
            resolve(true)
          } else {
            reject(new Error('Currect all value'))
          }
        })
      })
    },
    validateStep3() {
      return new Promise((resolve, reject) => {
        this.$refs.ruleStep3.validate().then((success) => {
          if (success) {
            resolve(true)
          } else {
            reject(new Error('Currect all value'))
          }
        })
      })
    },
  },
}
</script>
`
