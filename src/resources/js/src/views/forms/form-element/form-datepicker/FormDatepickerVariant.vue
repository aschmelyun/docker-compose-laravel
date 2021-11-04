<template>
  <b-card-code title="Variants">
    <b-card-text>
      <span>The selected date button (background color) defaults to the </span>
      <code>'primary'</code>
      <span> theme variant. You can change this to any of the Bootstrap v4 theme variant colors: </span>
      <code>'secondary', 'success', 'danger', 'warning', 'info',</code>
      <span> etc, via the </span>
      <code>selected-variant</code>
      <span> prop.</span>
    </b-card-text>

    <b-row>
      <b-col
        md="6"
        lg="4"
      >
        <b-form-datepicker
          local="en"
          placeholder="Primary Variant"
          class="mb-1"
          selected-variant="primary"
        />
      </b-col>
      <b-col
        md="6"
        lg="4"
      >
        <b-form-datepicker
          local="en"
          placeholder="Secondary Variant"
          class="mb-1"
          selected-variant="secondary"
        />
      </b-col>
      <b-col
        md="6"
        lg="4"
      >
        <b-form-datepicker
          local="en"
          placeholder="Success Variant"
          class="mb-1"
          selected-variant="success"
        />
      </b-col>
      <b-col
        md="6"
        lg="4"
      >
        <b-form-datepicker
          local="en"
          placeholder="Warning Variant"
          class="mb-1"
          selected-variant="warning"
        />
      </b-col>
      <b-col
        md="6"
        lg="4"
      >
        <b-form-datepicker
          local="en"
          placeholder="Danger Variant"
          class="mb-1"
          selected-variant="danger"
        />
      </b-col>
      <b-col
        md="6"
        lg="4"
      >
        <b-form-datepicker
          local="en"
          placeholder="Info Variant"
          class="mb-1"
          selected-variant="info"
        />
      </b-col>
    </b-row>

    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormDatepicker, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import { codeVariant } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
    BRow,
    BCol,
  },
  data() {
    return {
      codeVariant,
    }
  },
}
</script>
