<template>
  <b-card-code title="Title">
    <b-card-text>
      <span>Add a title to the alert with the </span>
      <code>.alert-heading</code>
      <span> class.</span>
    </b-card-text>

    <div class="demo-spacing-0">
      <b-alert
        variant="warning"
        show
      >
        <h4 class="alert-heading">
          Lorem ipsum dolor sit amet
        </h4>
        <div class="alert-body">
          Lorem ipsum dolor sit amet
          <b-link class="alert-link">
            consectetur
          </b-link>
          adipisicing elit. Ducimus, laborum!
        </div>
      </b-alert>
    </div>

    <template #code>
      {{ codeAlertTitle }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAlert, BCardText, BLink } from 'bootstrap-vue'
import { codeAlertTitle } from './code'

export default {
  components: {
    BCardCode,
    BAlert,
    BCardText,
    BLink,
  },
  data() {
    return {
      codeAlertTitle,
    }
  },
}
</script>
