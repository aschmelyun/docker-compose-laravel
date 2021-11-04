<template>
  <b-card>
    <h5>Suggestions</h5>

    <!-- user suggestion  -->
    <div
      v-for="(data,index) in suggestions"
      :key="data.avatar"
      class="d-flex justify-content-start align-items-center"
      :class="index == 0 ? 'mt-2' : 'mt-1'"
    >
      <b-avatar
        :src="data.avatar"
        class="mr-50"
        size="40"
      />
      <div class="user-page-info">
        <h6 class="mb-0">
          {{ data.name }}
        </h6>
        <small class="text-muted">{{ data.mutualFriend }}</small>
      </div>
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        variant="primary"
        class="btn-icon ml-auto"
        size="sm"
      >
        <feather-icon icon="UserPlusIcon" />
      </b-button>
    </div>
    <!--/ user suggestion  -->
  </b-card>
</template>

<script>
import {
  BCard, BAvatar, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BAvatar,
    BButton,
  },
  directives: {
    Ripple,
  },
  props: {
    suggestions: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
