<template>
  <b-card no-body>
    <b-card-header
      v-if="message.from"
      class="email-detail-head"
    >
      <div class="user-details d-flex justify-content-between align-items-center flex-wrap">
        <b-avatar
          size="48"
          :src="message.from.avatar"
          class="mr-75"
        />
        <div class="mail-items">
          <h5 class="mb-0">
            {{ message.from.name }}
          </h5>
          <b-dropdown
            variant="link"
            no-caret
            toggle-class="p-0"
            class="email-info-dropup"
          >
            <template #button-content>
              <span class="font-small-3 text-muted mr-25">{{ message.from.email }}</span>
              <feather-icon
                icon="ChevronDownIcon"
                size="10"
              />
            </template>
            <table class="table table-sm table-borderless font-small-3">
              <tbody>
                <tr>
                  <td class="text-right text-muted align-top">
                    From:
                  </td>
                  <td>{{ message.from.email }}</td>
                </tr>
                <tr>
                  <td class="text-right text-muted align-top">
                    To:
                  </td>
                  <td>{{ message.to.map(receiver => receiver.email).join(', ') }}</td>
                </tr>
                <tr>
                  <td class="text-right text-muted align-top">
                    Date:
                  </td>
                  <td>4:25 AM 13 Jan 2018</td>
                </tr>
              </tbody>
            </table>
          </b-dropdown>
        </div>
      </div>
      <div class="mail-meta-item d-flex align-items-center">
        <small class="mail-date-time text-muted">{{ formatDate(message.time) }}</small>
        <!-- Mail Action DD -->
        <b-dropdown
          variant="link"
          no-caret
          toggle-class="p-0"
          right
        >
          <template #button-content>
            <feather-icon
              icon="MoreVerticalIcon"
              size="17"
              class="ml-50 text-body"
            />
          </template>

          <b-dropdown-item>
            <feather-icon icon="CornerUpLeftIcon" />
            <span class="align-middle ml-50">Reply</span>
          </b-dropdown-item>

          <b-dropdown-item>
            <feather-icon icon="CornerUpRightIcon" />
            <span class="align-middle ml-50">Forward</span>
          </b-dropdown-item>

          <b-dropdown-item>
            <feather-icon icon="TrashIcon" />
            <span class="align-middle ml-50">Delete</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </b-card-header>

    <b-card-body class="mail-message-wrapper pt-2">
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="mail-message"
        v-html="message.message"
      />
      <!-- eslint-enable -->
    </b-card-body>

    <b-card-footer v-if="message.attachments && message.attachments.length">
      <div class="mail-attachments">
        <div class="d-flex align-items-center mb-1">
          <feather-icon
            icon="PaperclipIcon"
            size="16"
          />
          <h5 class="font-weight-bolder text-body mb-0 ml-50">
            {{ message.attachments.length }} Attachment{{ message.attachments.length > 1 ? 's' : '' }}
          </h5>
        </div>

        <div class="d-flex flex-column">
          <b-link
            v-for="(attachment, index) in message.attachments"
            :key="index"
            :href="attachment.url"
            target="_blank"
            :class="{'mt-75': index}"
          >
            <b-img
              :src="attachment.thumbnail"
              width="16px"
              class="mr-50"
            />
            <span class="text-muted font-weight-bolder align-text-top">{{ attachment.fileName }}</span>
            <span class="text-muted font-small-2 ml-25">({{ attachment.size }})</span>
          </b-link>
        </div>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script>
import {
  BDropdown, BDropdownItem, BCard, BCardHeader, BCardBody, BCardFooter, BAvatar, BLink, BImg,
} from 'bootstrap-vue'
import { formatDate } from '@core/utils/filter'

export default {
  components: {
    BDropdown, BDropdownItem, BCard, BCardHeader, BCardBody, BCardFooter, BAvatar, BLink, BImg,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      formatDate,
    }
  },
}
</script>

<style>

</style>
