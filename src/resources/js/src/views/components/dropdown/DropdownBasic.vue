<template>
  <b-card-code title="Basic">
    <b-card-text class="mb-0">
      Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- primary -->
      <b-dropdown
        id="dropdown-1"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Primary"
        variant="primary"
      >
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
        <b-dropdown-item>Option 3</b-dropdown-item>
      </b-dropdown>

      <!-- secondary -->
      <b-dropdown
        id="dropdown-7"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Secondary"
        variant="secondary"
      >
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
        <b-dropdown-item>Option 3</b-dropdown-item>
      </b-dropdown>

      <!-- success -->
      <b-dropdown
        id="dropdown-3"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Success"
        variant="success"
      >
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
        <b-dropdown-item>Option 3</b-dropdown-item>
      </b-dropdown>

      <!-- danger -->
      <b-dropdown
        id="dropdown-5"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Danger"
        variant="danger"
      >
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
        <b-dropdown-item>Option 3</b-dropdown-item>
      </b-dropdown>

      <!-- warning -->
      <b-dropdown
        id="dropdown-4"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Warning"
        variant="warning"
      >
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
        <b-dropdown-item>Option 3</b-dropdown-item>
      </b-dropdown>

      <!-- info -->
      <b-dropdown
        id="dropdown-6"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Info"
        variant="info"
      >
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
        <b-dropdown-item>Option 3</b-dropdown-item>
      </b-dropdown>

      <!-- dark -->
      <b-dropdown
        id="dropdown-8"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        text="Dark"
        variant="dark"
      >
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
        <b-dropdown-item>Option 3</b-dropdown-item>
      </b-dropdown>
    </div>

    <template #code>
      {{ codeDropdownBasic }}
    </template>
  </b-card-code>
</template>

<script>
import { BDropdown, BDropdownItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeDropdownBasic } from './code'

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
      codeDropdownBasic,
    }
  },
}
</script>
