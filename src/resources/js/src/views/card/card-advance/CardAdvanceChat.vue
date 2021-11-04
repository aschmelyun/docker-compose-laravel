<template>
  <b-card
    class="chat-widget"
    no-body
  >
    <b-card-header>
      <div class="d-flex align-items-center">
        <b-avatar
          size="34"
          :src="require('@/assets/images/avatars/1.png')"
          class="mr-50 badge-minimal"
          badge
          badge-variant="success"
        />
        <h5 class="mb-0">
          Carrie Hawkins
        </h5>
      </div>
      <feather-icon
        icon="MoreVerticalIcon"
        size="18"
      />
    </b-card-header>

    <section class="chat-app-window">
      <!-- User Chat Area -->
      <vue-perfect-scrollbar
        ref="refChatLogPS"
        :settings="perfectScrollbarSettings"
        class="user-chats scroll-area"
      >
        <chat-log
          :chat-data="chatData"
          :profile-user-avatar="require('@/assets/images/avatars/10.png')"
        />
      </vue-perfect-scrollbar>

      <!-- Message Input -->
      <b-form
        class="chat-app-form"
        @submit.prevent="sendMessage"
      >
        <b-input-group class="input-group-merge form-send-message mr-1">
          <b-form-input
            v-model="chatInputMessage"
            placeholder="Enter your message"
          />
        </b-input-group>
        <b-button
          variant="primary"
          type="submit"
        >
          Send
        </b-button>
      </b-form>
    </section>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BAvatar, BForm, BFormInput, BInputGroup, BButton,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import ChatLog from '@/views/apps/chat/ChatLog.vue'

export default {
  components: {
    BCard,
    BCardHeader,
    BAvatar,
    BForm,
    BFormInput,
    BInputGroup,
    BButton,

    // SFC
    ChatLog,

    // 3rd party
    VuePerfectScrollbar,
  },
  data() {
    return {
      perfectScrollbarSettings: {
        maxScrollbarLength: 150,
        wheelPropagation: false,
      },
      chatInputMessage: '',
      chatData: {
        chat: {
          id: 2, userId: 1, unseenMsgs: 0, chat: [{ message: "How can we help? We're here for you!", time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)', senderId: 11 }, { message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?', time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)', senderId: 1 }, { message: 'It should be Bootstrap 4 compatible.', time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)', senderId: 1 }, { message: 'Absolutely!', time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)', senderId: 11 }, { message: 'Modern admin is the responsive bootstrap 4 admin template.!', time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)', senderId: 11 }, { message: 'Looks clean and fresh UI.', time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)', senderId: 1 }, { message: "It's perfect for my next project.", time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)', senderId: 1 }, { message: 'How can I purchase it?', time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)', senderId: 1 }, { message: 'Thanks, from ThemeForest.', time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)', senderId: 11 }, { message: 'I will purchase it for sure. 👍', time: '2020-12-08T13:52:38.013Z', senderId: 1 }],
        },
        contact: {
          id: 1,
          fullName: 'Felecia Rower',
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/1.png'),
          status: 'away',
        },
      },
    }
  },
  mounted() {
    this.psToBottom()
  },
  methods: {
    sendMessage() {
      this.chatData.chat.chat.push({
        message: this.chatInputMessage,
        time: new Date(),
        senderId: 11,
      })
      this.chatInputMessage = ''

      // Update scroll position
      // Scroll to bottom
      this.$nextTick(() => {
        this.psToBottom()
      })
    },
    psToBottom() {
      const scrollEl = this.$refs.refChatLogPS.$el || this.$refs.refChatLogPS
      scrollEl.scrollTop = scrollEl.scrollHeight
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/base/pages/app-chat-list.scss";
</style>
