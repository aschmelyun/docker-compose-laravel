<template>
  <b-card-code title="Button groups & Keyboard navigation">
    <b-card-text>Group a series of button-groups and/or input-groups together on a single line, with optional keyboard navigation</b-card-text>

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

    <template #code>
      {{ codeNavigation }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButtonToolbar, BButtonGroup, BButton, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import Ripple from 'vue-ripple-directive'
import { codeNavigation } from './code'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
    BCardText,
    BCardCode,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeNavigation,
    }
  },
}
</script>
