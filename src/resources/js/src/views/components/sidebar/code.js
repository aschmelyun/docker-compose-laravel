export const codeBasic = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-toggle.sidebar-1
      variant="outline-primary"
    >
      Toggle Sidebar
    </b-button>
    <b-sidebar
      id="sidebar-1"
      shadow
      bg-variant="white"
      backdrop
    >
      <sidebar-content />
    </b-sidebar>
  </div>
</template>

<script>
import { BButton, BSidebar, VBToggle} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import SidebarContent from './SidebarContent.vue'

export default {
  components: {
    BButton,
    BSidebar,
    BImg,
    SidebarContent
  },
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
}
</script>
`

export const codeHeader = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-toggle.sidebar-no-header
      variant="outline-primary"
    >
      Toggle Sidebar
    </b-button>

    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      bg-variant="white"
      shadow
      backdrop
    >
      <sidebar-content class="pt-2" />
    </b-sidebar>
  </div>
</template>

<script>
import {BButton, BSidebar, VBToggle} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import SidebarContent from './SidebarContent.vue'

export default {
  components: {
    BButton,
    BSidebar,
    SidebarContent,
  },
  directives: {
    'b-toggle': VBToggle,
     Ripple,
  },
}
</script>
`

export const codePlacement = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-toggle.sidebar-right
      variant="outline-primary"
    >
      Toggle Sidebar
    </b-button>
    <b-sidebar
      id="sidebar-right"
      bg-variant="white"
      right
      backdrop
      shadow
    >
      <sidebar-content />
    </b-sidebar>
  </div>
</template>

<script>
import {BButton, BSidebar, VBToggle} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import SidebarContent from './SidebarContent.vue'

export default {
  components: {
    BButton,
    BSidebar,
    SidebarContent,
  },
  directives: {
    'b-toggle': VBToggle,
  },
}
</script>
`

export const codeVariant = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-toggle.sidebar-variant
      variant="outline-primary"
    >
      Toggle Sidebar
    </b-button>

    <b-sidebar
      id="sidebar-variant"
      bg-variant="dark"
      text-variant="light"
      shadow
      backdrop
    >
      <sidebar-content />
    </b-sidebar>
  </div>
</template>

<script>
import {BButton, BSidebar, VBToggle} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import SidebarContent from './SidebarContent.vue'

export default {
  components: {
    BButton,
    BSidebar,
    SidebarContent,
  },
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
}
</script>
`

export const codeBackdrop = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-toggle.sidebar-backdrop
      variant="outline-primary"
    >
      Toggle Sidebar Without Backdrop
    </b-button>

    <b-sidebar
      id="sidebar-backdrop"
      bg-variant="white"
      shadow
    >
      <sidebar-content />
    </b-sidebar>
  </div>
</template>

<script>
import {BButton, BSidebar, VBToggle} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeBackdrop } from './code'
import SidebarContent from './SidebarContent.vue'

export default {
  components: {
    BButton,
    BCardText,
    BSidebar,
    SidebarContent,
  },
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
}
</script>
`

export const codeFooter = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-toggle.sidebar-footer
      variant="outline-primary"
    >
      Toggle Sidebar
    </b-button>
    <b-sidebar
      id="sidebar-footer"
      aria-label="Sidebar with custom footer"
      shadow
      backdrop
      bg-variant="white"
    >
      <sidebar-content />
      <template #footer>
        <sidebar-content-footer />
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { BButton, BSidebar, VBToggle} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import SidebarContent from './SidebarContent.vue'
import SidebarContentFooter from './SidebarContentFooter.vue'

export default {
  components: {
    BButton,
    BSidebar,
    BCardText,
    SidebarContent,
    SidebarContentFooter,
  },
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
}
</script>
`
