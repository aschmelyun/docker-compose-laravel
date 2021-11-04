<template>
  <b-card-code title="Horizontal form label sizing">
    <b-card-text>
      <span>You can control the label text size match the size of your form input(s) via the optional </span>
      <code>label-size</code>
      <span> prop. Values can be </span>
      <code>'sm'</code>
      <span> or </span>
      <code>'lg'</code>
      <span> for small or large label, respectively. Sizes work for both horizontal and non-horizontal form groups.</span>
    </b-card-text>

    <!-- large label  -->
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="lg"
      label="Large"
      label-for="input-lg"
    >
      <b-form-input
        id="input-lg"
        size="lg"
        placeholder="Large Input"
      />
    </b-form-group>

    <!-- default label -->
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label="Default"
      label-for="input-default"
    >
      <b-form-input
        id="input-default"
        placeholder="Normal Input"
      />
    </b-form-group>

    <!-- small label -->
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Small"
      label-for="input-sm"
    >
      <b-form-input
        id="input-sm"
        size="sm"
        placeholder="Small Input"
      />
    </b-form-group>

    <template #code>
      {{ codeHorizontalSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BFormGroup, BFormInput, BCardText } from 'bootstrap-vue'
import { codeHorizontalSize } from './code'

export default {
  components: {
    BCardCode,
    BFormGroup,
    BFormInput,
    BCardText,
  },
  data() {
    return {
      codeHorizontalSize,
    }
  },
}
</script>
