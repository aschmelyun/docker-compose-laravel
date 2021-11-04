<template>
  <div>
    <b-card
      v-for="(data) in posts"
      :key="data.avatar"
    >
      <div
        class="d-flex justify-content-start align-items-center mb-1"
      >
        <!-- avatar -->
        <b-avatar
          :src="data.avatar"
          size="50"
          class="mr-1"
        />
        <!--/ avatar -->
        <div class="profile-user-info">
          <h6 class="mb-0">
            {{ data.username }}
          </h6>
          <small class="text-muted">{{ data.postTime }}</small>
        </div>
      </div>
      <b-card-text>
        {{ data.postText }}
      </b-card-text>

      <!-- post img -->
      <b-img
        v-if="data.postImg"
        fluid
        rounded
        class="mb-25"
        :src="data.postImg"
      />
      <!--/ post img -->
      <!-- post video -->
      <b-embed
        v-if="data.postVid"
        type="iframe"
        :src="data.postVid"
        allowfullscreen
        class="rounded mb-50"
      />
      <!--/ post video -->

      <!-- likes comments  share-->
      <b-row class="pb-50 mt-50">
        <b-col
          sm="8"
          class="d-flex justify-content-between justify-content-sm-start mb-2"
        >
          <b-link class="d-flex align-items-center text-muted text-nowrap">
            <feather-icon
              icon="HeartIcon"
              class="mr-50"
              :class="data.youLiked ? 'profile-likes':'profile-icon'"
              size="18"
            />
            <span>{{ kFormatter(data.likes) }}</span>
          </b-link>
          <div class="d-flex align-item-center">
            <b-avatar-group
              size="26"
              class="ml-1"
            >
              <b-avatar
                v-for="(avatarData,i) in data.likedUsers"
                :key="i"
                v-b-tooltip.hover.bottom="avatarData.username"
                class="pull-up"
                :src="avatarData.avatar"
              />
            </b-avatar-group>
            <b-link class="text-muted text-nowrap mt-50 ml-50">
              +{{ data.likedCount }} more
            </b-link>
          </div>
        </b-col>
        <b-col
          sm="4"
          class="d-flex justify-content-between justify-content-sm-end align-items-center mb-2"
        >
          <b-link class="text-body text-nowrap">
            <feather-icon
              icon="MessageSquareIcon"
              size="18"
              class="profile-icon mr-50"
            />
            <span class="text-muted mr-1">{{ kFormatter(data.comments) }}</span>
          </b-link>
          <b-link class="text-body text-nowrap">
            <feather-icon
              icon="Share2Icon"
              size="18"
              class="profile-icon mr-50"
            />
            <span class="text-muted">{{ kFormatter(data.share) }}</span>
          </b-link>
        </b-col>
      </b-row>
      <!--/ likes comments  share-->

      <!-- comments -->
      <div
        v-for="(comment,ind) in data.detailedComments"
        :key="ind"
        class="d-flex align-items-start mb-1"
      >
        <b-avatar
          :src="comment.avatar"
          size="34"
          class="mt-25 mr-75"
        />
        <div class="profile-user-info w-100">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="mb-0">
              {{ comment.username }}
            </h6>
            <b-link class="text-body">
              <feather-icon
                icon="HeartIcon"
                size="18"
                class="mr-25"
                :class="comment.youLiked ? 'profile-likes' :'profile-icon'"
              />
              <span class="text-muted align-middle">{{ comment.commentsLikes }}</span>
            </b-link>
          </div>
          <small>{{ comment.comment }}</small>
        </div>
      </div>
      <!--/ comments -->

      <!-- comment box -->
      <b-form-group>
        <b-form-textarea
          rows="3"
          placeholder="Add Comment"
        />
      </b-form-group>
      <!--/ comment box -->

      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        size="sm"
        variant="primary"
      >
        Post Comment
      </b-button>
    </b-card>
  </div>
</template>

<script>
import {
  BAvatar, BCard, BCardText, BImg, BLink, BRow, BCol, BAvatarGroup, VBTooltip, BFormTextarea, BButton, BFormGroup, BEmbed,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    BAvatar,
    BCard,
    BCardText,
    BButton,
    BFormTextarea,
    BImg,
    BFormGroup,
    BRow,
    BLink,
    BCol,
    BAvatarGroup,
    BEmbed,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    kFormatter,
  },
}
</script>
