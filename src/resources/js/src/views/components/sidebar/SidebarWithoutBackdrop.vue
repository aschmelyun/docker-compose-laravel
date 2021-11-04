<template>
  <b-card-code title="Backdrop">
    <b-card-text>
      <span>Sidebar component don't have backdrop by default. You can add it using </span>
      <code>backdrop</code>
      <span> prop. Below demo shows sidebar <strong>without</strong> backdrop</span>
    </b-card-text>

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

    <template #code>
      {{ codeBackdrop }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BButton, BSidebar, VBToggle, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeBackdrop } from './code'
import SidebarContent from './SidebarContent.vue'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BSidebar,
    SidebarContent,
  },
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
  data() {
    return {
      codeBackdrop,
    }
  },
}
</script>
