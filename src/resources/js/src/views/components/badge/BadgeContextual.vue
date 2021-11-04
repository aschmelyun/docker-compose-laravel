<template>
  <b-card-code
    title="Contextual Badges"
  >
    <b-card-text class="mb-0">
      <span>Add any of the following variants via the </span>
      <code>variant</code>
      <span> prop to change the appearance of a </span>
      <code>&lt;b-badge&gt;:</code>
      <span> default, primary, success, warning, info,</span>
      <span> and </span>
      <span>danger.</span>
      <span> If no variant is specified </span>
      <code>default</code>
      <span> will be used.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-badge variant="primary">
        Primary
      </b-badge>
      <b-badge>
        Secondary
      </b-badge>
      <b-badge variant="success">
        Success
      </b-badge>
      <b-badge variant="danger">
        Danger
      </b-badge>
      <b-badge variant="warning">
        Warning
      </b-badge>
      <b-badge variant="info">
        Info
      </b-badge>
      <b-badge variant="dark">
        Dark
      </b-badge>
    </div>

    <template #code>
      {{ codeContextual }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BBadge, BCardText } from 'bootstrap-vue'
import { codeContextual } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BBadge,
  },
  data() {
    return {
      codeContextual,
    }
  },
}
</script>
