<template>
  <b-card-code title="Base Nav">
    <b-card-text>
      <span>Navigation available in Bootstrap share general markup and styles, from the base </span>
      <code>&lt;b-nav&gt;</code>
      <span> class to the </span>
      <code>active</code>
      <span> and </span>
      <code>disabled</code>
      <span> states.</span>
    </b-card-text>

    <b-nav>
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>
        Disabled
      </b-nav-item>
    </b-nav>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BNav, BNavItem, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BNav,
    BNavItem,
    BCardText,
  },
  data() {
    return {
      codeBasic,
    }
  },
}
</script>
