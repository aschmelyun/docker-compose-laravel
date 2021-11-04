<template>
  <div>

    <!-- Header: Personal Info -->
    <div class="d-flex">
      <feather-icon
        icon="UserIcon"
        size="19"
      />
      <h4 class="mb-0 ml-50">
        Personal Information
      </h4>
    </div>

    <!-- Form: Personal Info Form -->
    <b-form class="mt-1">
      <b-row>

        <!-- Field: Birth Date -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Birth Date"
            label-for="birth-date"
          >
            <flat-pickr
              v-model="userDataInfo.dob"
              class="form-control"
              :config="{ dateFormat: 'Y-m-d'}"
              placeholder="YYYY-MM-DD"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Mobile -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Mobile"
            label-for="mobile"
          >
            <b-form-input
              id="mobile"
              v-model="userDataInfo.mobile"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Website -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Website"
            label-for="website"
          >
            <b-form-input
              id="website"
              v-model="userDataInfo.website"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Language -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Language"
            label-for="language"
          >
            <v-select
              v-model="userDataInfo.language"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="languageOptions"
              :clearable="false"
              input-id="language"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Gender -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Gender"
            label-for="gender"
            label-class="mb-1"
          >
            <b-form-radio-group
              id="gender"
              v-model="userDataInfo.gender"
              :options="genderOptions"
              value="male"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Contact Options -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Contact Options"
            label-for="contact-options"
            label-class="mb-1"
          >
            <b-form-checkbox-group
              id="contact-options"
              v-model="userDataInfo.contactOptions"
              :options="contactOptionsOptions"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Header: Personal Info -->
      <div class="d-flex mt-2">
        <feather-icon
          icon="MapPinIcon"
          size="19"
        />
        <h4 class="mb-0 ml-50">
          Address
        </h4>
      </div>

      <!-- Form: Personal Info Form -->
      <b-row class="mt-1">

        <!-- Field: Address Line 1 -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Address Line 1"
            label-for="address-line-1"
          >
            <b-form-input
              id="address-line-1"
              v-model="userDataInfo.addressLine1"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Address Line 2 -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Address Line 2"
            label-for="address-line-2"
          >
            <b-form-input
              id="address-line-2"
              v-model="userDataInfo.addressLine2"
              placeholder="Los Santos"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Postcode -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Postcode"
            label-for="postcode"
          >
            <b-form-input
              id="postcode"
              v-model="userDataInfo.postcode"
              type="number"
              placeholder="597626"
            />
          </b-form-group>
        </b-col>

        <!-- Field: City -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="City"
            label-for="city"
          >
            <b-form-input
              id="city"
              v-model="userDataInfo.city"
            />
          </b-form-group>
        </b-col>

        <!-- Field: State -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="State"
            label-for="state"
          >
            <b-form-input
              id="state"
              v-model="userDataInfo.state"
              placeholder="Manhattan"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Country -->
        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Country"
            label-for="country"
          >
            <b-form-input
              id="country"
              v-model="userDataInfo.country"
              placeholder="United States"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col>
          <b-button
            variant="primary"
            class="mb-1 mb-sm-0 mr-0 mr-sm-1"
            :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          >
            Save Changes
          </b-button>
          <b-button
            variant="outline-secondary"
            :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { BRow, BCol, BForm, BFormGroup, BFormInput, BFormRadioGroup, BFormCheckboxGroup, BButton } from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'

export default {
  components: {
    BRow,
    BCol,
    BForm,
    BFormGroup,
    flatPickr,
    BFormInput,
    vSelect,
    BFormRadioGroup,
    BFormCheckboxGroup,
    BButton,
  },
  setup() {
    const userDataInfo = ref({
      dob: null,
      mobile: '+6595895857',
      website: 'https://rowboat.com/insititious/Angelo',
      language: 'French',
      gender: 'female',
      contactOptions: ['Email', 'Message'],
      addressLine1: 'A-65, Belvedere Streets',
      addressLine2: '',
      postcode: '',
      city: 'New York',
      state: '',
      country: '',
    })

    const languageOptions = ['English', 'Spanish', 'French', 'Russian', 'German', 'Arabic', 'Sanskrit']

    const genderOptions = [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ]

    const contactOptionsOptions = ['Email', 'Message', 'Phone']

    return {
      userDataInfo,
      languageOptions,
      genderOptions,
      contactOptionsOptions,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
