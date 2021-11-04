<template>
  <b-card-code
    title="Dropdown menu support"
    class="mb-0"
  >
    <b-card-text>
      <span>Add </span>
      <code>&lt;b-dropdown&gt;</code>
      <span> menus directly inside your </span>
      <code>&lt;b-button-group&gt;</code>
      <span>. Note that split dropdown menus are not supported when prop </span>
      <code>vertical</code>
      <span> is set.</span>
    </b-card-text>

    <b-button-group>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Button
      </b-button>
      <b-dropdown
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        right
        variant="outline-primary"
        text="Menu"
      >
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-dropdown
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        right
        split
        text="Split Menu"
      >
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
    </b-button-group>

    <template #code>
      {{ codeDropdown }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButtonGroup, BButton, BDropdown, BDropdownItem, BDropdownDivider, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeDropdown } from './code'

export default {
  components: {
    BButtonGroup,
    BDropdown,
    BDropdownItem,
    BButton,
    BCardCode,
    BDropdownDivider,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeDropdown,
    }
  },
}
</script>
