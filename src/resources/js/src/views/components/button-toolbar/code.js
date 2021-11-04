export const codeNavigation = `
<template>
  <b-button-toolbar
    key-nav
    aria-label="Toolbar with button groups"
    class="demo-inline-spacing"
  >

    <!-- group  1 -->
    <b-button-group>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        class="btn-icon"
        variant="outline-primary"
      >
        <feather-icon icon="ChevronsLeftIcon" />
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        class="btn-icon"
        variant="outline-primary"
      >
        <feather-icon icon="ChevronLeftIcon" />
      </b-button>
    </b-button-group>

    <!-- group 2 -->
    <b-button-group>
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
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Redo
      </b-button>
    </b-button-group>

    <!-- group 3 -->
    <b-button-group>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        class="btn-icon"
        variant="outline-primary"
      >
        <feather-icon icon="ChevronRightIcon" />
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        class="btn-icon"
        variant="outline-primary"
      >
        <feather-icon icon="ChevronsRightIcon" />
      </b-button>
    </b-button-group>
  </b-button-toolbar>
</template>

<script>
import {BButtonToolbar, BButtonGroup, BButton} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeInput = `
<template>
   <b-button-toolbar
      class="demo-inline-spacing"
      aria-label="Toolbar with button groups and input groups"
    >
      <b-button-group size="sm">
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
      <b-input-group
        size="sm"
        append=".00"
        prepend="$"
      >
        <b-form-input
          value="100"
          class="text-right"
        />
      </b-input-group>
  </b-button-toolbar>
</template>

<script>
import {
  BButtonToolbar, BButtonGroup, BButton, BFormInput, BInputGroup,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
    BFormInput,
    BInputGroup,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeDropdown = `
<template>
  <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
    <b-button-group>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        New
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Edit
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Undo
      </b-button>
    </b-button-group>
    <b-dropdown
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      class="mx-1"
      right
      text="menu"
      variant="primary"
    >
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    <b-button-group>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Save
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Cancel
      </b-button>
    </b-button-group>
  </b-button-toolbar>
</template>

<script>
import {
  BButtonToolbar, BButtonGroup, BButton, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
    BDropdown,
    BDropdownItem,
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
     <b-button-toolbar>
      <b-button-group
        size="lg"
      >
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          First
        </b-button>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          Second
        </b-button>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          Third
        </b-button>
      </b-button-group>
    </b-button-toolbar>

    <b-button-toolbar>
      <b-button-group
        class="my-1"
      >
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          First
        </b-button>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          Second
        </b-button>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          Third
        </b-button>
      </b-button-group>
    </b-button-toolbar>

    <b-button-toolbar>
      <b-button-group
        size="sm"
      >
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          First
        </b-button>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          Second
        </b-button>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          Third
        </b-button>
      </b-button-group>
    </b-button-toolbar>
  </div>
</template>

<script>
import { BButtonToolbar, BButtonGroup, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeJustify = `
<template>
  <b-button-toolbar justify>
    <b-button-group
      class="mr-2 mb-1"
      vertical
    >
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Button
      </b-button>
    </b-button-group>
    <b-button-group
      class="mr-2 mb-1"
      vertical
    >
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Primary
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="secondary"
      >
        Secondary
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="success"
      >
        Success
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="warning"
      >
        Warning
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="danger"
      >
        Danger
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="info"
      >
        Info
      </b-button>
    </b-button-group>
    <b-button-group
      class="mb-1"
      vertical
    >
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-secondary"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        variant="outline-success"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        variant="outline-warning"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        variant="outline-danger"
      >
        Button
      </b-button>
      <b-button
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        variant="outline-info"
      >
        Button
      </b-button>
    </b-button-group>
  </b-button-toolbar>
</template>

<script>
import { BButtonToolbar, BButtonGroup, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`
