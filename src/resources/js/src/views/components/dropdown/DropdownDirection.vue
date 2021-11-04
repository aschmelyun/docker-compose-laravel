<template>
  <b-card-code title="Directions">
    <b-card-text class="mb-0">
      <span>To have the dropdown aligned on the right, set the right</span>
      <code>prop</code>.
      <span>Turn your dropdown menu into a drop-up menu by setting the</span>
      <code>dropup</code>
      <span>prop.</span>
      <code>dropright</code>
      <span>takes precedence over</span>
      <code>dropleft</code>.
      <span>Neither</span>
      <code>dropright</code>
      <span>or</span>
      <code>dropleft</code>
      <span>have any effect if</span>
      <code>dropup</code>
      <span>is set.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <!-- menu align -->
      <b-dropdown
        id="dropdown-left"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        left
        text="Left align"
        variant="primary"
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
        id="dropdown-right"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        right
        text="Right align"
        variant="primary"
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

      <!-- drop up -->
      <b-dropdown
        id="dropdown-dropup"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        dropup
        right
        text="Drop-Up"
        variant="primary"
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

      <!-- drop left and right -->
      <b-dropdown
        id="dropdown-dropright"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        dropright
        text="Drop-Right"
        variant="primary"
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

      <!-- drop left -->
      <b-dropdown
        id="dropdown-dropleft"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        dropleft
        text="Drop-Left"
        variant="primary"
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
      {{ codeDropdownDirection }}
    </template>
  </b-card-code>
</template>

<script>
import { BDropdown, BDropdownItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeDropdownDirection } from './code'

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
      codeDropdownDirection,
    }
  },
}
</script>
