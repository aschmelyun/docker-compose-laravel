<template>
  <b-card
    v-if="data"
    no-body
  >
    <b-card-header>
      <b-card-title class="ml-25">
        User Timeline
      </b-card-title>
    </b-card-header>

    <!-- timeline -->
    <b-card-body>
      <app-timeline>
        <app-timeline-item variant="primary">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>{{ data.step1.title }}</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">{{ data.step1.duration }}</small>
          </div>
          <p>{{ data.step1.subtitle }}</p>
          <b-media no-body>
            <b-media-aside class="mr-1">
              <b-img
                :src="data.step1.img"
                height="23"
                :alt="data.step1.fileName "
              />
            </b-media-aside>
            <b-media-body class="my-auto">
              <h6 class="media-body mb-0">
                {{ data.step1.fileName }}
              </h6>
            </b-media-body>
          </b-media>
        </app-timeline-item>

        <app-timeline-item variant="warning">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>{{ data.step2.title }}</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">{{ data.step2.duration }}</small>
          </div>
          <p>{{ data.step2.subtitle }}</p>
          <b-media no-body>
            <b-media-aside class="mr-50">
              <b-avatar
                :src="data.step2.avatar"
                size="38"
              />
            </b-media-aside>
            <b-media-body class="my-auto">
              <h6 class="mb-0">
                {{ data.step2.avatarName }}
              </h6>
              <p class="mb-0">
                {{ data.step2.occupation }}
              </p>
            </b-media-body>
          </b-media>
        </app-timeline-item>

        <app-timeline-item variant="info">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>{{ data.step3.title }}</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">{{ data.step3.duration }}</small>
          </div>
          <p>{{ data.step3.subtitle }}</p>
          <b-avatar-group size="35px">
            <b-avatar
              v-for="avatar in data.step3.avatars"
              :key="avatar.userImg"
              v-b-tooltip.hover.top="'Tooltip!'"
              :src="avatar.userImg"
              class="pull-up"
            />
          </b-avatar-group>
        </app-timeline-item>

        <app-timeline-item
          :title="data.step4.title"
          :subtitle="data.step4.subtitle"
          :time="data.step4.duration"
          variant="danger"
        />
      </app-timeline>
      <!--/ timeline -->
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCardTitle, BImg, BMedia, BMediaBody, BMediaAside, BAvatar, BAvatarGroup, VBTooltip,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
/* eslint-disable global-require */
export default {
  components: {
    BCard,
    BImg,
    BCardBody,
    BCardHeader,
    BCardTitle,
    AppTimeline,
    AppTimelineItem,
    BMedia,
    BAvatar,
    BMediaBody,
    BMediaAside,
    BAvatarGroup,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
