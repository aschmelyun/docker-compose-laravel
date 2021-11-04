<template>
  <b-card-code title="Sizes">
    <b-card-text class="mb-0">
      <span>Dropdowns work with trigger buttons of all sizes, including default and split dropdown buttons. Set the size prop to either </span>
      <code>sm</code>
      <span> for small button(s), or </span>
      <code>lg</code>
      <span> for large button(s).</span>
    </b-card-text>

    <div class="d-flex flex-wrap justify-content-between">

      <!-- dropdown -->
      <div class="demo-inline-spacing">
        <b-dropdown
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          size="lg"
          text="Large"
          variant="primary"
        >
          <b-dropdown-item>Option 1</b-dropdown-item>
          <b-dropdown-item>Option 2</b-dropdown-item>
          <b-dropdown-item>Option 3</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          text="Default"
          variant="primary"
        >
          <b-dropdown-item>Option 1</b-dropdown-item>
          <b-dropdown-item>Option 2</b-dropdown-item>
          <b-dropdown-item>Option 3</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          size="sm"
          text="Small"
          variant="primary"
        >
          <b-dropdown-item>Option 1</b-dropdown-item>
          <b-dropdown-item>Option 2</b-dropdown-item>
          <b-dropdown-item>Option 3</b-dropdown-item>
        </b-dropdown>
      </div>

      <!-- dropdown split -->
      <div class="demo-inline-spacing">
        <b-dropdown
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          split
          right
          size="lg"
          text="Large"
          variant="primary"
        >
          <b-dropdown-item>Option 1</b-dropdown-item>
          <b-dropdown-item>Option 2</b-dropdown-item>
          <b-dropdown-item>Option 3</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          split
          right
          text="Default"
          variant="primary"
        >
          <b-dropdown-item>Option 1</b-dropdown-item>
          <b-dropdown-item>Option 2</b-dropdown-item>
          <b-dropdown-item>Option 3</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          split
          right
          size="sm"
          text="Small"
          variant="primary"
        >
          <b-dropdown-item>Option 1</b-dropdown-item>
          <b-dropdown-item>Option 2</b-dropdown-item>
          <b-dropdown-item>Option 3</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <template #code>
      {{ codeDropdownSize }}
    </template>
  </b-card-code>
</template>

<script>
import { BDropdown, BDropdownItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeDropdownSize } from './code'

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
      codeDropdownSize,
    }
  },
}
</script>
