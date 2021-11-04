<template>
  <b-card-code title="Flat">
    <b-card-text class="mb-0">
      <span>To create a flat dropdown use </span>
      <code>variant="flat-{color}"</code><span> with your </span><code>&lt;b-dropdown&gt;</code>
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- primary -->
      <b-dropdown
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        text="Primary"
        variant="flat-primary"
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
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        text="Secondary"
        variant="flat-secondary"
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
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        text="Success"
        variant="flat-success"
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
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        text="Danger"
        variant="flat-danger"
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
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        text="Warning"
        variant="flat-warning"
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
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        text="Info"
        variant="flat-info"
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
        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
        text="Dark"
        variant="flat-dark"
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
      {{ codeFlat }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BDropdown, BDropdownItem, BDropdownDivider, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeFlat } from './code'

export default {
  components: {
    BCardCode,
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() { return { codeFlat } },
}
</script>
