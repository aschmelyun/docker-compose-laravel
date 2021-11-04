<template>
  <b-card>
    <!-- form -->
    <b-form>
      <b-row>
        <!-- bio -->
        <b-col cols="12">
          <b-form-group
            label="Bio"
            label-for="bio-area"
          >
            <b-form-textarea
              id="bio-area"
              v-model="localOptions.bio"
              rows="4"
              placeholder="Your bio data here..."
            />
          </b-form-group>
        </b-col>
        <!--/ bio -->

        <!-- birth date -->
        <b-col md="6">
          <b-form-group
            label-for="example-datepicker"
            label="Birth date"
          >
            <flat-pickr
              v-model="localOptions.dob"
              class="form-control"
              name="date"
              placeholder="Birth date"
            />
          </b-form-group>
        </b-col>
        <!--/ birth date -->

        <!-- Country -->
        <b-col md="6">
          <b-form-group
            label-for="countryList"
            label="Country"
          >
            <v-select
              id="countryList"
              v-model="localOptions.country"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="countryOption"
            />
          </b-form-group>
        </b-col>
        <!--/ Country -->

        <!-- website -->
        <b-col md="6">
          <b-form-group
            label-for="website"
            label="Website"
          >
            <b-form-input
              id="website"
              v-model="localOptions.website"
              placeholder="Website address"
            />
          </b-form-group>
        </b-col>
        <!--/ website -->

        <!-- phone -->
        <b-col md="6">
          <b-form-group
            label-for="phone"
            label="Phone"
          >
            <cleave
              id="phone"
              v-model="localOptions.phone"
              class="form-control"
              :raw="false"
              :options="clevePhone"
              placeholder="Phone number"
            />
          </b-form-group>
        </b-col>
        <!-- phone -->

        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-1 mr-1"
          >
            Save changes
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            class="mt-1"
            variant="outline-secondary"
            @click.prevent="resetForm"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import { BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard, BFormTextarea } from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import Cleave from 'vue-cleave-component'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BCard,
    BFormTextarea,
    vSelect,
    flatPickr,
    Cleave,
  },
  directives: {
    Ripple,
  },
  props: {
    informationData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      countryOption: ['USA', 'India', 'Canada'],
      localOptions: JSON.parse(JSON.stringify(this.informationData)),
      clevePhone: {
        phone: true,
        phoneRegionCode: 'US',
      },
    }
  },
  methods: {
    resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.informationData))
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
