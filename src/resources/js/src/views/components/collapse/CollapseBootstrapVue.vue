<template>
  <b-card-code
    title="Bootsrap-vue Collapse"
  >
    <b-card-text>Easily toggle visibility of almost any content on your pages. Includes support for making accordions.</b-card-text>

    <!-- toggle button -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-toggle.collapse-1
      variant="outline-primary"
    >
      Toggle Collapse
    </b-button>

    <b-collapse
      id="collapse-1"
      class="mt-2"
    >
      <b-card class="border mb-0">
        <b-card-text class="card-text">
          Collapse contents Here
        </b-card-text>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.collapse-1-inner
          size="sm"
          variant="outline-primary"
        >
          Toggle Inner Collapse
        </b-button>
        <b-collapse
          id="collapse-1-inner"
          class="mt-2"
        >
          <b-card class="border mb-0">
            Hello!
          </b-card>
        </b-collapse>
      </b-card>
    </b-collapse>

    <template #code>
      {{ codeCollapseBoostrapVue }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BCollapse, BButton, VBToggle, BCard, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeCollapseBoostrapVue } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BCard,
    BCollapse,
  },
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
  data() { return { codeCollapseBoostrapVue } },
}
</script>
