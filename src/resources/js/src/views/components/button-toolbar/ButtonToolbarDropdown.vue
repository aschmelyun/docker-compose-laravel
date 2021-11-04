<template>
  <b-card-code title="Button Toolbar with Dropdown">
    <b-button-toolbar
      class="demo-inline-spacing"
      aria-label="Toolbar with button groups and dropdown menu"
    >

      <!-- group -->
      <b-button-group>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          New
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Edit
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Undo
        </b-button>
      </b-button-group>

      <!-- dropdown -->
      <b-dropdown
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        right
        text="menu"
        variant="outline-primary"
      >
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>

      <!-- group -->
      <b-button-group>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Save
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Cancel
        </b-button>
      </b-button-group>
    </b-button-toolbar>

    <template #code>
      {{ codeDropdown }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButtonToolbar, BButtonGroup, BButton, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import Ripple from 'vue-ripple-directive'
import { codeDropdown } from './code'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
    BDropdown,
    BCardCode,
    BDropdownItem,
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
