<template>
  <b-card-code
    title="Button only mode"
  >
    <b-card-text>
      <span>
        Fancy just a button that launches the timepicker dialog, or want to provide your own optional text input field?
        Use the
      </span>
      <code>button-only</code>
      <span>
        prop to render the timepicker as a dropdown button. The formatted time label will be rendered with the class
      </span>
      <code>sr-only</code>
      <span> (available only to screen readers).</span>
    </b-card-text>

    <div>
      <label for="example-input">Choose a time</label>
      <b-input-group class="mb-1">
        <b-form-input
          id="example-input"
          v-model="value"
          type="text"
          placeholder="HH:mm:ss"
        />
        <b-input-group-append>
          <b-form-timepicker
            v-model="value"
            button-only
            button-variant="outline-primary"
            right
            size="sm"
            show-seconds
            locale="en"
            aria-controls="example-input"
          />
        </b-input-group-append>
      </b-input-group>
      <b-card-text>Value: '{{ value }}'</b-card-text>
    </div>

    <template #code>
      {{ codeButtonOnly }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormTimepicker, BInputGroup, BFormInput, BInputGroupAppend, BCardText,
} from 'bootstrap-vue'
import { codeButtonOnly } from './code'

export default {
  components: {
    BCardCode,
    BFormTimepicker,
    BInputGroup,
    BFormInput,
    BCardText,
    BInputGroupAppend,
  },
  data() {
    return {
      value: '',
      codeButtonOnly,
    }
  },
}
</script>
