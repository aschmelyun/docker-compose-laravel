<template>
  <b-card-code
    title="Flex"
  >
    <b-card-text>
      Using flex utility classes:
    </b-card-text>

    <div class="d-flex justify-content-center mb-1">
      <b-spinner label="Loading..." />
    </div>
    <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <b-spinner class="ml-auto" />
    </div>

    <template #code>
      {{ codeFlex }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeFlex } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeFlex,
    }
  },
}
</script>
