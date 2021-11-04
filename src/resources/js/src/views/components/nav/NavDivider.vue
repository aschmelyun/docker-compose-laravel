<template>
  <b-card-code title="Nav with Divider  ">
    <b-card-text>
      <span>To add divider, use </span>
      <code>&lt;b-dropdown-divider&gt;</code>
      <span> components.</span>
    </b-card-text>

    <div>
      <b-nav
        vertical
        class="wrap-border"
      >
        <b-nav-item active>
          Active
        </b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-dropdown-divider />
        <b-nav-item disabled>
          Disabled
        </b-nav-item>
      </b-nav>
    </div>

    <template #code>
      {{ codeDivider }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BNav, BNavItem, BDropdownDivider, BCardText,
} from 'bootstrap-vue'
import { codeDivider } from './code'

export default {
  components: {
    BCardCode,
    BNav,
    BNavItem,
    BDropdownDivider,
    BCardText,
  },
  data() {
    return {
      codeDivider,
    }
  },
}
</script>
