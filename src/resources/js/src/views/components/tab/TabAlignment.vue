<template>
  <b-card-code title="Alignments">
    <!-- left align -->
    <h6>Left</h6>
    <div class="mb-3">
      <b-tabs align="left">
        <b-tab title="Home" />
        <b-tab
          active
          title="Service"
        />
        <b-tab title="Account" />
      </b-tabs>
    </div>

    <!-- center align -->
    <h6>
      Center
    </h6>
    <div class="mb-3">
      <b-tabs align="center">
        <b-tab
          title="Home"
          active
        />
        <b-tab title="Service" />
        <b-tab title="Account" />
      </b-tabs>
    </div>

    <!-- right align -->
    <h5>Right</h5>
    <b-tabs align="right">
      <b-tab title="Home" />
      <b-tab title="Service" />
      <b-tab
        active
        title="Account"
      />
    </b-tabs>

    <template #code>
      {{ codeAlignment }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTabs, BTab } from 'bootstrap-vue'
import { codeAlignment } from './code'

export default {
  components: {
    BCardCode,
    BTabs,
    BTab,
  },
  data() {
    return {
      codeAlignment,
    }
  },
}
</script>
