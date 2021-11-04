<template>
  <div>
    <b-card-code title="Icon Only">
      <b-card-text class="mb-0">
        You can only use .btn-icon when you only want icon in your button
      </b-card-text>

      <div class="demo-inline-spacing">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="warning"
          class="btn-icon"
        >
          <feather-icon icon="ArchiveIcon" />
        </b-button>

        <b-button
          variant="gradient-danger"
          class="btn-icon"
        >
          <feather-icon icon="UserPlusIcon" />
        </b-button>

        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="warning"
          class="btn-icon rounded-circle"
        >
          <feather-icon icon="ArchiveIcon" />
        </b-button>

        <b-button
          variant="gradient-danger"
          class="btn-icon rounded-circle"
        >
          <feather-icon icon="UserPlusIcon" />
        </b-button>

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          class="btn-icon"
        >
          <feather-icon icon="SearchIcon" />
        </b-button>

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          class="btn-icon"
          disabled
        >
          <feather-icon icon="SearchIcon" />
        </b-button>

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          class="btn-icon rounded-circle"
        >
          <feather-icon icon="SearchIcon" />
        </b-button>

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          class="btn-icon rounded-circle"
          disabled
        >
          <feather-icon icon="SearchIcon" />
        </b-button>

        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          variant="flat-success"
          class="btn-icon rounded-circle"
        >
          <feather-icon icon="CameraIcon" />
        </b-button>

        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          variant="flat-success"
          class="btn-icon"
        >
          <feather-icon icon="CameraIcon" />
        </b-button>
      </div>

      <template #code>
        {{ codeButtonIconOnly }}
      </template>
    </b-card-code>
  </div>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeButtonIconOnly } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() { return { codeButtonIconOnly } },
}
</script>
