<template>
  <b-card-code
    title="Locale"
  >
    <b-card-text>
      <span>By default </span>
      <code>&lt;b-form-spinbutton&gt;</code>
      <span>
        will format the displayed number in the users browser default locale. You can change the localized formatting by
        specifying a locale (or array of locales) via the
      </span>
      <code>locale</code>
      <span>
        prop.
      </span>
    </b-card-text>

    <div>
      <label for="sb-locales">Locale</label>
      <b-form-select
        id="sb-locales"
        v-model="locale"
        :options="locales"
      />
      <label
        for="sb-local"
        class="mt-2"
      >Spin button with locale</label>
      <b-form-spinbutton
        id="sb-locale"
        v-model="value"
        :locale="locale"
        min="0"
        max="10"
        step="0.125"
      />
      <b-card-text class="mt-1">
        Value: {{ value }}
      </b-card-text>
    </div>

    <template #code>
      {{ codeLocale }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BFormSelect, BCardText } from 'bootstrap-vue'
import { codeLocale } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
      value: 0,
      locale: 'fr-CA',
      locales: [
        { value: 'en', text: 'English' },
        { value: 'de', text: 'German' },
        { value: 'fr-CA', text: 'French (Canadian)' },
        { value: 'fa', text: 'Persian' },
        { value: 'ar-EG', text: 'Arabic (Egyptian)' },
      ],
      codeLocale,
    }
  },
}
</script>
