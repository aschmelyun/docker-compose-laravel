export const codeBasic = `
<template>
  <b-row>

    <!-- default -->
    <b-col md="6">
      <b-form-group>
        <h5 class="font-weight-bold">
          Default
        </h5>
        <flat-pickr
          v-model="dateDefault"
          class="form-control"
        />
      </b-form-group>
    </b-col>

    <!-- time picker -->
    <b-col md="6">
      <b-form-group>
        <h5>Time picker</h5>
        <flat-pickr
          v-model="timePicker"
          class="form-control"
          :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i',}"
        />
      </b-form-group>
    </b-col>

    <!-- date and time -->
    <b-col md="6">
      <b-form-group>
        <h5>Date & TIme</h5>
        <flat-pickr
          v-model="dateNtim"
          class="form-control"
          :config="{ enableTime: true,dateFormat: 'Y-m-d H:i'}"
        />
      </b-form-group>
    </b-col>

    <!-- multiple dates -->
    <b-col md="6">
      <b-form-group>
        <h5>Multiple Dates</h5>
        <flat-pickr
          v-model="multiDate"
          class="form-control"
          :config="{ mode: 'multiple',dateFormat: 'Y-m-d'}"
        />
      </b-form-group>
    </b-col>

    <!-- range -->
    <b-col md="6">
      <b-form-group>
        <h5>Range</h5>
        <flat-pickr
          v-model="rangeDate"
          class="form-control"
          :config="{ mode: 'range'}"
        />
      </b-form-group>
    </b-col>

    <!-- human friendly -->
    <b-col md="6">
      <b-form-group>
        <h5>Human Friendly</h5>
        <flat-pickr
          v-model="humanDate"
          class="form-control"
          :config="{ altInput: true,altFormat: 'F j, Y', dateFormat: 'Y-m-d',}"
        />
      </b-form-group>
    </b-col>

    <!-- disabled range -->
    <b-col md="6">
      <b-form-group>
        <h5>Disabled Range</h5>
        <flat-pickr
          v-model="disableDate"
          class="form-control"
          :config="{ dateFormat: 'Y-m-d',disable:[{from:'2020-08-20',to:'2020-08-25'}]}"
        />
      </b-form-group>
    </b-col>

    <!-- inline -->
    <b-col md="6">
      <b-form-group>
        <h5>Inline</h5>
        <flat-pickr
          v-model="inlineDate"
          class="form-control"
          :config="{ inline: true}"
        />
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BFormGroup } from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'

export default {
  components: {
    BRow,
    BCol,

    flatPickr,
    BFormGroup,
  },
  data() {
    return {
      date: null,
      dateDefault: null,
      timePicker: null,
      dateNtim: null,
      multiDate: null,
      rangeDate: null,
      humanDate: null,
      disableDate: null,
      inlineDate: null,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
`
export const code = 'default'
