<template>
  <b-card-code title="Buttons">
    <b-card-text class="mb-0">
      Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the
      label text out of the spinner element and utilize button text as needed.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        variant="outline-primary"
        disabled
      >
        <b-spinner small />
        <span class="sr-only">Loading...</span>
      </b-button>

      <b-button
        variant="outline-primary"
        disabled
      >
        <b-spinner small />
        Loading...
      </b-button>

      <b-button
        variant="outline-primary"
        disabled
      >
        <b-spinner
          small
          type="grow"
        />
        <span class="sr-only">Loading...</span>
      </b-button>

      <b-button
        variant="outline-primary"
        disabled
      >
        <b-spinner
          small
          type="grow"
        />
        Loading...
      </b-button>
    </div>

    <template #code>
      {{ codeButton }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BButton, BCardText } from 'bootstrap-vue'
import { codeButton } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeButton,
    }
  },
}
</script>
