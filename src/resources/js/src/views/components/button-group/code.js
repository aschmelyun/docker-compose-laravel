export const codeBasic = `
<template>
  <b-button-group>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
    >
      First
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
    >
      Second
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
    >
      Third
    </b-button>
  </b-button-group>
</template>

<script>
import { BButtonGroup, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonGroup,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeSize = `
<template>
  <div>
    <div>
      <!-- large -->
      <b-button-group
        size="lg"
      >
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          First
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Second
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Third
        </b-button>
      </b-button-group>
    </div>
    <div>

      <!-- default -->
      <b-button-group
        class="my-1"
      >
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          First
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Second
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Third
        </b-button>
      </b-button-group>
    </div>

    <div>

      <!-- size -->
      <b-button-group
        size="sm"
      >
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          First
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Second
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Third
        </b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import { BButtonGroup, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonGroup,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeDropdown = `
<template>
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
</template>

<script>
import {
  BButtonGroup, BButton, BDropdown, BDropdownItem, BDropdownDivider, 
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonGroup,
    BDropdown,
    BDropdownItem,
    BButton,
    BDropdownDivider,
  },
  directives: {
    Ripple,
  },
}
</script>
`
