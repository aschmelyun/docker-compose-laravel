<template>
  <b-card-code title="Icon">
    <b-card-text>
      <span>You can use icon inside </span>
      <code>.alert-body</code>
      <span> or </span>
      <code>.alert-heading</code>
      <span> section.</span>
    </b-card-text>

    <div class="demo-spacing-0">
      <b-alert
        show
        variant="primary"
      >
        <div class="alert-body">
          <feather-icon
            class="mr-25"
            icon="StarIcon"
          />
          <span class="ml-25">Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.</span>
        </div>
      </b-alert>
    </div>

    <template #code>
      {{ codeIcon }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAlert, BCardText } from 'bootstrap-vue'
import { codeIcon } from './code'

export default {
  components: {
    BCardCode,
    BAlert,
    BCardText,
  },
  data() {
    return {
      codeIcon,
    }
  },
}
</script>
