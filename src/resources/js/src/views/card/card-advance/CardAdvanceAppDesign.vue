<template>
  <b-card class="card-app-design">
    <b-badge variant="light-primary">
      03 Sep, 20
    </b-badge>
    <b-card-title class="mt-1 mb-75">
      App design
    </b-card-title>
    <b-card-text class="font-small-2 mb-2">
      You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design
    </b-card-text>

    <!-- design group -->
    <div class="design-group">
      <h6 class="section-label">
        Team
      </h6>
      <b-badge
        variant="light-warning"
        class="mr-1"
      >
        Figma
      </b-badge>
      <b-badge
        variant="light-primary"
        class="ml-25"
      >
        Wireframe
      </b-badge>
    </div>
    <div class="design-group">
      <h6 class="section-label">
        Members
      </h6>
      <b-avatar
        :src="require('@/assets/images/portrait/small/avatar-s-9.jpg')"
        size="34"
        class="mr-1"
      />
      <b-avatar
        text="PI"
        size="32"
        variant="light-danger"
        class="mr-1"
      />
      <b-avatar
        :src="require('@/assets/images/portrait/small/avatar-s-14.jpg')"
        size="34"
        class="mr-1"
      />
      <b-avatar
        :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
        size="34"
        class="mr-1"
      />
      <b-avatar
        text="AL"
        size="32"
        variant="light-secondary"
        class="mr-1"
      />
    </div>
    <!--/ design group -->

    <div class="design-planning-wrapper">
      <div class="design-planning">
        <p class="card-text mb-25">
          Due Date
        </p>
        <h6 class="mb-0">
          12 Apr, 21
        </h6>
      </div>
      <div class="design-planning">
        <p class="card-text mb-25">
          Budget
        </p>
        <h6 class="mb-0">
          $49251.91
        </h6>
      </div>
      <div class="design-planning">
        <p class="card-text mb-25">
          Cost
        </p>
        <h6 class="mb-0">
          $840.99
        </h6>
      </div>
    </div>

    <!-- button -->
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      block
    >
      Join Team
    </b-button>
  </b-card>
</template>

<script>
import {
  BCard, BBadge, BCardTitle, BCardText, BAvatar, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BBadge,
    BButton,
    BAvatar,
    BCardTitle,
    BCardText,
  },
  directives: {
    Ripple,
  },
}
</script>
