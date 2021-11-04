<template>
  <b-card-code title="Change Locale">
    <b-card-text class="mb-0">
      Your Current Locale: <strong>{{ locale }}</strong>
    </b-card-text>

    <!-- radio buttons -->
    <b-form-group class="mb-0">
      <b-form-radio-group
        id="radio-group-2"
        v-model="locale"
        name="radio-sub-component"
        class="demo-inline-spacing"
      >
        <b-form-radio
          value="en"
        >
          English
        </b-form-radio>
        <b-form-radio
          value="fr"
        >
          French
        </b-form-radio>
        <b-form-radio
          value="de"
        >
          German
        </b-form-radio>
        <b-form-radio value="pt">
          Portuguese
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <!-- card -->
    <div class="border rounded mt-3 p-2">
      <h5 class="mb-1">
        {{ $t('message.title') }}
      </h5>
      {{ $t('message.text') }}
    </div>

    <template #code>
      {{ codeChange }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormRadio, BFormRadioGroup, BFormGroup, BCardText,
} from 'bootstrap-vue'
import { codeChange } from './code'

export default {
  components: {
    BCardCode,
    BFormGroup,
    BFormRadio,
    BCardText,
    BFormRadioGroup,
  },
  data() {
    return {
      locale: this.$i18n.locale,
      codeChange,
    }
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val
    },
  },
}
</script>
