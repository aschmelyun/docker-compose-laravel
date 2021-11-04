<template>
  <b-card-code
    title="Block level dropdowns"
  >
    <b-card-text>
      <span>By default dropdowns act like buttons and are displayed inline. </span>
      <span>To create block level dropdowns (that span to the full width of a parent) set the </span>
      <code>block</code>
      <span> prop.</span>
    </b-card-text>

    <div>
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Block Level Dropdown"
        block
        right
        variant="primary"
        class="mt-2"
      >
        <b-dropdown-item>
          Action
        </b-dropdown-item>
        <b-dropdown-item>
          Another action
        </b-dropdown-item>
        <b-dropdown-item>
          Something else here
        </b-dropdown-item>
      </b-dropdown>

      <b-dropdown
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        text="Block Level Split Dropdown"
        block
        split
        right
        split-variant="outline-primary"
        variant="outline-primary"
        class="mt-2"
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
      {{ codeBlock }}
    </template>
  </b-card-code>
</template>

<script>
import { BDropdown, BDropdownItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeBlock } from './code'

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
    return { codeBlock }
  },
}
</script>
