<template>
  <b-card-code title="Fill Nav">
    <b-card-text>
      <span>To proportionately fill all available space with your </span>
      <code>&lt;b-nav-item&gt;</code>
      <span> components, set the </span>
      <code>fill</code>
      <span> prop.</span>
      <span>Notice that all horizontal space is occupied, but not every nav item has the same width.</span>
    </b-card-text>

    <b-nav fill>
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Link with a long name </b-nav-item>
      <b-nav-item disabled>
        Disabled
      </b-nav-item>
    </b-nav>

    <template #code>
      {{ codeFill }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BNav, BNavItem, BCardText } from 'bootstrap-vue'
import { codeFill } from './code'

export default {
  components: {
    BCardCode,
    BNav,
    BCardText,
    BNavItem,
  },
  data() {
    return {
      codeFill,
    }
  },
}
</script>
