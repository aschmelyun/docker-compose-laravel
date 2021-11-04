<template>
  <b-card-code
    title="Split Dropdowns"
  >
    <b-card-text class="mb-0">
      <span>Create a split dropdown button, where the left button provides standard </span>
      <code>click</code>
      <span> event and link support, while the right hand side is the dropdown menu toggle button. Use prop </span>
      <code>split</code>
      <span> for split dropdown.</span>
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- primary -->
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        split
        text="Primary"
        variant="primary"
        right
      >
        <b-dropdown-item>
          Option 1
        </b-dropdown-item>
        <b-dropdown-item>
          Option 2
        </b-dropdown-item>
        <b-dropdown-item>
          Option 3
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Separated link</b-dropdown-item>
      </b-dropdown>

      <!-- secondary -->
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        split
        text="Secondary"
        variant="secondary"
        right
      >
        <b-dropdown-item>
          Option 1
        </b-dropdown-item>
        <b-dropdown-item>
          Option 2
        </b-dropdown-item>
        <b-dropdown-item>
          Option 3
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Separated link</b-dropdown-item>
      </b-dropdown>

      <!-- success -->
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        split
        text="Success"
        variant="success"
        right
      >
        <b-dropdown-item>
          Option 1
        </b-dropdown-item>
        <b-dropdown-item>
          Option 2
        </b-dropdown-item>
        <b-dropdown-item>
          Option 3
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Separated link</b-dropdown-item>
      </b-dropdown>

      <!-- danger -->
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        split
        text="Danger"
        variant="danger"
        right
      >
        <b-dropdown-item>
          Option 1
        </b-dropdown-item>
        <b-dropdown-item>
          Option 2
        </b-dropdown-item>
        <b-dropdown-item>
          Option 3
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Separated link</b-dropdown-item>
      </b-dropdown>

      <!-- warning -->
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        split
        text="Warning"
        variant="warning"
        right
      >
        <b-dropdown-item>
          Option 1
        </b-dropdown-item>
        <b-dropdown-item>
          Option 2
        </b-dropdown-item>
        <b-dropdown-item>
          Option 3
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Separated link</b-dropdown-item>
      </b-dropdown>

      <!-- info -->
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        split
        text="Info"
        variant="info"
        right
      >
        <b-dropdown-item>
          Option 1
        </b-dropdown-item>
        <b-dropdown-item>
          Option 2
        </b-dropdown-item>
        <b-dropdown-item>
          Option 3
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Separated link</b-dropdown-item>
      </b-dropdown>

      <!-- dark -->
      <b-dropdown
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        split
        text="Dark"
        right
        variant="dark"
      >
        <b-dropdown-item>
          Option 1
        </b-dropdown-item>
        <b-dropdown-item>
          Option 2
        </b-dropdown-item>
        <b-dropdown-item>
          Option 3
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Separated link</b-dropdown-item>
      </b-dropdown>
    </div>

    <template #code>
      {{ codeDropdownSplit }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BDropdown, BDropdownItem, BDropdownDivider, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeDropdownSplit } from './code'

export default {
  components: {
    BCardCode,
    BDropdown,
    BDropdownDivider,
    BCardText,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeDropdownSplit,
    }
  },
}
</script>
