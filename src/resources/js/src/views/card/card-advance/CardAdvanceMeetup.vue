<template>
  <b-card
    no-body
    class="card-developer-meetup"
  >
    <div class="bg-light-primary rounded-top text-center">
      <b-img
        :src="require('@/assets/images/illustration/email.svg')"
        alt="Meeting Pic"
        height="170"
      />
    </div>
    <b-card-body>
      <!-- metting header -->
      <div class="meetup-header d-flex align-items-center">
        <div class="meetup-day">
          <h6 class="mb-0">
            THU
          </h6>
          <h3 class="mb-0">
            24
          </h3>
        </div>
        <div class="my-auto">
          <b-card-title class="mb-25">
            Developer Meetup
          </b-card-title>
          <b-card-text class="mb-0">
            Meet world popular developers
          </b-card-text>
        </div>
      </div>
      <!--/ metting header -->

      <!-- media -->
      <b-media
        v-for="media in mediaData"
        :key="media.avatar"
        no-body
      >
        <b-media-aside class="mr-1">
          <b-avatar
            rounded
            variant="light-primary"
            size="34"
          >
            <feather-icon
              :icon="media.avatar"
              size="18"
            />
          </b-avatar>
        </b-media-aside>
        <b-media-body>
          <h6 class="mb-0">
            {{ media.title }}
          </h6>
          <small>{{ media.subtitle }}</small>
        </b-media-body>
      </b-media>

      <!-- avatar group -->
      <b-avatar-group
        class="mt-2 pt-50"
        size="33"
      >
        <b-avatar
          v-for="avatar in avatars"
          :key="avatar.avatar"
          v-b-tooltip.hover.bottom="avatar.fullName"
          :src="avatar.avatar"
          class="pull-up"
        />
        <h6 class="align-self-center cursor-pointer ml-1 mb-0">
          +42
        </h6>
      </b-avatar-group>

    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BImg, BCardBody, BCardText, BCardTitle, BMedia, BMediaAside, BAvatar, BAvatarGroup, VBTooltip, BMediaBody,
} from 'bootstrap-vue'
/* eslint-disable global-require */
export default {
  components: {
    BCard,
    BImg,
    BCardBody,
    BCardText,
    BCardTitle,
    BMedia,
    BMediaAside,
    BAvatar,
    BAvatarGroup,
    BMediaBody,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
      mediaData: [
        { avatar: 'CalendarIcon', title: 'Sat, May 25, 2020', subtitle: '10:AM to 6:PM' },
        { avatar: 'MapPinIcon', title: 'Central Park', subtitle: 'Manhattan, New york City' },
      ],
      avatars: [
        { avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'), fullName: 'Billy Hopkins' },
        { avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'), fullName: 'Amy Carson' },
        { avatar: require('@/assets/images/portrait/small/avatar-s-8.jpg'), fullName: 'Brandon Miles' },
        { avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg'), fullName: 'Daisy Weber' },
        { avatar: require('@/assets/images/portrait/small/avatar-s-20.jpg'), fullName: 'Jenny Looper' },
      ],
    }
  },
}
</script>
