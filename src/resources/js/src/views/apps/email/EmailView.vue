<template>
  <div class="email-app-details">

    <!-- Email Header -->
    <div class="email-detail-header">

      <!-- Header: Left -->
      <div class="email-header-left d-flex align-items-center">
        <span class="go-back mr-1">
          <feather-icon
            :icon="$store.state.appConfig.isRTL ? 'ChevronRightIcon' : 'ChevronLeftIcon'"
            size="20"
            class="align-bottom"
            @click="$emit('close-email-view')"
          />
        </span>
        <h4 class="email-subject mb-0">
          {{ emailViewData.subject }}
        </h4>
      </div>

      <!-- Header: Right -->
      <div class="email-header-right ml-2 pl-1">

        <!-- Mark Starred -->
        <feather-icon
          icon="StarIcon"
          size="17"
          class="cursor-pointer"
          :class="{ 'text-warning fill-current': emailViewData.isStarred }"
          @click="$emit('toggle-email-starred')"
        />

        <!-- Move email to folder -->
        <b-dropdown
          variant="link"
          no-caret
          toggle-class="p-0"
          right
          class="ml-75"
        >
          <template #button-content>
            <feather-icon
              icon="FolderIcon"
              size="17"
            />
          </template>

          <b-dropdown-item @click="$emit('move-email-to-folder', 'draft')">
            <feather-icon icon="Edit2Icon" />
            <span class="align-middle ml-50">Draft</span>
          </b-dropdown-item>

          <b-dropdown-item @click="$emit('move-email-to-folder', 'spam')">
            <feather-icon icon="InfoIcon" />
            <span class="align-middle ml-50">Spam</span>
          </b-dropdown-item>

          <b-dropdown-item
            v-show="$route.params.folder !== 'trash'"
            @click="$emit('move-email-to-folder', 'trash')"
          >
            <feather-icon icon="TrashIcon" />
            <span class="align-middle ml-50">Trash</span>
          </b-dropdown-item>
        </b-dropdown>

        <!-- Update Label -->
        <b-dropdown
          variant="link"
          no-caret
          toggle-class="p-0"
          class="ml-75"
          right
        >
          <template #button-content>
            <feather-icon
              icon="TagIcon"
              size="17"
              class="align-middle text-body"
            />
          </template>
          <b-dropdown-item @click="$emit('update-email-label', 'personal')">
            <span class="mr-50 bullet bullet-success bullet-sm" />
            <span>Personal</span>
          </b-dropdown-item>
          <b-dropdown-item @click="$emit('update-email-label', 'company')">
            <span class="mr-50 bullet bullet-primary bullet-sm" />
            <span>Company</span>
          </b-dropdown-item>
          <b-dropdown-item @click="$emit('update-email-label', 'important')">
            <span class="mr-50 bullet bullet-warning bullet-sm" />
            <span>Important</span>
          </b-dropdown-item>
          <b-dropdown-item @click="$emit('update-email-label', 'private')">
            <span class="mr-50 bullet bullet-danger bullet-sm" />
            <span>Private</span>
          </b-dropdown-item>
        </b-dropdown>

        <!-- Mark Un-Read -->
        <feather-icon
          icon="MailIcon"
          class="ml-75 cursor-pointer"
          size="17"
          @click="$emit('mark-email-unread')"
        />

        <!-- Move to Trash -->
        <feather-icon
          v-show="$route.params.folder !== 'trash'"
          icon="TrashIcon"
          class="ml-75"
          size="17"
          @click="$emit('move-email-to-folder', 'trash')"
        />

        <!-- Show Previous Mail -->
        <feather-icon
          :icon="$store.state.appConfig.isRTL ? 'ChevronRightIcon' : 'ChevronLeftIcon'"
          size="17"
          class="ml-75 cursor-pointer"
          :class="{'text-muted pointer-events-none': !opendedEmailMeta.hasPreviousEmail}"
          @click="$emit('change-opened-email', 'previous')"
        />

        <!-- Show Next Mail -->
        <feather-icon
          :icon="$store.state.appConfig.isRTL ? 'ChevronLeftIcon' : 'ChevronRightIcon'"
          size="17"
          class="ml-75 cursor-pointer"
          :class="{'text-muted pointer-events-none': !opendedEmailMeta.hasNextEmail}"
          @click="$emit('change-opened-email', 'next')"
        />
      </div>
    </div>

    <!-- Email Details -->
    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="email-scroll-area scroll-area"
    >

      <!-- Label Row -->
      <b-row>
        <b-col cols="12">
          <div class="email-label">
            <b-badge
              v-for="(label) in emailViewData.labels"
              :key="label"
              pill
              class="text-capitalize mr-50"
              :variant="`light-${resolveLabelColor(label)}`"
            >
              {{ label }}
            </b-badge>
          </div>
        </b-col>
      </b-row>

      <!-- Action: Show Earlier Message -->
      <b-row
        v-if="!showWholeThread && emailViewData.replies && emailViewData.replies.length"
        class="mb-1"
      >
        <b-col cols="12">
          <b-link
            class="font-weight-bold"
            @click="showWholeThread = true"
          >
            View {{ emailViewData.replies.length }} Earlier Message{{ emailViewData.replies.length > 1 ? 's' : '' }}
          </b-link>
        </b-col>
      </b-row>

      <!-- Earlier Email Messages -->
      <template v-if="showWholeThread">
        <b-row
          v-for="threadMail in emailViewData.replies.slice().reverse()"
          :key="threadMail.id"
        >
          <b-col cols="12">
            <email-message-card :message="threadMail" />
          </b-col>
        </b-row>
      </template>

      <!-- Email Thread -->
      <b-row>
        <b-col cols="12">
          <email-message-card :message="emailViewData" />
        </b-col>
      </b-row>

      <!-- Email Actions: Reply or Forward -->
      <b-row>
        <b-col cols="12">
          <b-card>
            <div class="d-flex justify-content-between">
              <h5 class="mb-0">
                Click here to
                <b-link>Reply</b-link>
                or
                <b-link>Forward</b-link>
              </h5>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </vue-perfect-scrollbar>
  </div>
</template>

<script>
import {
  BDropdown, BDropdownItem, BRow, BCol, BBadge, BCard, BLink,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { ref, watch } from '@vue/composition-api'
import useEmail from './useEmail'
import EmailMessageCard from './EmailMessageCard.vue'

export default {
  components: {

    // BSV
    BDropdown,
    BDropdownItem,
    BRow,
    BCol,
    BBadge,
    BCard,
    BLink,

    // 3rd Party
    VuePerfectScrollbar,

    // SFC
    EmailMessageCard,
  },
  props: {
    emailViewData: {
      type: Object,
      required: true,
    },
    opendedEmailMeta: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { resolveLabelColor } = useEmail()

    const perfectScrollbarSettings = {
      maxScrollbarLength: 150,
    }

    const showWholeThread = ref(false)

    watch(() => props.emailViewData.id, () => {
      showWholeThread.value = false
    })

    return {

      // UI
      perfectScrollbarSettings,
      showWholeThread,

      // useEmail
      resolveLabelColor,
    }
  },
}
</script>

<style>

</style>
