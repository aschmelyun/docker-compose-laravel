<template>
  <b-card-code title="Sizes">
    <b-card-text class="mb-0">
      <span>Set the prop </span>
      <code>small</code>
      <span> to </span>
      <code>true</code>
      <span> to make a smaller spinner that can quickly be used within other components.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <div>
        <b-spinner
          small
          class="mr-1"
          label="Small Spinner"
        />
        <b-spinner
          small
          label="Small Spinner"
          type="grow"
        />
      </div>
      <div>
        <b-spinner
          class="mr-1"
          label="Small Spinner"
        />
        <b-spinner
          label="Small Spinner"
          type="grow"
        />
      </div>
      <div>
        <b-spinner
          style="width: 3rem; height: 3rem;"
          class="mr-1"
          label="Large Spinner"
        />
        <b-spinner
          style="width: 3rem; height: 3rem;"
          label="Large Spinner"
          type="grow"
        />
      </div>
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeSize,
    }
  },
}
</script>
