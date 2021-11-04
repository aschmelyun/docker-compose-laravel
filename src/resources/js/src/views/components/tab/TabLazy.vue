<template>
  <b-card-code title="Lazy loading tab content">
    <b-tabs content-class="mt-1">
      <!-- This tabs content will always be mounted -->
      <b-tab title="Regular tab">
        <b-alert
          variant="info"
          show
          class="mb-0"
        >
          <div class="alert-body">
            I'm always mounted
          </div>
        </b-alert>
      </b-tab>

      <!-- This tabs content will not be mounted until the tab is shown -->
      <!-- and will be un-mounted when hidden -->
      <b-tab
        title="Lazy tab"
        lazy
      >
        <b-alert
          variant="info"
          show
          class="mb-0"
        >
          <div class="alert-body">
            I'm lazy mounted!
          </div>
        </b-alert>
      </b-tab>
    </b-tabs>

    <template #code>
      {{ codeLazy }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BTabs, BTab, BAlert,
} from 'bootstrap-vue'
import { codeLazy } from './code'

export default {
  components: {
    BCardCode,
    BTabs,
    BTab,
    BAlert,
  },
  data() {
    return {
      codeLazy,
    }
  },
}
</script>
