<template>
  <b-card-code title="Justify">
    <b-card-text>
      <span>Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups and dropdowns, by setting the prop </span>
      <code>justify</code>
      <span>.</span>
    </b-card-text>

    <b-button-toolbar justify>

      <!--group 1 -->
      <b-button-group
        class="mr-2 mb-1"
      >
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Button
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Button
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Button
        </b-button>
      </b-button-group>

      <!-- group 2 -->
      <b-button-group
        class="mr-2 mb-1"
      >
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          <feather-icon icon="HomeIcon" />
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          <feather-icon icon="SearchIcon" />
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          <feather-icon icon="BellIcon" />
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          <feather-icon icon="ShoppingCartIcon" />
        </b-button>
      </b-button-group>
    </b-button-toolbar>

    <template #code>
      {{ codeJustify }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButtonToolbar, BButtonGroup, BButton, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import Ripple from 'vue-ripple-directive'
import { codeJustify } from './code'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BCardText,
    BButton,
    BCardCode,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeJustify,
    }
  },
}
</script>
