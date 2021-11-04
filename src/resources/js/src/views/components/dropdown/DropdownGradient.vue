<template>
  <b-card-code title="Gradient">
    <b-card-text class="mb-0">
      <span>To create a gradient dropdown use </span>
      <code>variant="gradient-{color}"</code><span> prop with your </span><code>&lt;b-dropdown&gt;</code>
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- primary -->
      <b-dropdown
        text="Primary"
        variant="gradient-primary"
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
        text="Secondary"
        variant="gradient-secondary"
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
        text="Success"
        variant="gradient-success"
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
        text="Danger"
        variant="gradient-danger"
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
        text="Warning"
        variant="gradient-warning"
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
        text="Info"
        variant="gradient-info"
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
        text="Dark"
        variant="gradient-dark"
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
      {{ codeGradient }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BDropdown, BDropdownItem, BDropdownDivider, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeGradient } from './code'

export default {
  components: {
    BCardCode,
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
    BCardText,
  },
  data() { return { codeGradient } },
}
</script>
