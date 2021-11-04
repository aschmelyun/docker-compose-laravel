export const codeChange = `
<template>
  <div>
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
  </div>
</template>

<script>
import {
  BFormRadio, BFormRadioGroup, BFormGroup, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BFormGroup,
    BFormRadio,
    BCardText,
    BFormRadioGroup,
  },
  data() {
    return {
      locale: this.$i18n.locale,
    }
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val
    },
  },
}
</script>
`

export const codeDefault = 'default'
