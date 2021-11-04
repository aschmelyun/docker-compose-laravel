<template>
  <b-card-code title="Popover Variant">
    <b-card-text class="mb-0">
      <span>BootstrapVue's popovers support contextual color variants via our custom CSS, via the</span>
      <code>variant</code>
      <span> prop:</span>
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- default -->
      <b-button
        id="popover-button-default"
        variant="gradient-primary"
      >
        Default
      </b-button>

      <b-popover
        target="popover-button-default"
        triggers="focus"
        placement="top"
      >
        <template #title>
          <span>Default!</span>
        </template>
        <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
      </b-popover>

      <!-- primary -->
      <b-button
        id="popover-button-variant"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Primary
      </b-button>

      <b-popover
        target="popover-button-variant"
        variant="primary"
        triggers="focus"
        placement="top"
      >
        <template #title>
          <span>Primary!</span>
        </template>
        <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
      </b-popover>

      <!-- secondary -->
      <b-button
        id="popover-button-secondary"
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        variant="outline-secondary"
      >
        Secondary
      </b-button>

      <b-popover
        target="popover-button-secondary"
        variant="secondary"
        triggers="focus"
        placement="top"
      >
        <template #title>
          <span>Secondary!</span>
        </template>
        <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
      </b-popover>

      <!-- success -->
      <b-button
        id="popover-button-success"
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        variant="outline-success"
      >
        Success
      </b-button>

      <b-popover
        target="popover-button-success"
        variant="success"
        triggers="focus"
        placement="top"
      >
        <template #title>
          <span>Success!</span>
        </template>
        <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
      </b-popover>

      <!-- danger -->
      <b-button
        id="popover-button-danger"
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        variant="outline-danger"
      >
        Danger
      </b-button>

      <b-popover
        target="popover-button-danger"
        variant="danger"
        triggers="focus"
        placement="top"
      >
        <template #title>
          <span>Danger!</span>
        </template>
        <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
      </b-popover>

      <!-- warning -->
      <b-button
        id="popover-button-warning"
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        variant="outline-warning"
      >
        Warning
      </b-button>

      <b-popover
        target="popover-button-warning"
        variant="warning"
        triggers="focus"
        placement="top"
      >
        <template #title>
          <span>Warning!</span>
        </template>
        <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
      </b-popover>

      <!-- info -->
      <b-button
        id="popover-button-info"
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        variant="outline-info"
      >
        Info
      </b-button>

      <b-popover
        target="popover-button-info"
        variant="info"
        triggers="focus"
        placement="top"
      >
        <template #title>
          <span>Info!</span>
        </template>
        <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
      </b-popover>

      <!-- info -->
      <b-button
        id="popover-button-dark"
        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
        variant="outline-dark"
      >
        Dark
      </b-button>

      <b-popover
        target="popover-button-dark"
        variant="dark"
        triggers="focus"
        placement="top"
      >
        <template #title>
          <span>Info!</span>
        </template>
        <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
      </b-popover>
    </div>

    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BButton, VBPopover, BPopover, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeVariant } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BPopover,
  },
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
  data() {
    return {
      codeVariant,
    }
  },
}
</script>
