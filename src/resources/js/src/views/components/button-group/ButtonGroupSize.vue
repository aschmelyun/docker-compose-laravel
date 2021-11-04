<template>
  <b-card-code title="Size">
    <b-card-text>
      <span>Set the size prop to </span>
      <code>lg</code>
      <span> or </span>
      <code>sm</code>
      <span> to render larger or smaller, respectively, buttons. There is no need to specify the size on the individual buttons.</span>
    </b-card-text>

    <div>
      <!-- large -->
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
    </div>
    <div>

      <!-- default -->
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
    </div>

    <div>

      <!-- size -->
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
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import { BButtonGroup, BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeSize } from './code'

export default {
  components: {
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
