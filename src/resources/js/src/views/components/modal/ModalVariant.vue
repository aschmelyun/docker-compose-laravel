<template>
  <b-card-code title="Variants">
    <b-card-text>
      <span>Control the header, footer, and body background and text variants by setting the </span>
      <code>header-bg-variant, header-text-variant, body-bg-variant, body-text-variant, footer-bg-variant, and
        footer-text-variant</code>
      <span> props.</span>
    </b-card-text>

    <!-- button -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="show = true"
    >
      Show Modal
    </b-button>

    <!-- modal -->
    <b-modal
      v-model="show"
      title="Modal Variants"
      title-tag="div"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3" />
          <b-col>Background</b-col>
          <b-col>Text</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">
            Header
          </b-col>
          <b-col>
            <b-form-select
              v-model="headerBgVariant"
              :options="variants"
            />
          </b-col>
          <b-col>
            <b-form-select
              v-model="headerTextVariant"
              :options="variants"
            />
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">
            Body
          </b-col>
          <b-col>
            <b-form-select
              v-model="bodyBgVariant"
              :options="variants"
            />
          </b-col>
          <b-col>
            <b-form-select
              v-model="bodyTextVariant"
              :options="variants"
            />
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            Footer
          </b-col>
          <b-col>
            <b-form-select
              v-model="footerBgVariant"
              :options="variants"
            />
          </b-col>
          <b-col>
            <b-form-select
              v-model="footerTextVariant"
              :options="variants"
            />
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100 d-flex justify-content-between">
          <b-card-text class="mb-0">
            Modal Footer Content
          </b-card-text>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            size="sm"
            @click="show = false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>

    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButton, BModal, VBModal, BContainer, BRow, BCol, BFormSelect, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeVariant } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCol,
    BContainer,
    BFormSelect,
    BModal,
    BCardText,
    BRow,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'warning',
      footerTextVariant: 'dark',
      headerBgVariant: 'info',
      headerTextVariant: 'primary',
      show: false,
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      codeVariant,
    }
  },
}
</script>
