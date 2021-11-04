export const codeDropdownBasic = `
<template>
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
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeDropdownDirection = `
<template>
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
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeDropdownSize = `
<template>
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
</template>

<script>
import { BDropdown, BDropdownItem} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeDropdownSplit = `
<template>
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
</template>

<script>
import { BDropdown, BDropdownItem, BDropdownDivider } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeDropdownVariation = `
<template>
  <div class="demo-inline-spacing">
    <!-- group -->
    <b-dropdown
      id="dropdown-grouped"
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      right
      text="Group"
    >
      <b-dropdown-group
        id="dropdown-group-1"
        header="Group 1"
      >
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
      </b-dropdown-group>
      <b-dropdown-divider />
      <b-dropdown-group
        id="dropdown-group-2"
        header="Group 2"
      >
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
      </b-dropdown-group>
    </b-dropdown>

    <!-- icon -->
    <b-dropdown
      id="dropdown-grouped"
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      right
      class="dropdown-icon-wrapper"
    >
      <template #button-content>
        <span class="mr-1">Volume</span>
        <feather-icon
          icon="Volume1Icon"
          size="16"
          class="align-middle"
        />
      </template>
      <b-dropdown-item>
        <feather-icon
          icon="Volume1Icon"
          size="18"
        />
      </b-dropdown-item>
      <b-dropdown-item>
        <feather-icon
          icon="Volume2Icon"
          size="18"
        />
      </b-dropdown-item>
      <b-dropdown-item>
        <feather-icon
          icon="VolumeXIcon"
          size="18"
        />
      </b-dropdown-item>
    </b-dropdown>

    <!-- form -->
    <b-dropdown
      id="dropdown-form"
      ref="dropdown"
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      right
      variant="primary"
      text="Form"
    >
      <b-dropdown-form class="py-1">
        <b-form-group
          label="Email"
          label-for="dropdown-form-email"
          @submit.stop.prevent
        >
          <b-form-input
            id="dropdown-form-email"
            size="sm"
            placeholder="email@example.com"
          />
        </b-form-group>

        <b-form-group
          label="Password"
          label-for="dropdown-form-password"
        >
          <b-form-input
            id="dropdown-form-password"
            type="password"
            size="sm"
            placeholder="Password"
          />
        </b-form-group>

        <div class="mb-2">
          <b-form-checkbox>
            Remember me
          </b-form-checkbox>
        </div>
        <b-button
          variant="primary"
          size="sm"
          @click="onClick"
        >
          Sign In
        </b-button>
      </b-dropdown-form>
      <b-dropdown-divider />
      <b-dropdown-item>New around here? Sign up</b-dropdown-item>
      <b-dropdown-item>Forgot Password?</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import {
  BButton,
  BDropdown,
  BDropdownDivider,
  BDropdownForm,
  BDropdownGroup,
  BDropdownItem,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BDropdown,
    BDropdownDivider,
    BDropdownForm,
    BDropdownGroup,
    BDropdownItem,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true)
    },
  },
}
</script>
 `

export const codeBlock = `
<template>
  <div>
    <b-dropdown
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      text="Block Level Dropdown"
      block
      right
      variant="primary"
      class="mt-2"
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
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      text="Block Level Split Dropdown"
      block
      split
      right
      split-variant="outline-primary"
      variant="outline-primary"
      class="mt-2"
    >
      <b-dropdown-item>
        Action
      </b-dropdown-item>
      <b-dropdown-item>
        Another action
      </b-dropdown-item>
      <b-dropdown-item>
        Something else here...
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeButtonLink = `
<template>
  <div>
    <b-dropdown
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      split
      right
      variant="primary"
      split-href="#foo/bar"
      text="Split Link"
    >
      <b-dropdown-item>
        Action
      </b-dropdown-item>
      <b-dropdown-item>
        Another action
      </b-dropdown-item>
      <b-dropdown-item>
        Something else here...
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeLazy = `
<template>
  <div>
    <b-dropdown
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      text="Lazy Dropdown"
      variant="primary"
      lazy
      right
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
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeSubComponent = `
<template>
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
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeGradient = `
<template>
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
</template>

<script>
import { BDropdown, BDropdownItem, BDropdownDivider } from 'bootstrap-vue'

export default {
  components: {
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
  },
}
</script>
`

export const codeFlat = `
<template>
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
</template>

<script>
import { BDropdown, BDropdownItem, BDropdownDivider } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeOutline = `
<template>
  <div class="demo-inline-spacing">

    <!-- primary -->
    <b-dropdown
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      text="Primary"
      variant="outline-primary"
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
      variant="outline-secondary"
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
      variant="outline-success"
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
      split
      text="Danger"
      variant="outline-danger"
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
      split
      text="Warning"
      variant="outline-warning"
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
      variant="outline-info"
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

    <!-- Dark -->
    <b-dropdown
      v-ripple.400="'rgba(30, 30, 30, 0.15)'"
      text="Dark"
      variant="outline-dark"
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
</template>

<script>
import { BDropdown, BDropdownItem, BDropdownDivider } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>
`
