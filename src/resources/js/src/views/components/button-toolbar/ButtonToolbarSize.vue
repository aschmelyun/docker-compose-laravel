<template>
  <b-card-code title="Size">
    <b-card-text>
      <span>If you want smaller or larger buttons or controls, set the size prop directly on the </span>
      <code>&lt;b-button-group&gt;</code>
      <span>, </span>
      <code>&lt;b-input-group&gt;</code>
      <span>, and </span>
      <code>&lt;b-dropdown&gt;</code>
      <span> components</span>
    </b-card-text>

    <!-- toolbar -->
    <b-button-toolbar>

      <!-- group  1 -->
      <b-button-group
        size="lg"
      >
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          First
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Second
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Third
        </b-button>
      </b-button-group>

    </b-button-toolbar>

    <!-- toolbar -->
    <b-button-toolbar>
      <b-button-group
        class="my-1"
      >
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          First
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Second
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Third
        </b-button>
      </b-button-group>
    </b-button-toolbar>

    <!-- toolbar -->
    <b-button-toolbar>
      <b-button-group
        size="sm"
      >
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          First
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Second
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Third
        </b-button>
      </b-button-group>
    </b-button-toolbar>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButtonToolbar, BButtonGroup, BButton, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import Ripple from 'vue-ripple-directive'
import { codeSize } from './code'

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
      codeSize,
    }
  },
}
</script>
