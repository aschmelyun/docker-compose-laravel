<template>
  <b-sidebar
    id="sidebar-send-invoice"
    sidebar-class="sidebar-lg"
    bg-variant="white"
    shadow
    backdrop
    no-header
    right
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Send Invoice
        </h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />

      </div>

      <!-- Body -->
      <b-form
        class="p-2"
        @submit.prevent
      >

        <!-- From -->
        <b-form-group
          label="From"
          label-for="from"
        >
          <b-form-input
            id="from"
            v-model="sendInvoiceData.from"
            trim
            type="email"
          />
        </b-form-group>

        <!-- To -->
        <b-form-group
          label="To"
          label-for="to"
        >
          <b-form-input
            id="to"
            v-model="sendInvoiceData.to"
            trim
            type="email"
          />
        </b-form-group>

        <!-- Subject -->
        <b-form-group
          label="Subject"
          label-for="subject"
        >
          <b-form-input
            id="subject"
            v-model="sendInvoiceData.subject"
            trim
          />
        </b-form-group>

        <!-- Message -->
        <b-form-group
          label="Message"
          label-for="message"
        >
          <b-form-textarea
            id="message"
            v-model="sendInvoiceData.message"
            rows="12"
            trim
          />
        </b-form-group>

        <!-- ? File/Attachement -->
        <b-badge variant="light-primary">
          <feather-icon icon="LinkIcon" />
          <span class="ml-50">Invoice Attached</span>
        </b-badge>

        <!-- Form Actions -->
        <div class="d-flex mt-2">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mr-2"
            type="submit"
            @click="hide"
          >
            Send
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
            @click="hide"
          >
            Cancel
          </b-button>
        </div>
      </b-form>
    </template>
  </b-sidebar>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormTextarea, BButton, BBadge,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BSidebar, BForm, BFormGroup, BFormInput, BFormTextarea, BButton, BBadge,
  },
  directives: {
    Ripple,
  },
  setup() {
    const sendInvoiceData = ref({
      from: 'shelbyComapny@email.com',
      to: 'qConsolidated@email.com',
      subject: 'Invoice of purchased Admin Templates',
      message: `Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`,
      // ? Need to handle how you want to send item
      // * You can also send link to download invoice in message
    })

    return {
      sendInvoiceData,
    }
  },
}
</script>

<style>

</style>
