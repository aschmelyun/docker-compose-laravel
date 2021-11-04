<template>
  <b-card-code title="Custom Labeled Progress">
    <b-card-text>
      <span>Need more control over the label? Provide your own label by using the default slot within a</span>
      <code>&lt;b-progress-bar&gt;</code>
      <span>sub-component, or by using the</span>
      <code>label</code>
      <span>or</span>
      <code>label-html</code>
      <span> property on </span>
      <code>&lt;b-progress-bar&gt;</code>:
    </b-card-text>

    <div class="demo-vertical-spacing">
      <div>
        <label>Custom label via default slot</label>
        <b-progress
          :max="max"
        >
          <b-progress-bar :value="value">
            <strong>{{ value.toFixed(2) }} / {{ max }}</strong>
          </b-progress-bar>
        </b-progress>
      </div>

      <div>
        <label>Custom label via property</label>
        <b-progress
          :max="max"
          class="progress-bar-info"
        >
          <b-progress-bar
            :value="value"
            :label="`${((value / max) * 100).toFixed(2)}%`"
            variant="info"
          />
        </b-progress>
      </div>

      <div>
        <label>Custom label via property (HTML support)</label>
        <b-progress
          :max="max"
          class="progress-bar-warning"
        >
          <b-progress-bar
            :value="value"
            :label-html="`<del>${value}</del>`"
            variant="warning"
          />
        </b-progress>
      </div>
    </div>

    <template #code>
      {{ codeCustomLabel }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BProgress, BProgressBar, BCardText } from 'bootstrap-vue'
import { codeCustomLabel } from './code'

export default {
  components: {
    BCardCode,
    BProgress,
    BProgressBar,
    BCardText,
  },
  data() {
    return {
      codeCustomLabel,
      value: 33.333333333,
      max: 50,
    }
  },
}
</script>
