<template>
  <b-card-code title="Labeled Progress">
    <b-card-text>
      <span>Add labels to your progress bars by either enabling</span>
      <code>show-progress</code>
      <span>(percentage of max) or</span>
      <code>show-value</code>
      <span>
        for the current absolute value. You may also set the precision (number of digits after the decimal) via the
      </span>
      <code>precision</code>
      <span>prop (default is 0digits after the decimal).</span>
    </b-card-text>

    <div class="demo-vertical-spacing">
      <div>
        <label>No label</label>
        <b-progress
          value="25"
          max="100"
        />
      </div>

      <div>
        <label>Value label</label>
        <b-progress
          value="35"
          max="100"
          show-value
          variant="secondary"
          class="progress-bar-secondary"
        />
      </div>

      <div>
        <label>Progress label</label>
        <b-progress
          value="45"
          max="100"
          show-progress
          variant="success"
          class="progress-bar-success"
        />
      </div>

      <div>
        <label>Value label with precision</label>
        <b-progress
          value="55"
          max="100"
          precision="2"
          show-value
          variant="danger"
          class="progress-bar-danger"
        />
      </div>

      <div>
        <label>Progress label with precision</label>
        <b-progress
          value="65"
          max="100"
          precision="2"
          show-progress
          variant="warning"
          class="progress-bar-warning"
        />
      </div>
    </div>

    <template #code>
      {{ codeLabel }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BProgress, BCardText } from 'bootstrap-vue'
import { codeLabel } from './code'

export default {
  components: {
    BCardCode,
    BProgress,
    BCardText,
  },
  data() {
    return {
      codeLabel,
    }
  },
}
</script>
