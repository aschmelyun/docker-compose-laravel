<template>
  <b-card
    v-if="data"
    class="card-app-design"
  >
    <b-badge variant="light-primary">
      {{ data.date }}
    </b-badge>
    <b-card-title class="mt-1 mb-75">
      {{ data.title }}
    </b-card-title>
    <b-card-text class="font-small-2 mb-2">
      {{ data.subtitle }}
    </b-card-text>

    <!-- design group -->
    <div class="design-group">
      <h6 class="section-label">
        Team
      </h6>
      <b-badge
        v-for="team in data.teams"
        :key="team.color"
        :variant="team.color"
        class="mr-1"
      >
        {{ team.name }}
      </b-badge>
    </div>
    <div class="design-group">
      <h6 class="section-label">
        Members
      </h6>
      <b-avatar
        v-for="(member,index) in data.members"
        :key="index"
        :variant="member.color"
        :text="member.text"
        :src="member.img"
        size="34"
        class="mr-1"
      />
    </div>
    <!--/ design group -->

    <div class="design-planning-wrapper">
      <div
        v-for="plan in data.planing"
        :key="plan.title"
        class="design-planning"
      >
        <p class="card-text mb-25">
          {{ plan.title }}
        </p>
        <h6 class="mb-0">
          {{ plan.subtitle }}
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
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
