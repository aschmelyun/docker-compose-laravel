<template>
  <b-card-code
    title="Variants"
  >
    <b-card-text class="mb-0">
      <span>Easily apply one of the Bootstrap theme color variants to the rating icon via the </span>
      <code>variant</code>
      <span> prop.</span>
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- Primary -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="primary"
        class="custom-control-primary"
      >
        Primary
      </b-form-radio>

      <!-- secondary -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="secondary"
        class="custom-control-secondary"
      >
        Secondary
      </b-form-radio>

      <!-- success -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="success"
        class="custom-control-success"
      >
        Success
      </b-form-radio>

      <!-- danger -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="danger"
        class="custom-control-danger"
      >
        Danger
      </b-form-radio>

      <!-- warning -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="warning"
        class="custom-control-warning"
      >
        Warning
      </b-form-radio>

      <!-- info -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="info"
        class="custom-control-info"
      >
        Info
      </b-form-radio>
    </div>

    <!-- Rating -->
    <b-form-rating
      v-model="value"
      :variant="selected"
      inline
      no-border
      class="mt-1"
    />

    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BFormRadio, BCardText } from 'bootstrap-vue'
import { codeVariant } from './code'

export default {
  components: {
    BCardCode,
    BFormRadio,
    BFormRating,
    BCardText,
  },
  data() {
    return {
      value: 3,
      selected: 'primary',
      codeVariant,
    }
  },
}
</script>
