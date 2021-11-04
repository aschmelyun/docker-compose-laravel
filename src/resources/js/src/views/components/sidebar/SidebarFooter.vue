<template>
  <b-card-code title="Footer">
    <b-card-text>
      <code>&lt;b-sidebar&gt;</code><span> provides a </span>
      <code>footer</code>
      <span>
        slot (optionally scoped), to allow you to provide content that appears at the bottom of the sidebar. The
      </span>
      <code>footer</code><span> slot is scoped, which includes a</span> <code>hide()</code><span> method that can be used to close the sidebar.</span>
    </b-card-text>

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

    <template #code>
      {{ codeFooter }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BButton, BSidebar, VBToggle, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeFooter } from './code'
import SidebarContent from './SidebarContent.vue'
import SidebarContentFooter from './SidebarContentFooter.vue'

export default {
  components: {
    BCardCode,
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
  data() {
    return {
      codeFooter,
    }
  },
}
</script>
