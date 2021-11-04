<template>
  <div
    v-if="Object.keys(profileData).length"
    id="user-profile"
  >
    <profile-header :header-data="profileData.header" />
    <!-- profile info  -->
    <section id="profile-info">
      <b-row>
        <!-- about suggested page and twitter feed -->
        <b-col
          lg="3"
          cols="12"
          order="2"
          order-lg="1"
        >
          <profile-about :about-data="profileData.userAbout" />
          <profile-suggested-pages :pages-data="profileData.suggestedPages" />
          <profile-twitter-feed :twitter-feed="profileData.twitterFeeds" />
        </b-col>
        <!--/ about suggested page and twitter feed -->

        <!-- post -->
        <b-col
          lg="6"
          cols="12"
          order="1"
          order-lg="2"
        >
          <profile-post :posts="profileData.post" />
        </b-col>
        <!-- post -->

        <!-- latest photos suggestion and polls -->
        <b-col
          lg="3"
          cols="12"
          order="3"
        >
          <profile-latest-photos :latest-images="profileData.latestPhotos" />
          <profile-suggestion :suggestions="profileData.suggestions" />
          <profile-polls :polls-data="profileData.polls" />
        </b-col>
        <!--/ latest photos suggestion and polls -->

        <!-- load more  -->
        <b-col
          cols="12"
          order="4"
        >
          <profile-bottom />
        </b-col>
        <!--/ load more  -->
      </b-row>
    </section>
    <!--/ profile info  -->
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import ProfileHeader from './ProfileHeader.vue'
import ProfileAbout from './ProfileAbout.vue'
import ProfileSuggestedPages from './ProfileSuggestedPages.vue'
import ProfileTwitterFeed from './ProfileTwitterFeed.vue'
import ProfilePost from './ProfilePost.vue'
import ProfileLatestPhotos from './ProfileLatestPhotos.vue'
import ProfileSuggestion from './ProfileSuggestion.vue'
import ProfilePolls from './ProfilePolls.vue'
import profileBottom from './profileBottom.vue'

/* eslint-disable global-require */
export default {
  components: {
    BRow,
    BCol,

    ProfileHeader,
    ProfileAbout,
    ProfileSuggestedPages,
    ProfileTwitterFeed,
    ProfilePost,
    ProfileLatestPhotos,
    ProfileSuggestion,
    ProfilePolls,
    profileBottom,
  },
  data() {
    return {
      profileData: {},
    }
  },
  created() {
    this.$http.get('/profile/data').then(res => {
      this.profileData = res.data
    })
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss" >
@import '~@core/scss/vue/pages/page-profile.scss';
</style>
