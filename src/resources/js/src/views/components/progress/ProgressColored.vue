<template>
  <b-card-code title="Colored Progress">
    <b-card-text>
      <span>Use</span>
      <code>variant</code>
      <span>prop to add different colors to progressbar and add </span>
      <code>.progress-bar-{color_name}</code>.
    </b-card-text>

    <div class="demo-vertical-spacing">
      <b-progress
        value="25"
        max="100"
      />
      <b-progress
        value="35"
        max="100"
        class="progress-bar-secondary"
        variant="secondary"
      />
      <b-progress
        value="45"
        max="100"
        class="progress-bar-success"
        variant="success"
      />
      <b-progress
        value="55"
        max="100"
        class="progress-bar-danger"
        variant="danger"
      />
      <b-progress
        value="65"
        max="100"
        class="progress-bar-warning"
        variant="warning"
      />
      <b-progress
        value="75"
        max="100"
        class="progress-bar-info"
        variant="info"
      />
      <b-progress
        value="85"
        max="100"
        class="progress-bar-dark"
        variant="dark"
      />
    </div>

    <template #code>
      {{ codeColored }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BProgress, BCardText } from 'bootstrap-vue'
import { codeColored } from './code'

export default {
  components: {
    BCardCode,
    BProgress,
    BCardText,
  },
  data() {
    return {
      codeColored,
    }
  },
}
</script>
