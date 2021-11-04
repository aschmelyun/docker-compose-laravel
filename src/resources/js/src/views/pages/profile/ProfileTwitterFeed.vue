<template>
  <b-card>
    <h5>Twitter Feeds</h5>

    <!-- twitter feed -->
    <div
      v-for="(data,index) in twitterFeed"
      :key="data.avatar"
      class="profile-twitter-feed"
      :class="index != 0 ? 'mt-2' : 'mt-1'"
    >
      <div class="d-flex justify-content-start align-items-center mb-1">
        <b-avatar
          size="40"
          :src="data.imgUrl"
          class="mr-1"
        />
        <div class="profile-user-info">
          <h6 class="mb-0">
            {{ data.title }}
          </h6>
          <b-link>
            <small class="text-muted">@{{ data.id }}</small>
            <feather-icon icon="CheckCircleIcon" />
          </b-link>
        </div>
        <div class="profile-star ml-auto">
          <feather-icon
            icon="StarIcon"
            size="18"
            :class="data.favorite ? 'profile-favorite':''"
          />
        </div>
      </div>
      <b-card-text class="mb-50">
        {{ data.desc }}
      </b-card-text>
      <b-link>
        <small>
          {{ data.tags }}
        </small>
      </b-link>
    </div>
    <!-- twitter feed -->
  </b-card>
</template>

<script>
import {
  BCard, BAvatar, BLink, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BAvatar, BLink, BCardText,
  },
  props: {
    twitterFeed: {
      type: Array,
      default: () => {},
    },
  },
}
</script>
