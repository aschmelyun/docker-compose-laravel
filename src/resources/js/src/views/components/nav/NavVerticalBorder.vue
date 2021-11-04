<template>
  <b-card-code title="Nav with Border">
    <b-card-text>
      <span>To wrap with border, use </span>
      <code>.wrap-border</code>
      <span> class.</span>
    </b-card-text>

    <b-nav
      vertical
      class="wrap-border"
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
      {{ codeVerticalBorder }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BNav, BNavItem, BCardText } from 'bootstrap-vue'
import { codeVerticalBorder } from './code'

export default {
  components: {
    BCardCode,
    BNav,
    BNavItem,
    BCardText,
  },
  data() {
    return {
      codeVerticalBorder,
    }
  },
}
</script>
