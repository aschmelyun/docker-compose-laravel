<template>
  <b-card-code title="Button Toolbar with Input">
    <b-button-toolbar
      class="demo-inline-spacing"
      aria-label="Toolbar with button groups and input groups"
    >
      <b-button-group size="sm">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Save
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Cancel
        </b-button>
      </b-button-group>
      <b-input-group
        size="sm"
        append=".00"
        prepend="$"
      >
        <b-form-input
          value="100"
          class="text-right"
        />
      </b-input-group>
    </b-button-toolbar>

    <template #code>
      {{ codeInput }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButtonToolbar, BButtonGroup, BButton, BFormInput, BInputGroup,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import Ripple from 'vue-ripple-directive'
import { codeInput } from './code'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
    BFormInput,
    BInputGroup,
    BCardCode,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeInput,
    }
  },
}
</script>
