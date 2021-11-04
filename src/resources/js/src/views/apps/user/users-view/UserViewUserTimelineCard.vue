<template>
  <b-card title="User Timeline">
    <app-timeline>

      <!-- 12 INVOICES HAVE BEEN PAID -->
      <app-timeline-item>
        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>12 Invoices have been paid</h6>
          <small class="text-muted">12 min ago</small>
        </div>
        <p>Invoices have been paid to the company.</p>
        <p class="mb-0">
          <b-img
            :src="require('@/assets/images/icons/pdf.png')"
            height="auto"
            width="20"
            class="mr-1"
          />
          <span class="align-bottom">invoice.pdf</span>
        </p>
      </app-timeline-item>
      <app-timeline-item variant="warning">

        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>Client Meeting</h6>
          <small class="text-muted">45 min ago</small>
        </div>
        <p>Project meeting with john @10:15am.</p>
        <b-media>
          <template #aside>
            <b-avatar :src="require('@/assets/images/avatars/8-small.png')" />
          </template>
          <h6>John Doe (Client)</h6>
          <p class="mb-0">
            CEO of Infibeam
          </p>
        </b-media>
      </app-timeline-item>
      <app-timeline-item
        variant="info"
        title="Create a new project for client"
        subtitle="Add files to new design folder"
        time="2 days ago"
      />
    </app-timeline>
  </b-card>
</template>

<script>
import {
  BCard, BImg, BMedia, BAvatar,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'

export default {
  components: {
    BCard,
    BImg,
    BMedia,
    BAvatar,
    AppTimeline,
    AppTimelineItem,
  },
}
</script>

<style>

</style>
