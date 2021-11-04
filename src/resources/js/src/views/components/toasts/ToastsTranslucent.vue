<template>
  <b-card-code
    no-body
    title="Translucent"
  >
    <b-card-body>
      <b-card-text>
        <span>we are using the </span>
        <code>static</code>
        <span>
          prop in the above example to render the toast in-place in the document, rather than transporting it to a
        </span>
        <code>&lt;b-toaster&gt;</code>
        <span> target container</span>
      </b-card-text>
    </b-card-body>

    <div class="translucent-wrap bg-primary rounded-bottom p-1">
      <b-toast
        id="example-toast3"
        v-model="visible"
        static
        no-auto-hide
      >
        <template #toast-title>
          <div class="d-flex flex-grow-1 align-items-center mr-1">
            <b-img
              :src="require('@/assets/images/logo/logo.png')"
              class="mr-1"
              height="18"
              width="25"
              alt="Toast image"
            />
            <strong class="mr-auto">Vue Admin</strong>
            <small class="text-muted">11 mins ago</small>
          </div>
        </template>
        <span>Hello, world! This is a toast message.</span>
      </b-toast>
    </div>

    <template #code>
      {{ codeTranslucent }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BToast, BImg, BCardText, BCardBody,
} from 'bootstrap-vue'
import { codeTranslucent } from './code'

export default {
  components: {
    BCardCode,
    BToast,
    BCardBody,
    BImg,
    BCardText,
  },
  data() {
    return {
      visible: true,
      codeTranslucent,
    }
  },
}
</script>

<style lang="scss" scoped>
.translucent-wrap {
  height: 110px;
  position: relative;
}
</style>
