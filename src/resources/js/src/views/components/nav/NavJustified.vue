<template>
  <b-card-code title="Justified Nav">
    <b-card-text>
      <span>For equal-width elements, set the </span>
      <code>justified</code>
      <span> prop instead. All horizontal space will be occupied by nav links, but unlike </span>
      <code>fill</code>
      <span> above, every </span>
      <code>&lt;b-nav-item&gt;</code>
      <span> will be the same width.</span>
    </b-card-text>

    <b-nav justified>
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Link name </b-nav-item>
      <b-nav-item disabled>
        Disabled
      </b-nav-item>
    </b-nav>

    <template #code>
      {{ codeJustified }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BNav, BNavItem, BCardText } from 'bootstrap-vue'
import { codeJustified } from './code'

export default {
  components: {
    BCardCode,
    BNav,
    BNavItem,
    BCardText,
  },
  data() {
    return {
      codeJustified,
    }
  },
}
</script>
