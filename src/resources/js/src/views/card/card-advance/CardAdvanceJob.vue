<template>
  <b-card
    no-body
    class="card-apply-job"
  >
    <b-card-header class="pb-1">
      <b-media no-body>
        <b-media-aside class="mr-1">
          <b-avatar
            size="42"
            :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
          />
        </b-media-aside>
        <b-media-body>
          <h5 class="mb-0">
            Mittie Evans
          </h5>
          <small class="text-muted">Updated 12m ago</small>
        </b-media-body>
      </b-media>
      <b-badge
        pill
        variant="light-primary"
      >
        Design
      </b-badge>
    </b-card-header>
    <b-card-body>
      <h5 class="apply-job-title">
        Need a designer to form branding essentials for my business.
      </h5>
      <b-card-text class="mb-2">
        Design high-quality designs, graphics, mock-ups and layouts for both new and existing web sites/ web
        applications / mobile applications.
      </b-card-text>

      <!-- payment  -->
      <div class="apply-job-package bg-light-primary rounded">
        <div>
          <sup class="text-body">
            <small>$</small>
          </sup>
          <h2 class="d-inline mr-25">
            9,800
          </h2>
          <sub class="text-body"><small>/ month</small></sub>
        </div>
        <b-badge
          variant="light-primary"
          pill
        >
          Full Time
        </b-badge>
      </div>
      <!--/ payment  -->
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        block
        variant="primary"
      >
        Apply For This Job
      </b-button>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BMedia, BMediaAside, BAvatar, BMediaBody, BBadge, BCardText, BCardBody, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BButton,
    BBadge,
    BCardHeader,
    BMedia,
    BMediaAside,
    BAvatar,
    BMediaBody,
    BCardText,
    BCardBody,
  },
  directives: {
    Ripple,
  },
}
</script>
