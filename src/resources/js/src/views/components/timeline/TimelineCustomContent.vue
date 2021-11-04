<template>
  <b-card-code title="Custom Content">
    <app-timeline>

      <!-- 12 INVOICES HAVE BEEN PAID -->
      <app-timeline-item>
        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>12 Invoices have been paid</h6>
          <small class="text-muted">12 min ago</small>
        </div>
        <p>Invoices have been paid to the company.</p>
        <p>
          <b-img
            :src="require('@/assets/images/icons/pdf.png')"
            height="auto"
            width="20"
            class="mr-1"
          />
          <span class="align-bottom">invoice.pdf</span>
        </p>
      </app-timeline-item>

      <app-timeline-item variant="secondary">

        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>Client Meeting</h6>
          <small class="text-muted">45 min ago</small>
        </div>
        <p>Project meeting with john @10:15am.</p>
        <b-media>
          <template #aside>
            <b-avatar :src="require('@/assets/images/avatars/12-small.png')" />
          </template>
          <h6>John Doe (Client)</h6>
          <p>CEO of Infibeam</p>
        </b-media>
      </app-timeline-item>

      <!-- FINANCIAL REPORT -->
      <app-timeline-item variant="success">

        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>Financial Report</h6>
          <small class="text-muted">2 hours ago</small>
        </div>
        <p>Click the button below to read financial reports</p>
        <b-button
          v-b-toggle.report-list
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          size="sm"
          variant="outline-primary"
        >
          Show Report
        </b-button>
        <b-collapse id="report-list">
          <b-list-group
            flush
            class="mt-1"
          >
            <b-list-group-item
              href="#"
              class="d-flex justify-content-between align-items-center bg-transparent"
            >
              <span>Last Year's Profit: $20,000</span>
              <feather-icon icon="Share2Icon" />
            </b-list-group-item>
            <b-list-group-item
              href="#"
              class="d-flex justify-content-between align-items-center bg-transparent"
            >
              <span>This Year's Profit: $25,000</span>
              <feather-icon icon="Share2Icon" />
            </b-list-group-item>
            <b-list-group-item
              href="#"
              class="d-flex justify-content-between align-items-center bg-transparent"
            >
              <span>Last Year's Commision: $5,000</span>
              <feather-icon icon="Share2Icon" />
            </b-list-group-item>
            <b-list-group-item
              href="#"
              class="d-flex justify-content-between align-items-center bg-transparent"
            >
              <span>This Year's Commision: $7,000</span>
              <feather-icon icon="Share2Icon" />
            </b-list-group-item>
            <b-list-group-item
              href="#"
              class="d-flex justify-content-between align-items-center bg-transparent"
            >
              <span>This Year's Total Balance: $70,000</span>
              <feather-icon icon="Share2Icon" />
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </app-timeline-item>

      <!-- INTERVIEW SCHEDULE -->
      <app-timeline-item variant="warning">
        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>Interview Schedule</h6>
          <small class="text-muted">03:00 PM</small>
        </div>
        <p>Have to interview Katy Turner for the developer job.</p>
        <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">
          <b-media>
            <template #aside>
              <b-avatar :src="require('@/assets/images/avatars/1-small.png')" />
            </template>
            <h6>Katy Turner</h6>
            <span class="text-muted">Javascript Developer</span>
          </b-media>
          <div>
            <feather-icon
              icon="MessageSquareIcon"
              class="mr-1"
            />
            <feather-icon icon="PhoneCallIcon" />
          </div>
        </div>
      </app-timeline-item>

      <!-- ONLINE STORE -->
      <app-timeline-item variant="danger">

        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>Online Store</h6>
          <small class="text-muted">03:00 PM</small>
        </div>
        <p>Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.</p>
        <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">
          <!-- 1st Col -->
          <div class="mb-1 mb-sm-0">
            <span class="text-muted mb-50">Developers</span>

            <div>
              <b-avatar
                text="A"
                class="mr-50"
                size="24"
                variant="light-primary"
              />
              <b-avatar
                text="B"
                class="mr-50"
                size="24"
                variant="light-success"
              />
              <b-avatar
                text="C"
                class="mr-50"
                size="24"
                variant="light-danger"
              />
            </div>
          </div>
          <!-- 2nd Col -->
          <div class="mb-1 mb-sm-0">
            <span class="text-muted mb-50 d-block">Deadline</span>
            <span>20 Dec 2077</span>
          </div>
          <!-- 3rd Col -->
          <div>
            <span class="text-muted mb-50 d-block">Budget</span>
            <span>$50,000</span>
          </div>
        </div>
      </app-timeline-item>

      <!-- DESIGNING UI -->
      <app-timeline-item variant="info">

        <div class="d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50">
          <h6>Designing UI</h6>
          <b-badge
            pill
            variant="light-primary"
          >
            Design
          </b-badge>
        </div>
        <p>Our main goal is to design a new mobile application for our client. The customer wants a clean &amp; flat design.</p>
        <div>
          <span class="text-muted">
            Participants
          </span>
          <b-avatar-group
            size="32px"
            class="mt-50"
          >
            <b-avatar
              v-b-tooltip.hover
              class="pull-up"
              title="Jenny Looper"
              :src="require('@/assets/images/portrait/small/avatar-s-5.jpg')"
            />
            <b-avatar
              v-b-tooltip.hover
              class="pull-up"
              title="Jennifer Lopez"
              :src="require('@/assets/images/portrait/small/avatar-s-6.jpg')"
            />
            <b-avatar
              v-b-tooltip.hover
              class="pull-up"
              title="Arya Stark"
              :src="require('@/assets/images/portrait/small/avatar-s-7.jpg')"
            />
          </b-avatar-group>
        </div>
      </app-timeline-item>
    </app-timeline>

    <template #code>
      {{ codeCustomContent }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BImg, BAvatar, BMedia, BButton, BCollapse, VBToggle, BListGroup, BListGroupItem, BAvatarGroup, BBadge, VBTooltip,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import Ripple from 'vue-ripple-directive'
import { codeCustomContent } from './code'

export default {
  components: {
    AppTimeline,
    AppTimelineItem,
    BCardCode,
    BImg,
    BMedia,
    BAvatar,
    BButton,
    BCollapse,
    BListGroup,
    BListGroupItem,
    BAvatarGroup,
    BBadge,
  },
  directives: { 'b-toggle': VBToggle, 'b-tooltip': VBTooltip, Ripple },
  data() {
    return {
      codeCustomContent,
    }
  },
}
</script>
