<template>
  <b-card
    :img-src="require('@/assets/images/banner/banner-12.jpg')"
    img-alt="Profile Cover Photo"
    img-top
    class="card-profile"
  >
    <div class="profile-image-wrapper">
      <div class="profile-image p-0">
        <b-avatar
          size="114"
          variant="light"
          :src="require('@/assets/images/portrait/small/avatar-s-9.jpg')"
        />
      </div>
    </div>
    <h3>Curtis Stone</h3>
    <h6 class="text-muted">
      Malaysia
    </h6>
    <b-badge
      class="profile-badge"
      variant="light-primary"
    >
      Pro Level
    </b-badge>
    <hr class="mb-2">

    <!-- follower projects rank -->
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h6 class="text-muted font-weight-bolder">
          Followers
        </h6>
        <h3 class="mb-0">
          10.3k
        </h3>
      </div>
      <div>
        <h6 class="text-muted font-weight-bolder">
          Projects
        </h6>
        <h3 class="mb-0">
          156
        </h3>
      </div>
      <div>
        <h6 class="text-muted font-weight-bolder">
          Rank
        </h6>
        <h3 class="mb-0">
          23
        </h3>
      </div>
    </div>
    <!--/ follower projects rank -->
  </b-card>
</template>

<script>
import { BCard, BAvatar, BBadge } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BBadge,
    BAvatar,
  },
}
</script>
