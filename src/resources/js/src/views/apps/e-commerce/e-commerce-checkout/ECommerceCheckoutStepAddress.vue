<template>
  <validation-observer
    #default="{ handleSubmit }"
    ref="refFormObserver"
  >
    <b-form
      class="list-view product-checkout"
      @submit.prevent="handleSubmit(onSubmit)"
    >

      <!-- Left Form -->
      <b-card no-body>
        <b-card-header class="flex-column align-items-start">
          <b-card-title>Add New Address</b-card-title>
          <b-card-text class="text-muted mt-25">
            Be sure to check "Deliver to this address" when you have finished
          </b-card-text>
        </b-card-header>
        <b-card-body>
          <b-row>

            <!-- Full Name -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Full Name"
                rules="required"
              >
                <b-form-group
                  label="Full Name"
                  label-for="full-name"
                  class="mb-2"
                >
                  <b-form-input
                    id="full-name"
                    v-model="addressDetails.fullName"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Mobile Number -->
            <b-col
              cols="12"
              md="6"
              class="mb-2"
            >
              <validation-provider
                #default="validationContext"
                name="Mobile Number"
                rules="required|integer"
              >
                <b-form-group
                  label="Mobile Number"
                  label-for="mobile-number"
                >
                  <b-form-input
                    id="mobile-number"
                    v-model="addressDetails.mobile"
                    type="number"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Flat House No -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Flat, House No"
                rules="required"
              >
                <b-form-group
                  label="Flat, House No"
                  label-for="flat-house-no"
                  class="mb-2"
                >
                  <b-form-input
                    id="flat-house-no"
                    v-model="addressDetails.houseNo"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Landmark -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Landmark"
                rules="required"
              >
                <b-form-group
                  label="Landmark"
                  label-for="landmark"
                  class="mb-2"
                >
                  <b-form-input
                    id="landmark"
                    v-model="addressDetails.landmark"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- City -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Town/city"
                rules="required"
              >
                <b-form-group
                  label="Town/City"
                  label-for="city"
                  class="mb-2"
                >
                  <b-form-input
                    id="city"
                    v-model="addressDetails.city"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- pincode -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Pincode"
                rules="required|integer"
              >
                <b-form-group
                  label="Pincode"
                  label-for="pincode"
                  class="mb-2"
                >
                  <b-form-input
                    id="pincode"
                    v-model="addressDetails.pincode"
                    type="number"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- state -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="State"
                rules="required"
              >
                <b-form-group
                  label="State"
                  label-for="state"
                  class="mb-2"
                >
                  <b-form-input
                    id="state"
                    v-model="addressDetails.state"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Address Type -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Address Type"
                rules="required"
              >

                <b-form-group
                  label="Address Type"
                  label-for="address-type"
                  :state="getValidationState(validationContext)"
                >
                  <v-select
                    v-model="addressDetails.addressType"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="['Home', 'Work']"
                    input-id="address-type"
                    :clearable="false"
                  />

                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Submit Button -->
            <b-col cols="12">
              <b-button
                variant="primary"
                type="submit"
              >
                Save and Deliver Here
              </b-button>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <!-- Right Col -->
      <div class="customer-card">
        <b-card title="John Doe">
          <b-card-text class="mb-0">
            9447 Glen Eagles Drive
          </b-card-text>
          <b-card-text>Lewis Center, OH 43035</b-card-text>
          <b-card-text>UTC-5: Eastern Standard Time (EST)</b-card-text>
          <b-card-text>202-555-0140</b-card-text>
          <b-button
            variant="primary"
            block
            @click="$emit('next-step')"
          >
            Deliver To This Address
          </b-button>
        </b-card>
      </div>
    </b-form>
  </validation-observer>
</template>

<script>
import {
  BForm,
  BCard,
  BCardHeader,
  BCardTitle,
  BCardText,
  BCardBody,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BButton,
  BFormInvalidFeedback,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import vSelect from 'vue-select'
import { required, integer } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'

export default {
  components: {
    // BSV
    BForm,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BButton,
    BFormInvalidFeedback,

    // Form Validation
    ValidationProvider,
    ValidationObserver,

    // 3rd party
    vSelect,
  },
  props: {
    addressDetails: {
      type: Object,
      required: true,
    },
  },
  setup(_, { emit }) {
    const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})

    const onSubmit = () => {
      emit('next-step')
    }

    return {
      // Form
      onSubmit,

      // Form Validation
      refFormObserver,
      getValidationState,
      resetForm,

      // FOrm Validators
      required,
      integer,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>
