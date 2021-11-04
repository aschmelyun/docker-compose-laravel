<template>
  <b-card-code
    title="Internationalization"
  >
    <b-card-text>
      <span>When a </span>
      <code>locale</code>
      <span> is specified, the displayed value (when the </span>
      <code>show-value</code>
      <span> prop is </span>
      <code>true</code>
      <span> ) will be in the browser's default locale.</span>
    </b-card-text>

    <div class="d-flex">
      <b-form-select
        v-model="locale"
        :options="locales"
      />
      <b-form-rating
        v-model="value"
        :locale="locale"
        show-value
        variant="warning"
        precision="1"
        inline
        no-border
      />
    </div>

    <template #code>
      {{ codeInternationalization }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BFormSelect, BCardText } from 'bootstrap-vue'
import { codeInternationalization } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
      value: 3.5,
      locale: 'en-US',
      locales: [
        { text: 'English US (en-US)', value: 'en-US' },
        { text: 'French (fr)', value: 'fr' },
        { text: 'Persian (fa)', value: 'fa' },
        { text: 'Arabic Egyptian (ar-EG)', value: 'ar-EG' },
      ],
      codeInternationalization,
    }
  },
}
</script>
