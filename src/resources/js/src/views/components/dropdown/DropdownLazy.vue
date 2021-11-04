<template>
  <b-card-code title="Lazy dropdown">
    <b-card-text>
      <span> You can instruct</span>
      <code>&lt;b-dropdown&gt;</code>
      <span> to render the menu contents only when it is shown by setting the </span>
      <code>lazy</code>
      <span> prop to true.</span>
    </b-card-text>

    <div>
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Lazy Dropdown"
        variant="primary"
        lazy
        right
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
    </div>

    <template #code>
      {{ codeLazy }}
    </template>
  </b-card-code>
</template>

<script>
import { BDropdown, BDropdownItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeLazy } from './code'

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
    return { codeLazy }
  },
}
</script>
