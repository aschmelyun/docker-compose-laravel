<template>
  <b-card-code title="Striped Progress">
    <b-card-text>Set striped to apply a stripe via CSS gradient over the progress bar's background variant.</b-card-text>

    <div class="demo-vertical-spacing">
      <b-progress
        value="25"
        max="100"
        striped
      />
      <b-progress
        value="35"
        max="100"
        striped
        class="progress-bar-secondary"
        variant="secondary"
      />
      <b-progress
        value="45"
        max="100"
        striped
        variant="success"
        class="progress-bar-success"
      />
      <b-progress
        value="55"
        max="100"
        striped
        variant="danger"
        class="progress-bar-danger"
      />
      <b-progress
        value="65"
        max="100"
        striped
        variant="warning"
        class="progress-bar-warning"
      />
      <b-progress
        value="75"
        max="100"
        striped
        variant="info"
        class="progress-bar-info"
      />
      <b-progress
        value="85"
        max="100"
        striped
        variant="dark"
        class="progress-bar-dark"
      />
    </div>

    <template #code>
      {{ codeStripped }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BProgress, BCardText } from 'bootstrap-vue'
import { codeStripped } from './code'

export default {
  components: {
    BCardCode,
    BProgress,
    BCardText,
  },
  data() {
    return {
      codeStripped,
    }
  },
}
</script>
