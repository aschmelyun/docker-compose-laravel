<template>
  <b-card-code title="Icon">
    <b-card-text class="mb-0">
      You can add icon with buttons.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        <feather-icon
          icon="HomeIcon"
          class="mr-50"
        />
        <span class="align-middle">Home</span>
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="warning"
      >
        <feather-icon
          icon="StarIcon"
          class="mr-50"
        />
        <span class="align-middle">Star</span>
      </b-button>
      <b-button
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        variant="flat-success"
      >
        <feather-icon
          icon="CheckIcon"
          class="mr-50"
        />
        <span class="align-middle">Done</span>
      </b-button>
      <b-button
        variant="gradient-danger"
      >
        <feather-icon
          icon="HeartIcon"
          class="mr-50"
        />
        <span class="align-middle">Favorite</span>
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        disabled
      >
        <feather-icon
          icon="HomeIcon"
          class="mr-50"
        />
        <span class="align-middle">Disabled</span>
      </b-button>
    </div>

    <template #code>
      {{ codeIcon }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeIcon } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() { return { codeIcon } },
}
</script>
