<template>
  <b-card-code
    title="Hiding the default header"
  >
    <b-card-text>
      <span>You can disable the default header (including the close button) via the </span>
      <code>no-header</code>
      <span> prop. Note that you will need to provide a method of closing the sidebar. The </span>
      <code>default</code>
      <span> slot is scoped, which includes a</span>
      <code>hide()</code>
      <span> method that can be used to close the sidebar.</span>
    </b-card-text>

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

    <template #code>
      {{ codeHeader }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BButton, BSidebar, VBToggle, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeHeader } from './code'
import SidebarContent from './SidebarContent.vue'

export default {
  components: {
    BCardCode,
    BButton,
    BSidebar,
    SidebarContent,
    BCardText,
  },
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
  data() {
    return {
      codeHeader,
    }
  },
}
</script>
