<template>
  <div
    class="user-profile-sidebar"
    :class="{'show': shallShowActiveChatContactSidebar}"
  >
    <!-- Header -->
    <header
      v-if="contact"
      class="user-profile-header"
    >
      <span class="close-icon">
        <feather-icon
          icon="XIcon"
          @click="$emit('update:shall-show-active-chat-contact-sidebar', false)"
        />
      </span>

      <div class="header-profile-sidebar">
        <div class="avatar box-shadow-1 avatar-xl avatar-border">
          <b-avatar
            size="70"
            :src="contact.avatar"
          />
          <span
            class="avatar-status-xl"
            :class="`avatar-status-${contact.status}`"
          />
        </div>
        <h4 class="chat-user-name">
          {{ contact.fullName }}
        </h4>
        <span class="user-post text-capitalize">{{ contact.role }}</span>
      </div>
    </header>

    <!-- User Details -->
    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="user-profile-sidebar-area scroll-area"
    >

      <!-- About -->
      <h6 class="section-label mb-1">
        About
      </h6>
      <p>{{ contact.about }}</p>

      <!-- Personal Info -->
      <div class="personal-info">
        <h6 class="section-label mb-1 mt-3">
          Personal Information
        </h6>
        <ul class="list-unstyled">
          <li class="mb-1">
            <feather-icon
              icon="MailIcon"
              size="16"
              class="mr-75"
            />
            <span class="align-middle">lucifer@email.com</span>
          </li>
          <li class="mb-1">
            <feather-icon
              icon="PhoneCallIcon"
              size="16"
              class="mr-75"
            />
            <span class="align-middle">+1(123) 456 - 7890</span>
          </li>
          <li>
            <feather-icon
              icon="ClockIcon"
              size="16"
              class="mr-75"
            />
            <span class="align-middle">Mon - Fri 10AM - 8PM</span>
          </li>
        </ul>
      </div>

      <!-- More Options -->
      <div class="more-options">
        <h6 class="section-label mb-1 mt-3">
          Options
        </h6>
        <ul class="list-unstyled">
          <li class="cursor-pointer mb-1">
            <feather-icon
              icon="TagIcon"
              size="16"
              class="mr-75"
            />
            <span class="align-middle">Add Tag</span>
          </li>
          <li class="cursor-pointer mb-1">
            <feather-icon
              icon="StarIcon"
              size="16"
              class="mr-75"
            />
            <span class="align-middle">Important Contact</span>
          </li>
          <li class="cursor-pointer mb-1">
            <feather-icon
              icon="ImageIcon"
              size="16"
              class="mr-75"
            />
            <span class="align-middle">Shared Media</span>
          </li>
          <li class="cursor-pointer mb-1">
            <feather-icon
              icon="TrashIcon"
              size="16"
              class="mr-75"
            />
            <span class="align-middle">Delete Contact</span>
          </li>
          <li class="cursor-pointer">
            <feather-icon
              icon="SlashIcon"
              size="16"
              class="mr-75"
            />
            <span class="align-middle">Block Contact</span>
          </li>
        </ul>
      </div>
    </vue-perfect-scrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { BAvatar } from 'bootstrap-vue'

export default {
  components: {
    // BSV
    BAvatar,

    // 3rd Party
    VuePerfectScrollbar,
  },
  props: {
    shallShowActiveChatContactSidebar: {
      type: Boolean,
      required: true,
    },
    contact: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const perfectScrollbarSettings = {
      maxScrollbarLength: 150,
    }

    return {
      perfectScrollbarSettings,
    }
  },
}
</script>

<style>

</style>
