<template>
  <b-card-code title="Nav with Square Border">
    <b-card-text>
      <span>To wrap with square border, use </span>
      <code>.square-border</code>
      <span> class with </span>
      <code>.wrap-border</code>
      <span> class.</span>
    </b-card-text>

    <b-nav
      vertical
      class="wrap-border square-border"
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
      {{ codeSquareBorder }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BNav, BNavItem, BCardText } from 'bootstrap-vue'
import { codeSquareBorder } from './code'

export default {
  components: {
    BCardCode,
    BNav,
    BNavItem,
    BCardText,
  },
  data() {
    return {
      codeSquareBorder,
    }
  },
}
</script>
