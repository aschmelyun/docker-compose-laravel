<template>
  <b-card-code title="Split button link support">
    <b-card-text>
      <span>To convert this button into a link or </span>
      <code>&lt;router-link&gt;</code>
      <span>, specify the href via the </span>
      <code>split-href</code>
      <span> prop or a router link </span>
      <code>to</code>
      <span> value via the </span>
      <code>split-to</code>
      <span> prop.</span>
    </b-card-text>

    <div>
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        split
        right
        variant="primary"
        split-href="#foo/bar"
        text="Split Link"
      >
        <b-dropdown-item>
          Action
        </b-dropdown-item>
        <b-dropdown-item>
          Another action
        </b-dropdown-item>
        <b-dropdown-item>
          Something else here...
        </b-dropdown-item>
      </b-dropdown>
    </div>

    <template #code>
      {{ codeButtonLink }}
    </template>
  </b-card-code>
</template>

<script>
import { BDropdown, BDropdownItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeButtonLink } from './code'

export default {
  components: {
    BCardCode,
    BDropdown,
    BDropdownItem,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeButtonLink,
    }
  },

}
</script>
