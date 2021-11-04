<template>
  <b-card-code title="Actionable avatars">
    <b-card-text class="mb-0">
      <span>Want to trigger the opening of a modal or trigger an action? Set the button prop to instruct</span>
      <code>&lt;b-avatar&gt;</code>
      <span> to render as a </span>
      <code>&lt;button&gt;</code>
      <span> element.</span>
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- button avatar -->
      <b-avatar
        button
        variant="primary"
        text="BA"
        class="align-baseline"
        @click="showToast"
      />
      <span> Button Avatar</span>

      <!-- link avatar -->
      <b-avatar
        href="#foobar"
        :src="require('@/assets/images/portrait/small/avatar-s-8.jpg')"
      />
      <span>Link Avatar</span>
    </div>

    <template #code>
      {{ codeAction }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { codeAction } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
      codeAction,
    }
  },
  methods: {
    showToast() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
        },
      })
    },
  },
}
</script>
