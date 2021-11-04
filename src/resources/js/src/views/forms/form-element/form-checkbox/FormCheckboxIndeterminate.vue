<template>
  <b-card-code title="Indeterminate (tri-state) support">
    <b-card-text>
      <code>&lt;b-form-checkbox&gt;</code>
      <span> supports setting this visual indeterminate state via the </span>
      <code>indeterminate</code>
      <span> prop (defaults to </span>
      <code>false</code>
      <span> ). Clicking the checkbox will clear its indeterminate state. The </span>
      <code>indeterminate</code>
      <span> prop can be synced to the checkbox's state by v-binding the </span>
      <code>indeterminate</code>
      <span> prop with the </span>
      <code>.sync</code>
      <span> modifier.</span>
    </b-card-text>

    <!-- checkbox -->
    <b-form-checkbox
      v-model="checked"
      :indeterminate.sync="indeterminate"
    >
      Click me to see what happens
    </b-form-checkbox>

    <!-- button -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      class="mt-1"
      variant="outline-primary"
      @click="toggleIndeterminate"
    >
      Toggle Indeterminate State
    </b-button>

    <div class="mt-1">
      Checked: <strong>{{ checked }}</strong><br>
      Indeterminate: <strong>{{ indeterminate }}</strong>
    </div>

    <template #code>
      {{ codeIndeterminate }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormCheckbox, BButton, BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeIndeterminate } from './code'

export default {
  components: {
    BFormCheckbox,
    BCardCode,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      checked: true,
      indeterminate: true,
      codeIndeterminate,
    }
  },
  methods: {
    toggleIndeterminate() {
      this.indeterminate = !this.indeterminate
    },
  },
}
</script>
