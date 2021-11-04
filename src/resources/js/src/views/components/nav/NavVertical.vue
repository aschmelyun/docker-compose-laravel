<template>
  <b-card-code title="Vertical nav">
    <b-card-text>
      <span>By default </span>
      <code>&lt;b-nav&gt;</code>
      <span> appear on a horizontal line. Stack your navigation by setting the </span>
      <code>vertical</code>
      <span> prop.</span>
    </b-card-text>

    <b-nav
      vertical
    >
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
      {{ codeVertical }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BNav, BNavItem, BCardText } from 'bootstrap-vue'
import { codeVertical } from './code'

export default {
  components: {
    BCardCode,
    BNav,
    BNavItem,
    BCardText,
  },
  data() {
    return {
      codeVertical,
    }
  },
}
</script>
