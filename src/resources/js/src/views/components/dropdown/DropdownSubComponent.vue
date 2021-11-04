<template>
  <b-card-code title="Dropdown sub-component color variants">
    <b-card-text>
      <span>Many of the supported dropdown </span>
      <code>sub-components</code>
      <span> provide a </span>
      <code>variant</code>
      <span> prop for controlling their text color.</span>
    </b-card-text>

    <div>
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Block Level Dropdown Menu"
        variant="primary"
        right
        menu-class="w-100"
      >
        <b-dropdown-item>Hold</b-dropdown-item>
        <b-dropdown-item variant="success">
          Approve
        </b-dropdown-item>
        <b-dropdown-item variant="danger">
          Remove
        </b-dropdown-item>
      </b-dropdown>
    </div>

    <template #code>
      {{ codeSubComponent }}
    </template>
  </b-card-code>
</template>

<script>
import { BDropdown, BDropdownItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeSubComponent } from './code'

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
  data() { return { codeSubComponent } },
}
</script>
