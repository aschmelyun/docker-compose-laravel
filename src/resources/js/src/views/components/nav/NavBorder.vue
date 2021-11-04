<template>
  <b-card-code title="With Border">
    <b-card-text>
      <span>Use Class </span>
      <code>.wrap-border</code>
      <span> with your </span>
      <code>&lt;b-nav&gt;</code>
      <span> tag to wrap your nav with a border.</span>
    </b-card-text>

    <b-nav class="wrap-border">
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
      {{ codeBorder }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BNav, BNavItem, BCardText } from 'bootstrap-vue'
import { codeBorder } from './code'

export default {
  components: {
    BCardCode,
    BNav,
    BNavItem,
    BCardText,
  },
  data() {
    return {
      codeBorder,
    }
  },
}
</script>
