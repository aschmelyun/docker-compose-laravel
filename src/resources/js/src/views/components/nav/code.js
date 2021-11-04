export const codeBasic = `
<template>
  <b-nav>
    <b-nav-item active>
      Active
    </b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>
      Disabled
    </b-nav-item>
  </b-nav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
  },
}
</script>
`

export const codeBorder = `
<template>
  <b-nav class="wrap-border">
    <b-nav-item active>
      Active
    </b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>
      Disabled
    </b-nav-item>
  </b-nav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
  },
}
</script>
`

export const codeAlignment = `
<template>
  <div>
    <div class="d-flex mb-2">
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="left"
        plain
        class="vs-radio-con"
      >
        <span class="vs-radio">
          <span class="vs-radio--border" />
          <span class="vs-radio--circle" />
        </span>
        <span class="ml-50 mr-1">Left</span>
      </b-form-radio>
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="center"
        plain
        class="vs-radio-con"
      >
        <span class="vs-radio">
          <span class="vs-radio--border" />
          <span class="vs-radio--circle" />
        </span>
        <span class="ml-50 mr-1">Center</span>
      </b-form-radio>
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="right"
        plain
        class="vs-radio-con"
      >
        <span class="vs-radio">
          <span class="vs-radio--border" />
          <span class="vs-radio--circle" />
        </span>
        <span class="ml-50 mr-1">Right</span>
      </b-form-radio>
    </div>
    <b-nav :align="selected">
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Link with a long name </b-nav-item>
      <b-nav-item disabled>
        Disabled
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import {BNav, BNavItem, BFormRadio} from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
    BFormRadio,
  },
  data: () => ({
    selected: 'center',
  }),
}
</script>
`

export const codeDivider = `
<template>
  <div>
    <b-nav
      vertical
      class="wrap-border"
    >
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-dropdown-divider />
      <b-nav-item disabled>
        Disabled
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { BNav, BNavItem, BDropdownDivider } from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
    BDropdownDivider,
  },
}
</script>
`

export const codeDropdown = `
<template>
  <div>
    <b-nav>
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        text="Dropdown"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item>One</b-dropdown-item>
        <b-dropdown-item>Two</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Three</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </div>
</template>

<script>
import {
  BNav, BNavItem, BNavItemDropdown, BDropdownDivider, BDropdownItem,
} from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownDivider,
    BDropdownItem,
  },
}
</script>
`

export const codeFill = `
<template>
  <b-nav fill>
    <b-nav-item active>
      Active
    </b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Link with a long name </b-nav-item>
    <b-nav-item disabled>
      Disabled
    </b-nav-item>
  </b-nav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
  },
}
</script>
`

export const codeJustified = `
<template>
  <b-nav justified>
    <b-nav-item active>
      Active
    </b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Link name </b-nav-item>
    <b-nav-item disabled>
      Disabled
    </b-nav-item>
  </b-nav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
  },
}
</script>
`

export const codeSquareBorder = `
<template>
  <div>
    <b-nav
      vertical
      class="wrap-border square-border"
    >
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>
        Disabled
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
  },
}
</script>
`

export const codeVertical = `
<template>
  <div>
    <b-nav
      vertical
    >
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>
        Disabled
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
  },
}
</script>
`

export const codeVerticalBorder = `
<template>
  <div>
    <b-nav
      vertical
      class="wrap-border"
    >
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>
        Disabled
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNav,
    BNavItem,
  },
}
</script>
`
